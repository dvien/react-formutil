import React, { Component, Children, cloneElement, createElement } from 'react';
import PropTypes from 'prop-types';
import FormContext from './context';
import * as utils from './utils';
import warning from 'warning';

const FORM_VALIDATE_RESULT = 'FORM_VALIDATE_RESULT';

const runCallback = function(callback, ...args) {
    if (utils.isFunction(callback)) {
        callback(...args);
    }
};

class Form extends Component {
    static displayName = 'React.Formutil.Form';

    static propTypes = {
        render: PropTypes.func,
        component: PropTypes.func,
        children(props, ...args) {
            let pt = PropTypes.oneOfType([PropTypes.func, PropTypes.node]);
            if (!props.render && !props.component) {
                pt = pt.isRequired;
            }

            return pt(props, ...args);
        },
        $defaultValues: PropTypes.object,
        $defaultStates: PropTypes.object,
        $onFormChange: PropTypes.func,
        $validator: PropTypes.func,
        $processer: PropTypes.func
    };

    static defaultProps = {
        $defaultValues: {},
        $defaultStates: {}
    };

    $$registers = {};
    $$deepRegisters = {};

    constructor(props) {
        super(props);

        this.$$defaultInitialize();
    }

    getFormContext() {
        return {
            $$registers: this.$$registers,
            $$register: this.$$register,
            $$unregister: this.$$unregister,
            $$onChange: this.$$onChange,
            $$getDefault: this.$$getDefault,
            $formutil: this.$formutil
        };
    }

    /**
     * @desc 注册或者替换(preName)Field
     */
    $$register = (name, $handler, prevName) => {
        let $registered;

        if (prevName) {
            $registered = this.$$getRegister(prevName);

            if ($registered && $handler.$$FIELD_UUID === $registered.$$FIELD_UUID) {
                utils.objectClear(this.$$registers, prevName);
                utils.objectClear(this.$$defaultValues, prevName);

                this.$$fieldChangedQueue.push({
                    name: prevName,
                    $prevValue: $registered.$getState().$value
                });
            }
        }

        if (name) {
            $registered = this.$$getRegister(name);

            warning(
                !$registered,
                `The Field with a name '${name}' has been registered. You will get a copy of it's $fieldutil!`
            );

            if (!$registered) {
                this.$$registers[name] = $handler;

                this.$$fieldChangedQueue.push({
                    name,
                    $newValue: $handler.$getState().$value
                });
            }
        }

        if (name || prevName) {
            this.creatDeepRegisters();
            this.$render();
        }

        return $registered || $handler;
    };

    $$unregister = (name, $handler) => {
        if (name) {
            const $registered = this.$getField(name);

            if ($registered && $handler.$$FIELD_UUID === $registered.$$FIELD_UUID) {
                utils.objectClear(this.$$registers, name);
                utils.objectClear(this.$$defaultValues, name);

                this.$$fieldChangedQueue.push({
                    name,
                    $prevValue: $registered.$getState().$value
                });

                this.creatDeepRegisters();
                this.$render();
            }
        }
    };

    $$defaultInitialize = () => {
        this.$$defaultValues = JSON.parse(JSON.stringify(this.props.$defaultValues));
        this.$$defaultStates = JSON.parse(JSON.stringify(this.props.$defaultStates));
    };

    $$getDefault = () => ({
        $$defaultStates: this.$$defaultStates,
        $$defaultValues: this.$$defaultValues
    });

    $$fieldChangedQueue = [];
    $$triggerFormChange = () => {
        if (this.$$fieldChangedQueue.length) {
            const $$fieldChangedQueue = [...this.$$fieldChangedQueue];
            this.$$fieldChangedQueue.length = 0;

            const $newValues = {};
            const $prevValues = {};
            let hasFormChanged = false;

            $$fieldChangedQueue.forEach(item => {
                if (item.$newValue !== item.$prevValue) {
                    if ('$newValue' in item && '$prevValue' in item) {
                        const $handler = this.$getField(item.name);

                        if ($handler) {
                            this.$getField(item.name).$$triggerChange(item);
                        }
                    }

                    '$newValue' in item && utils.parsePath($newValues, item.name, item.$newValue);
                    '$prevValue' in item && utils.parsePath($prevValues, item.name, item.$prevValue);

                    hasFormChanged = true;
                }
            });

            if (hasFormChanged) {
                if (utils.isFunction(this.props.$onFormChange)) {
                    this.props.$onFormChange(this.$formutil, $newValues, $prevValues);
                }

                this.$$formValidate();
            }
        }
    };

    creatDeepRegisters = () => {
        this.$$deepRegisters = {};

        utils.objectEach(this.$$registers, (handler, name) => utils.parsePath(this.$$deepRegisters, name, handler));
    };

    $$getRegister = name => {
        if (name) {
            const field = this.$$registers[name] || utils.parsePath(this.$$deepRegisters, name);

            if (field) {
                return field;
            }
        }
    };

    $$formValidate = callback => {
        const { $validator } = this.props;

        if (utils.isFunction($validator)) {
            let $isCancelAsyncValidate = false;

            if (this.$shouldCancelPrevAsyncValidate) {
                this.$shouldCancelPrevAsyncValidate();
            }

            const result = $validator(this.$formutil.$params, this.formtutil);

            if (utils.isPromise(result)) {
                if (!this.$$formPending) {
                    this.$$formPending = true;

                    this.$render();
                }

                this.$shouldCancelPrevAsyncValidate = () => {
                    $isCancelAsyncValidate = true;
                };

                result
                    .catch(reason => {
                        if (!$isCancelAsyncValidate) {
                            this.$$setFormErrors(reason);
                        }
                    })
                    .then(() => {
                        if (!$isCancelAsyncValidate) {
                            this.$$formPending = false;

                            this.$render(callback);
                        }
                    });
            } else {
                this.$$setFormErrors(result, callback);
            }
        } else {
            runCallback(callback);
        }
    };

    $$setFormErrors = (validResults, callback) =>
        this.$$setStates(
            validResults || {},
            (result, handler) => {
                const { $error = {} } = handler.$getState();

                if (result) {
                    return {
                        $error: {
                            ...$error,
                            [FORM_VALIDATE_RESULT]: result
                        }
                    };
                }

                if ($error[FORM_VALIDATE_RESULT]) {
                    delete $error[FORM_VALIDATE_RESULT];

                    return {
                        $error
                    };
                }

                return;
            },
            callback,
            true
        );

    $getField = name => {
        const field = this.$$getRegister(name);

        warning(field, `$getField('${name}'') fail to find the right Field. Maybe it has been removed.`);

        if (field) {
            return field.$new();
        }
    };

    $$onChange = (name, $state, callback) =>
        this.$setStates(
            {
                [name]: $state
            },
            callback
        );

    $$setStates = ($stateTree = {}, processer, callback, force) => {
        let hasStateChange = false;
        const $parsedTree = { ...$stateTree };

        utils.objectEach($stateTree, (data, name) => utils.parsePath($parsedTree, name, data));

        utils.objectEach(this.$$registers, (handler, name) => {
            const data = $parsedTree[name] || utils.parsePath($parsedTree, name);

            if (!utils.isUndefined(data) || force) {
                const $newState = processer(data, handler);

                if ($newState) {
                    const $prevValue = this.$formutil.$weakParams[name];
                    const { $value: $newValue } = handler.$$merge($newState);

                    handler.$$detectChange($newState);

                    if ('$value' in $newState || '$viewValue' in $newState) {
                        const findItem = utils.arrayFind(this.$$fieldChangedQueue, item => item.name === name);

                        if (findItem) {
                            findItem.$newValue = $newValue;
                        } else {
                            this.$$fieldChangedQueue.push({
                                name,
                                $newValue,
                                $prevValue
                            });
                        }
                    }

                    hasStateChange = true;
                }
            }
        });

        if (hasStateChange) {
            this.$render(callback);
        } else {
            runCallback(callback);
        }
    };

    componentDidUpdate() {
        this.$$triggerFormChange();
    }

    $render = callback => this.forceUpdate(callback);

    $validates = callback => {
        utils.objectEach(this.$$registers, handler => handler.$validate());

        this.$$formValidate(callback);
    };
    $validate = (name, callback) => this.$getField(name).$validate(callback);

    $reset = ($stateTree, callback) => {
        this.$$defaultInitialize();

        if (utils.isFunction($stateTree)) {
            callback = $stateTree;
            $stateTree = {};
        }

        return this.$$setStates($stateTree, ($state, handler) => handler.$reset($state), callback, true);
    };

    $setStates = ($stateTree, callback) => this.$$setStates($stateTree, $state => $state, callback);

    $setValues = ($valueTree, callback) => {
        Object.assign(this.$$defaultValues, JSON.parse(JSON.stringify($valueTree)));

        return this.$$setStates($valueTree, $value => ({ $value }), callback);
    };
    $setFocuses = ($focusedTree, callback) => this.$$setStates($focusedTree, $focused => ({ $focused }), callback);
    $setDirts = ($dirtyTree, callback) => this.$$setStates($dirtyTree, $dirty => ({ $dirty }), callback);
    $setTouches = ($touchedTree, callback) => this.$$setStates($touchedTree, $touched => ({ $touched }), callback);
    $setPendings = ($pendingTree, callback) => this.$$setStates($pendingTree, $pending => ({ $pending }), callback);
    $setErrors = ($errorTree, callback) => this.$$setStates($errorTree, $error => ({ $error }), callback);

    $batchState = ($state, callback) => this.$setStates(utils.objectMap(this.$$registers, () => $state), callback);
    $batchDirty = ($dirty, callback) =>
        this.$batchState(
            {
                $dirty
            },
            callback
        );
    $batchTouched = ($touched, callback) =>
        this.$batchState(
            {
                $touched
            },
            callback
        );
    $batchFocused = ($focused, callback) =>
        this.$batchState(
            {
                $focused
            },
            callback
        );
    $batchPending = ($pending, callback) =>
        this.$batchState(
            {
                $pending
            },
            callback
        );
    $batchError = ($error, callback) =>
        this.$batchState(
            {
                $error
            },
            callback
        );

    _render() {
        const $formutil = this.$formutil;
        let { children, render, component } = this.props;

        if (component) {
            return createElement(component, { $formutil });
        }

        if (utils.isFunction(render)) {
            return render($formutil);
        }

        if (utils.isFunction(children)) {
            return children($formutil);
        }

        return Children.map(
            children,
            child =>
                child && utils.isFunction(child.type)
                    ? cloneElement(child, {
                          $formutil
                      })
                    : child
        );
    }

    render() {
        const { $processer } = this.props;
        const $stateArray = Object.keys(this.$$registers).map(path => ({
            path,
            $state: this.$$registers[path].$getState()
        }));

        const $weakParams = utils.toObject($stateArray, ($params, { path, $state }) => {
            if ($processer) {
                $processer($state, path);
            }

            if ('$value' in $state && ($state.$dirty || !utils.isUndefined($state.$value))) {
                $params[path] = $state.$value;
            }
        });

        const $invalid = $stateArray.some(({ $state }) => $state.$invalid);
        const $dirty = $stateArray.some(({ $state }) => $state.$dirty);
        const $touched = $stateArray.some(({ $state }) => $state.$touched);
        const $focused = $stateArray.some(({ $state }) => $state.$focused);
        const $pending = this.$$formPending || $stateArray.some(({ $state }) => $state.$pending);

        const $formutil = (this.$formutil = {
            $$registers: this.$$registers,
            $$deepRegisters: this.$$deepRegisters,
            $states: utils.toObject($stateArray, ($states, { path, $state }) => utils.parsePath($states, path, $state)),
            $params: utils.toObject(
                $stateArray,
                ($params, { path, $state }) => path in $weakParams && utils.parsePath($params, path, $weakParams[path]),
                {
                    ...this.$$defaultValues
                }
            ),
            $errors: utils.toObject($stateArray, ($errors, { path, $state }) => {
                if ($state.$invalid) {
                    utils.parsePath($errors, path, $state.$error);
                }
            }),
            $dirts: utils.toObject($stateArray, ($dirts, { path, $state }) =>
                utils.parsePath($dirts, path, $state.$dirty)
            ),
            $touches: utils.toObject($stateArray, ($touches, { path, $state }) =>
                utils.parsePath($touches, path, $state.$touched)
            ),
            $focuses: utils.toObject($stateArray, ($focuses, { path, $state }) =>
                utils.parsePath($focuses, path, $state.$focused)
            ),
            $pendings: utils.toObject($stateArray, ($pendings, { path, $state }) =>
                utils.parsePath($pendings, path, $state.$pending)
            ),

            $weakStates: utils.toObject($stateArray, ($states, { path, $state }) => ($states[path] = $state)),
            $weakParams,
            $weakErrors: utils.toObject($stateArray, ($errors, { path, $state }) => {
                if ($state.$invalid) {
                    $errors[path] = $state.$error;
                }
            }),
            $weakDirts: utils.toObject($stateArray, ($dirts, { path, $state }) => ($dirts[path] = $state.$dirty)),
            $weakTouches: utils.toObject(
                $stateArray,
                ($touches, { path, $state }) => ($touches[path] = $state.$touched)
            ),
            $weakFocuses: utils.toObject(
                $stateArray,
                ($focuses, { path, $state }) => ($focuses[path] = $state.$focused)
            ),
            $weakPendings: utils.toObject(
                $stateArray,
                ($weakPendings, { path, $state }) => ($weakPendings[path] = $state.$pending)
            ),

            $getFirstError(name) {
                if (name) {
                    const $fieldutil = $formutil.$getField(name);

                    return $fieldutil && $fieldutil.$getFirstError();
                }

                for (let name in $formutil.$weakErrors) {
                    const $fieldError = $formutil.$weakErrors[name];

                    for (let key in $fieldError) {
                        return $fieldError[key] instanceof Error ? $fieldError[key].message : $fieldError[key];
                    }
                }
            },

            $render: this.$render,

            $getField: this.$getField,

            // get the newest $formutil
            $new: () => this.$formutil,

            $setStates: this.$setStates,
            $setValues: this.$setValues,
            $setErrors: this.$setErrors,
            $setTouches: this.$setTouches,
            $setDirts: this.$setDirts,
            $setFocuses: this.$setFocuses,

            $batchState: this.$batchState,
            $batchTouched: this.$batchTouched,
            $batchDirty: this.$batchDirty,
            $batchFocused: this.$batchFocused,

            $reset: this.$reset,
            $validates: this.$validates,
            $validate: this.$validate,

            $valid: !$invalid,
            $invalid,
            $dirty,
            $pristine: !$dirty,
            $touched,
            $untouched: !$touched,
            $focused,
            $pending
        });

        return <FormContext.Provider value={this.getFormContext()}>{this._render()}</FormContext.Provider>;
    }
}

export default Form;
