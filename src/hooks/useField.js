import { useState, useLayoutEffect, useRef } from 'react';
import useFormContext from './useFormContext';
import { runCallback } from '../utils';
import { createHandler, GET_FIELD_UUID } from '../fieldHelper';
import warning from 'warning';

/**
 * @description
 * The custom hook for Field
 *
 * @param {string | object} [name]
 * @param {object} [props]
 *
 * @return {object} $Fieldutil
 */
function useField(name, props = {}) {
    let $name;

    if (name) {
        if (typeof name === 'string') {
            $name = name;

            props.name = $name;
        } else {
            props = name;

            $name = props.name;
        }
    }

    const $formContext = useFormContext();
    /** @type {any} */
    const $this = useRef({}).current;
    /** @type {React.MutableRefObject<any[]>} */
    const callbackRef = useRef([]);

    $this.$formContext = $formContext;
    $this.props = props;
    $this.$setState = $setState;

    const $registered = $this.$registered || $this.$fieldHandler || ($this.$fieldHandler = createHandler($this));
    // we not directly use this $state, just from $this.$state
    const [, setState] = useState(() => {
        $this.$fieldHandler.$$FIELD_UUID = GET_FIELD_UUID();

        const $state = $registered.$$reset();

        $registered.$validate();

        return $state;
    });

    useLayoutEffect(() => {
        const { $state } = $this;

        if ($this.isMounting) {
            if (!$name || !$formContext.$$register) {
                const { $prevValue } = $this;

                $registered.$$triggerChange({
                    $newValue: $state.$value,
                    $prevValue
                });
            }
        }

        $this.$prevValue = $state.$value;
    }, [$this.$state.$value]);

    useLayoutEffect(() => {
        $this.isMounting = true;

        warning(
            !$name || $formContext.$formutil,
            `You should enusre that the useField() with the name '${$name}' must be used underneath a <Form /> component or withForm() HOC, otherwise it's isolated.`
        );

        warning($name, `You should pass a name argument to useField(), otherwise it will be isolated!`);

        return () => {
            if ($formContext.$$unregister) {
                $formContext.$$unregister($name, $this.$fieldHandler, props.$reserveOnUnmount);
            }

            $this.isMounting = false;
        };
    }, []);

    useLayoutEffect(() => {
        if ($formContext.$$register) {
            $this.$registered = $formContext.$$register($name, $this.$fieldHandler, $this.$prevName);
        }

        $this.$prevName = $name;
    }, [$name]);

    useLayoutEffect(() => {
        if (callbackRef.current.length > 0) {
            const callbackQueue = [...callbackRef.current];

            callbackRef.current.length = 0;

            while (callbackQueue.length) {
                callbackQueue.pop()($this.$fieldutil);
            }
        }
    });

    function $setState($newState, callback) {
        return new Promise(resolve => {
            const execute = () => resolve(runCallback(callback, $this.$fieldutil));

            if ($this.isMounting) {
                if ($name && $formContext.$$onChange) {
                    $formContext.$$onChange($name, $newState, execute);
                } else {
                    setState($registered.$$merge($newState));

                    $registered.$$detectChange($newState);

                    callbackRef.current.push(execute);
                }
            } else {
                $registered.$$merge($newState);
                execute();
            }
        });
    }

    return ($this.$fieldutil = {
        $name,
        ...$registered.$getState(),
        ...$registered,
        $$formutil: $formContext.$formutil
    });
}

export default useField;
