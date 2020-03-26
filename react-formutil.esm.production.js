import e, {
    createContext as t,
    createElement as r,
    Children as n,
    cloneElement as i,
    Component as a,
    forwardRef as o
} from 'react';
import { isValidElementType as u } from 'react-is';
import s from 'warning';
import l from 'hoist-non-react-statics';
import f from 'react-fast-compare';
function $(e, t, r) {
    if (t in e) {
        Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true });
    } else {
        e[t] = r;
    }
    return e;
}
function c(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        if (t)
            n = n.filter(function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            });
        r.push.apply(r, n);
    }
    return r;
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        if (t % 2) {
            c(Object(r), true).forEach(function(t) {
                $(e, t, r[t]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
        } else {
            c(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
        }
    }
    return e;
}
function v(e, t) {
    if (t == null || t > e.length) t = e.length;
    for (var r = 0, n = new Array(t); r < t; r++) {
        n[r] = e[r];
    }
    return n;
}
function p(e) {
    if (Array.isArray(e)) return v(e);
}
function h(e) {
    if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(e)) return Array.from(e);
}
function m(e, t) {
    if (!e) return;
    if (typeof e === 'string') return v(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === 'Object' && e.constructor) r = e.constructor.name;
    if (r === 'Map' || r === 'Set') return Array.from(r);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(e, t);
}
function g() {
    throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
}
function y(e) {
    return p(e) || h(e) || m(e) || g();
}
function b(e) {
    if (Array.isArray(e)) return e;
}
function w(e, t) {
    if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(e))) return;
    var r = [];
    var n = true;
    var i = false;
    var a = undefined;
    try {
        for (var o = e[Symbol.iterator](), u; !(n = (u = o.next()).done); n = true) {
            r.push(u.value);
            if (t && r.length === t) break;
        }
    } catch (e) {
        i = true;
        a = e;
    } finally {
        try {
            if (!n && o['return'] != null) o['return']();
        } finally {
            if (i) throw a;
        }
    }
    return r;
}
function F() {
    throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
}
function V(e, t) {
    return b(e) || w(e, t) || m(e, t) || F();
}
function P(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function k(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ('value' in n) n.writable = true;
        Object.defineProperty(e, n.key, n);
    }
}
function S(e, t, r) {
    if (t) k(e.prototype, t);
    if (r) k(e, r);
    return e;
}
function C(e) {
    if (e === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
}
function O(e) {
    O = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function e(t) {
              return t.__proto__ || Object.getPrototypeOf(t);
          };
    return O(e);
}
function E() {
    if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === 'function') return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function j(e) {
    '@babel/helpers - typeof';
    if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
        j = function e(t) {
            return typeof t;
        };
    } else {
        j = function e(t) {
            return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
        };
    }
    return j(e);
}
function _(e, t) {
    if (t && (j(t) === 'object' || typeof t === 'function')) {
        return t;
    }
    return C(e);
}
function A(e) {
    return function() {
        var t = O(e),
            r;
        if (E()) {
            var n = O(this).constructor;
            r = Reflect.construct(t, arguments, n);
        } else {
            r = t.apply(this, arguments);
        }
        return _(this, r);
    };
}
function D(e, t) {
    D =
        Object.setPrototypeOf ||
        function e(t, r) {
            t.__proto__ = r;
            return t;
        };
    return D(e, t);
}
function x(e, t) {
    if (typeof t !== 'function' && t !== null) {
        throw new TypeError('Super expression must either be null or a function');
    }
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: true, configurable: true } });
    if (t) D(e, t);
}
var R = t(function() {
    return {};
});
var N = Object.getPrototypeOf({});
var U = /\s*(?:\]\s*\.|\]\s*\[|\.|\[|\])\s*/g;
var T = I(window) ? global : window;
function I(e) {
    return typeof e === 'undefined';
}
function H(e) {
    return typeof e === 'function';
}
function M(e) {
    return I(e) || e === null || e + '' === '';
}
function L(e) {
    return !!e && H(e.then);
}
function q(e) {
    return Object.prototype.toString.call(e) === '[object Object]';
}
function B(e) {
    if (!q(e)) return false;
    if (null === Object.getPrototypeOf(e)) return true;
    if (!H(e.constructor)) return false;
    return e.constructor.prototype === N;
}
function Y(e) {
    return u(e) && typeof e !== 'string';
}
function Q(e) {
    if (Array.isArray(e)) {
        var t = [];
        for (var r = 0, n = e.length; r < n; r++) {
            t[r] = Q(e[r]);
        }
        return t;
    } else if (B(e)) {
        var i = {};
        for (var a in e) {
            if (e.hasOwnProperty(a)) i[a] = Q(e[a]);
        }
        return i;
    }
    return e;
}
var G = function e(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) {
        n[i - 1] = arguments[i];
    }
    if (H(t)) {
        t.apply(void 0, n);
    }
    return n[0];
};
function z(e) {
    return function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) {
            r[n] = arguments[n];
        }
        if (Y(r[0])) {
            return e.apply(void 0, r);
        }
        return function(t) {
            return e(t, r[0]);
        };
    };
}
var K = ['minlength', 'maxlength', 'max', 'min', 'required', 'pattern', 'step'];
function W(e) {
    return K.indexOf(e.toLowerCase()) > -1;
}
var J = function e(t) {
    try {
        var r = new Function(
            'origin',
            'global',
            'return typeof '
                .concat(t, " === 'number' || (typeof ")
                .concat(t, " !== 'undefined' && !(origin in global)) ? ")
                .concat(t, ' : origin')
        );
        return r(t, T);
    } catch (e) {
        return t;
    }
};
function X() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
        t[r] = arguments[r];
    }
    var n = t[0],
        i = t[1],
        a = t[2];
    s(typeof i === 'string', 'The second parameter('.concat(JSON.stringify(i), ') of parsePath() must be a string.'));
    var o = (i.match(U) || []).map(function(e) {
        return e.replace(/\s/g, '');
    });
    var u = i
        .split(U)
        .map(function(e) {
            return e.trim();
        })
        .filter(function(e) {
            return e !== '';
        });
    var l = n;
    try {
        if (t.length < 3) {
            for (var f = 0, $ = u.length; f < $; f++) {
                var c = J(u[f]);
                if (f + 1 === $) {
                    return l[c];
                }
                if (I(l[c])) {
                    break;
                }
                l = l[c];
            }
        } else {
            for (var v = 0, p = u.length; v < p; v++) {
                var h = J(u[v]);
                var m = u[v + 1];
                var g = o[v];
                if (I(m)) {
                    l[h] = a;
                    break;
                }
                switch (g) {
                    case '].':
                    case '.':
                        l = l[h] = I(l[h]) ? {} : d({}, l[h]);
                        break;
                    case '][':
                    case '[':
                        var b = J(m);
                        l = l[h] = I(l[h])
                            ? typeof b === 'number' && b >= 0
                                ? []
                                : {}
                            : Array.isArray(l[h])
                            ? y(l[h])
                            : d({}, l[h]);
                        break;
                    default:
                        l[h] = a;
                        break;
                }
            }
        }
    } catch (e) {
        s(false, "The name '%s' of Field seems is not a legal expression.", i);
    }
    if (t.length > 2) {
        return n;
    }
}
function Z(e, t) {
    var r = t
        .split(U)
        .map(function(e) {
            return e.trim();
        })
        .filter(function(e) {
            return e !== '';
        });
    for (var n = 0, i = r.length; n < i; n++) {
        var a = J(r[n]);
        if (!(a in e)) {
            break;
        }
        if (n + 1 === i) {
            return { data: e[a] };
        }
        e = e[a];
    }
}
function ee(e, t) {
    if (e) {
        if (H(e)) {
            e(t);
        } else if ('current' in e) {
            e.current = t;
        }
    }
}
var te = function e(t, r) {
    for (var n = 0, i = t.length; n < i; n++) {
        if (r(t[n]) === true) {
            return t[n];
        }
    }
};
var re = function e(t, r) {
    return Object.keys(t).reduce(function(e, n) {
        e[n] = r(t[n], n, t);
        return e;
    }, {});
};
var ne = function e(t, r) {
    return Object.keys(t).forEach(function(e) {
        return r(t[e], e, t);
    });
};
var ie = undefined;
function ae(e, t, r) {
    ne(e, function(t, r) {
        if (t === ie) {
            delete e[r];
        } else if (B(t) || Array.isArray(t)) {
            ae(t, r, e);
        }
    });
    if (
        r &&
        Object.keys(e).every(function(t) {
            return e[t] === ie;
        })
    ) {
        r[t] = ie;
        ae(r);
    }
}
var oe = function e(t, r) {
    if (!I(X(t, r))) {
        X(t, r, ie);
        ae(t);
    }
};
function ue(e, t) {
    if (e === t) {
        return true;
    }
    var r = Object.keys(e);
    if (r.length !== Object.keys(t).length) {
        return false;
    }
    for (var n = 0; n < r.length; n++) {
        if (e[r[n]] !== t[r[n]]) {
            return false;
        }
    }
    return true;
}
var se = 'FORM_VALIDATE_RESULT';
var le, fe;
if (typeof requestAnimationFrame === 'function') {
    le = requestAnimationFrame;
    fe = cancelAnimationFrame;
} else {
    le = setTimeout;
    fe = clearTimeout;
}
var $e = (function(t) {
    x(o, t);
    var a = A(o);
    function o(e) {
        var t;
        P(this, o);
        t = a.call(this, e);
        t.$$formPending = void 0;
        t.$$formValidatePromise = void 0;
        t.$$registers = {};
        t.$$deepRegisters = {};
        t.getFormContext = function() {
            return {
                $$registers: t.$$registers,
                $$register: t.$$register,
                $$unregister: t.$$unregister,
                $$onChange: t.$$onChange,
                $$getDefault: t.$$getDefault,
                $formutil: t.$formutil
            };
        };
        t.$$regDuplications = {};
        t.$$duplicateTimer = void 0;
        t.$$checkDuplication = function() {
            var e = C(t),
                r = e.$$regDuplications;
            var n;
            ne(r, function(e, t) {
                var i = V(e, 2),
                    a = i[0],
                    o = i[1];
                s(a.$$reserved, "The Field with a name '".concat(t, "' has been registered!"));
                o.$$reset(a.$getState());
                n = delete r[t];
            });
            if (n) {
                t.$render();
            }
        };
        t.$$register = function(e, r, n) {
            t.$$unregister(n, r);
            if (e) {
                var i = t.$$getRegister(e);
                if (i) {
                    fe(t.$$duplicateTimer);
                    t.$$regDuplications[e] = [i, r];
                    t.$$duplicateTimer = le(t.$$checkDuplication);
                } else {
                    t.$$fieldChangedQueue.push({ name: e, $newValue: r.$getState().$value });
                    oe(t.$$defaultValues, e);
                }
                t.$$registers[(r.$name = e)] = r;
                t.$$formShouldUpdateFields[e] = true;
                t.createDeepRegisters();
                t.$render();
            }
        };
        t.$$unregister = function(e, r, n) {
            if (e) {
                if (e in t.$$regDuplications) {
                    var i = V(t.$$regDuplications[e], 2),
                        a = i[0],
                        o = i[1];
                    t.$$fieldChangedQueue.push({
                        name: e,
                        $newValue: o.$getState().$value,
                        $prevValue: a.$getState().$value
                    });
                    delete t.$$regDuplications[e];
                } else if (t.$$registers[e] === r) {
                    if (n) {
                        r.$$reserved = true;
                    } else {
                        delete t.$$registers[e];
                        t.$$fieldChangedQueue.push({ name: e, $prevValue: r.$getState().$value });
                        oe(t.$$defaultValues, e);
                    }
                }
                t.$$formShouldUpdateAll = true;
                t.createDeepRegisters();
                t.$render();
            }
        };
        t.$$defaultInitialize = function() {
            var e = t.props,
                r = e.$defaultValues,
                n = e.$defaultStates;
            t.$$defaultValues = t.$$deepParseObject(Q(H(r) ? r(t.props) || {} : r));
            t.$$defaultStates = t.$$deepParseObject(Q(H(n) ? n(t.props) || {} : n));
        };
        t.$$getDefault = function() {
            return { $$defaultStates: t.$$defaultStates, $$defaultValues: t.$$defaultValues };
        };
        t.$$formShouldUpdateFields = {};
        t.$$formShouldUpdateAll = false;
        t.$$triggerChangeTimer = void 0;
        t.$$fieldChangedQueue = [];
        t.$$triggerFormChange = function() {
            if (t.$$fieldChangedQueue.length) {
                var e = y(t.$$fieldChangedQueue);
                t.$$fieldChangedQueue.length = 0;
                var r = {};
                var n = {};
                var i = t.$$registers;
                var a = false;
                e.forEach(function(e) {
                    if (!(e.name in i)) {
                        delete e.$newValue;
                    }
                    if (e.$newValue !== e.$prevValue) {
                        if ('$newValue' in e && '$prevValue' in e) {
                            var o = t.$$getRegister(e.name);
                            if (o) {
                                o.$$triggerChange(e);
                            }
                        }
                        '$newValue' in e && X(r, e.name, e.$newValue);
                        '$prevValue' in e && X(n, e.name, e.$prevValue);
                        a = true;
                    }
                });
                if (a) {
                    if (H(t.props.$validator)) {
                        t.$$formValidate();
                    }
                    if (H(t.props.$onFormChange)) {
                        t.props.$onFormChange(t.$formutil, r, n);
                    }
                }
            }
        };
        t.createDeepRegisters = function() {
            return (t.$$deepRegisters = t.$$deepParseObject(t.$$registers));
        };
        t.$$getRegister = function(e) {
            if (e) {
                var r = t.$$registers[e] || X(t.$$deepRegisters, e);
                if (r) {
                    return r;
                }
            }
        };
        t.$$formValidate = function() {
            return (t.$$formValidatePromise = new Promise(function(e) {
                var r = t.props.$validator;
                var n;
                var i;
                var a;
                var o;
                var u = r(t.$formutil.$params, t.$formutil);
                var s = function t(r) {
                    return e(G(a, r));
                };
                if (L(u)) {
                    if (!t.$$formPending) {
                        t.$$formPending = true;
                        t.$render();
                    }
                    i = function e(t) {
                        return (n = t(s));
                    };
                    o = u
                        .then(
                            function() {
                                return void 0;
                            },
                            function(e) {
                                return e;
                            }
                        )
                        .then(function(e) {
                            if (n) {
                                return n;
                            }
                            t.$shouldCancelPrevAsyncValidate = null;
                            t.$$formPending = false;
                            return t.$$setFormErrors(e, s);
                        });
                } else {
                    if (t.$$formPending) {
                        t.$$formPending = false;
                    }
                    o = t.$$setFormErrors(u, s);
                }
                if (t.$shouldCancelPrevAsyncValidate) {
                    t.$shouldCancelPrevAsyncValidate(function(e) {
                        a = e;
                        return o;
                    });
                }
                t.$shouldCancelPrevAsyncValidate = i;
            }));
        };
        t.$$setFormErrors = function(e, r) {
            if (e && (e instanceof Error || typeof e !== 'object')) {
                s(
                    false,
                    'The result of $validator in <Form /> should always return None(null,undefined) or an object contains error message of Field.'
                );
                return t.$render(r);
            }
            return t.$$setStates(
                e || {},
                function(e, t) {
                    var r = t.$getState(),
                        n = r.$error,
                        i = n === void 0 ? {} : n;
                    if (e) {
                        return { $error: d({}, i, $({}, se, e)) };
                    }
                    if (i[se]) {
                        delete i[se];
                        return { $error: i };
                    }
                },
                r,
                true
            );
        };
        t.$getField = function(e) {
            var r = t.$$getRegister(e);
            s(!e || r, "$getField('".concat(e, "') fail to find the matched Field. Maybe it has been unmounted."));
            s(e, 'You should pass a name of the mounted Field to $getField().');
            if (r) {
                var n;
                return (n = r.$new) === null || n === void 0 ? void 0 : n.call(r);
            }
        };
        t.$$onChange = function(e, r, n) {
            return t.$setStates($({}, e, r), n);
        };
        t.$$setStates = function() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var r = arguments.length > 1 ? arguments[1] : undefined;
            var n = arguments.length > 2 ? arguments[2] : undefined;
            var i = arguments.length > 3 ? arguments[3] : undefined;
            var a = t.$$deepParseObject(e);
            ne(t.$$registers, function(e, n) {
                var o = Z(a, n);
                if (i || o) {
                    var u = r(o && o.data, e);
                    if (u) {
                        var s = t.$formutil.$weakParams[n];
                        var l = e.$$merge(u),
                            f = l.$value;
                        e.$$detectChange(u);
                        if ('$value' in u || '$viewValue' in u) {
                            var $ = te(t.$$fieldChangedQueue, function(e) {
                                return e.name === n;
                            });
                            if ($) {
                                if (!('$prevValue' in $)) {
                                    $.$prevValue = $.$newValue;
                                }
                                $.$newValue = f;
                            } else {
                                t.$$fieldChangedQueue.push({ name: n, $newValue: f, $prevValue: s });
                            }
                        }
                        t.$$formShouldUpdateFields[n] = true;
                    }
                }
            });
            return t.$render(n);
        };
        t.$render = function(e) {
            return new Promise(function(r) {
                return t.forceUpdate(function() {
                    return r(G(e, t.$formutil));
                });
            });
        };
        t.$validates = function() {
            var e;
            for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) {
                n[i] = arguments[i];
            }
            if (H(n[n.length - 1])) {
                e = n.pop();
            }
            if (n.length) {
                var a = function e(r) {
                    r.forEach(function(r) {
                        if (Array.isArray(r)) {
                            e(r);
                        } else {
                            var n = t.$getField(r);
                            if (n) {
                                n.$validate();
                            }
                        }
                    });
                };
                a(n);
            } else {
                ne(t.$$registers, function(e) {
                    return e.$validate();
                });
                if (H(t.props.$validator)) {
                    t.$$formValidate();
                }
            }
            return t.$onValidates(e);
        };
        t.$onValidates = function(e) {
            var r = Object.keys(t.$$registers).map(function(e) {
                return t.$$registers[e].$onValidate();
            });
            r.push(t.$$formValidatePromise);
            return Promise.all(r).then(function() {
                return G(e, t.$formutil);
            });
        };
        t.$validate = function(e, r) {
            var n = t.$getField(e);
            if (n) {
                return n.$validate(r);
            }
            return G(r);
        };
        t.$reset = function(e, r) {
            t.$$defaultInitialize();
            if (H(e)) {
                r = e;
                e = {};
            }
            return t.$$setStates(
                e,
                function(e, t) {
                    return t.$$reset(e);
                },
                r,
                true
            );
        };
        t.$setStates = function(e, r) {
            return t.$$setStates(
                e,
                function(e) {
                    return e;
                },
                r
            );
        };
        t.$setValues = function(e, r) {
            t.$$deepParseObject(Q(e), t.$$defaultValues);
            ae(t.$$defaultValues);
            return t.$$setStates(
                e,
                function(e) {
                    return { $value: e };
                },
                r
            );
        };
        t.$setFocuses = function(e, r) {
            return t.$$setStates(
                e,
                function(e) {
                    return { $focused: e };
                },
                r
            );
        };
        t.$setDirts = function(e, r) {
            return t.$$setStates(
                e,
                function(e) {
                    return { $dirty: e };
                },
                r
            );
        };
        t.$setTouches = function(e, r) {
            return t.$$setStates(
                e,
                function(e) {
                    return { $touched: e };
                },
                r
            );
        };
        t.$setPendings = function(e, r) {
            return t.$$setStates(
                e,
                function(e) {
                    return { $pending: e };
                },
                r
            );
        };
        t.$setErrors = function(e, r) {
            return t.$$setStates(
                e,
                function(e) {
                    return { $error: e };
                },
                r
            );
        };
        t.$batchState = function(e, r) {
            return t.$setStates(
                re(t.$$registers, function() {
                    return e;
                }),
                r
            );
        };
        t.$batchDirty = function(e, r) {
            return t.$batchState({ $dirty: e }, r);
        };
        t.$batchTouched = function(e, r) {
            return t.$batchState({ $touched: e }, r);
        };
        t.$batchFocused = function(e, r) {
            return t.$batchState({ $focused: e }, r);
        };
        t.$batchPending = function(e, r) {
            return t.$batchState({ $pending: e }, r);
        };
        t.$batchError = function(e, r) {
            return t.$batchState({ $error: e }, r);
        };
        t.$getFirstError = function(e) {
            var r = t.$formutil;
            if (e) {
                var n = r.$getField(e);
                return n && n.$getFirstError();
            }
            for (var i in r.$weakErrors) {
                if (r.$weakErrors.hasOwnProperty(i)) {
                    var a = r.$weakErrors[i];
                    for (var o in a) {
                        if (a.hasOwnProperty(o)) {
                            return a[o] instanceof Error ? a[o].message : a[o];
                        }
                    }
                }
            }
        };
        t.$new = function() {
            return t.$formutil;
        };
        t.$$defaultInitialize();
        return t;
    }
    S(o, [
        {
            key: '$$deepParseObject',
            value: function e(t) {
                var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                ne(t, function(e, t) {
                    return X(r, t, e);
                });
                return r;
            }
        },
        {
            key: '$$resetFormUpdateFields',
            value: function e() {
                this.$$formShouldUpdateFields = {};
                this.$$formShouldUpdateAll = false;
            }
        },
        {
            key: 'componentDidMount',
            value: function e() {
                ee(this.props.$ref, this.$formutil);
            }
        },
        {
            key: 'componentDidUpdate',
            value: function e(t) {
                var r = this;
                ee(this.props.$ref, this.$formutil);
                fe(this.$$triggerChangeTimer);
                this.$$triggerChangeTimer = le(function() {
                    r.$$triggerFormChange();
                });
            }
        },
        {
            key: 'componentWillUnmount',
            value: function e() {
                ee(this.props.$ref, null);
            }
        },
        {
            key: '_render',
            value: function e() {
                var t = this.$formutil;
                var a = this.props,
                    o = a.children,
                    u = a.render,
                    s = a.component;
                if (s) {
                    return r(s, { $formutil: t });
                }
                if (H(u)) {
                    return u(t);
                }
                if (H(o)) {
                    return o(t);
                }
                return n.map(o, function(e) {
                    return e && Y(e.type) ? i(e, { $formutil: t }) : e;
                });
            }
        },
        {
            key: 'render',
            value: function t() {
                var r = this;
                var n = this.props.$processer;
                var i = Object.keys(this.$$registers).map(function(e) {
                    return { path: e, $state: r.$$registers[e].$getState() };
                });
                var a = this.$$formShouldUpdateAll;
                var o = this.$formutil || {};
                var u = i.some(function(e) {
                    var t = e.$state;
                    return t.$invalid;
                });
                var s = i.some(function(e) {
                    var t = e.$state;
                    return t.$dirty;
                });
                var l = i.some(function(e) {
                    var t = e.$state;
                    return t.$touched;
                });
                var f = i.some(function(e) {
                    var t = e.$state;
                    return t.$focused;
                });
                var $ =
                    this.$$formPending ||
                    i.some(function(e) {
                        var t = e.$state;
                        return t.$pending;
                    });
                var c = a ? {} : d({}, o.$pureParams);
                var v = a ? {} : d({}, o.$states);
                var p = a ? {} : d({}, o.$errors);
                var h = a ? {} : d({}, o.$dirts);
                var m = a ? {} : d({}, o.$touches);
                var g = a ? {} : d({}, o.$focuses);
                var y = a ? {} : d({}, o.$pendings);
                var b = a ? {} : d({}, o.$weakStates);
                var w = a ? {} : d({}, o.$weakParams);
                var F = a ? {} : d({}, o.$weakErrors);
                var V = a ? {} : d({}, o.$weakDirts);
                var P = a ? {} : d({}, o.$weakFocuses);
                var k = a ? {} : d({}, o.$weakTouches);
                var S = a ? {} : d({}, o.$weakPendings);
                for (var C = 0, O = i.length; C < O; C++) {
                    var E = i[C],
                        j = E.$state,
                        _ = E.path;
                    if (!a) {
                        if (!this.$$formShouldUpdateFields[_]) {
                            continue;
                        }
                    }
                    if (n) {
                        n(j, _);
                    }
                    if (_ in w && j.$pristine && I(j.$value)) {
                        delete w[_];
                        oe(c, _);
                    } else if (w[_] !== j.$value) {
                        w[_] = j.$value;
                        X(c, _, j.$value);
                    }
                    X(v, _, j);
                    b[_] = j;
                    if (F[_] !== j.$error) {
                        if (j.$invalid) {
                            X(p, _, j.$error);
                            F[_] = j.$error;
                        } else if (_ in F) {
                            oe(p, _);
                            delete F[_];
                        }
                    }
                    if (V[_] !== j.$dirty) {
                        X(h, _, j.$dirty);
                        V[_] = j.$dirty;
                    }
                    if (k[_] !== j.$touched) {
                        X(m, _, j.$touched);
                        k[_] = j.$touched;
                    }
                    if (P[_] !== j.$focused) {
                        X(g, _, j.$focused);
                        P[_] = j.$focused;
                    }
                    if (S[_] !== j.$pending) {
                        X(y, _, j.$pending);
                        S[_] = j.$pending;
                    }
                }
                this.$formutil = {
                    $$registers: d({}, this.$$registers),
                    $$deepRegisters: this.$$deepRegisters,
                    $states: v,
                    $pureParams: c,
                    $params: d({}, this.$$defaultValues, {}, c),
                    $errors: p,
                    $dirts: h,
                    $touches: m,
                    $focuses: g,
                    $pendings: y,
                    $weakStates: b,
                    $weakParams: w,
                    $weakErrors: F,
                    $weakDirts: V,
                    $weakTouches: k,
                    $weakFocuses: P,
                    $weakPendings: S,
                    $getFirstError: this.$getFirstError,
                    $render: this.$render,
                    $getField: this.$getField,
                    $onValidates: this.$onValidates,
                    $new: this.$new,
                    $setStates: this.$setStates,
                    $setValues: this.$setValues,
                    $setErrors: this.$setErrors,
                    $setTouches: this.$setTouches,
                    $setDirts: this.$setDirts,
                    $setFocuses: this.$setFocuses,
                    $setPendings: this.$setPendings,
                    $batchState: this.$batchState,
                    $batchTouched: this.$batchTouched,
                    $batchDirty: this.$batchDirty,
                    $batchFocused: this.$batchFocused,
                    $batchPending: this.$batchPending,
                    $reset: this.$reset,
                    $validates: this.$validates,
                    $validate: this.$validate,
                    $valid: !u,
                    $invalid: u,
                    $dirty: s,
                    $pristine: !s,
                    $touched: l,
                    $untouched: !l,
                    $focused: f,
                    $pending: $
                };
                this.$$resetFormUpdateFields();
                return e.createElement(R.Provider, { value: this.getFormContext }, this._render());
            }
        }
    ]);
    return o;
})(a);
$e.displayName = 'React.Formutil.Form';
$e.defaultProps = { $defaultValues: {}, $defaultStates: {} };
function ce(e, t) {
    if (e == null) return {};
    var r = {};
    var n = Object.keys(e);
    var i, a;
    for (a = 0; a < n.length; a++) {
        i = n[a];
        if (t.indexOf(i) >= 0) continue;
        r[i] = e[i];
    }
    return r;
}
function de(e, t) {
    if (e == null) return {};
    var r = ce(e, t);
    var n, i;
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (i = 0; i < a.length; i++) {
            n = a[i];
            if (t.indexOf(n) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(e, n)) continue;
            r[n] = e[n];
        }
    }
    return r;
}
var ve = [
    'render',
    'component',
    'children',
    '$defaultValues',
    '$defaultStates',
    '$onFormChange',
    '$validator',
    '$processer',
    '$ref'
];
function pe(t) {
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var n = (function(n) {
        x(a, n);
        var i = A(a);
        function a() {
            var r;
            P(this, a);
            for (var n = arguments.length, o = new Array(n), u = 0; u < n; u++) {
                o[u] = arguments[u];
            }
            r = i.call.apply(i, [this].concat(o));
            r.renderChildren = function(n) {
                return e.createElement(
                    t,
                    Object.assign({}, r.othersProps, { $formutil: n, ref: r.props.__forwardRef__ })
                );
            };
            return r;
        }
        S(a, [
            {
                key: 'render',
                value: function t() {
                    var n = Object.assign({}, this.props);
                    var i = this.props,
                        a = i.component,
                        o = de(i, ['component']);
                    ve.forEach(function(e) {
                        if (e in n) {
                            if (e === '$defaultStates' || e === '$defaultValues') {
                                o[e] = d({}, r[e], {}, n[e]);
                            }
                            delete n[e];
                        }
                    });
                    this.othersProps = n;
                    return e.createElement($e, Object.assign({}, r, o, { render: this.renderChildren }));
                }
            }
        ]);
        return a;
    })(a);
    n.displayName = 'React.Formutil.withForm.' + (t.displayName || t.name || 'Anonymous');
    var i = o(function(t, r) {
        return e.createElement(n, Object.assign({ __forwardRef__: r }, t));
    });
    i.displayName = 'React.Formutil.withForm.ForwardRef.' + (t.displayName || t.name || 'Anonymous');
    return l(i, t);
}
var he = z(pe);
var me = 0;
var ge = {
    $valid: true,
    $invalid: false,
    $dirty: false,
    $pristine: true,
    $touched: false,
    $untouched: true,
    $focused: false,
    $pending: false,
    $error: {}
};
function ye(e) {
    return e !== true;
}
function be(e, t, r) {
    s(
        !I(e),
        "You should return a string or Error when the validation('"
            .concat(r && r + ': ')
            .concat(t, "') failed, otherwise return true.")
    );
}
var we = 'React.Formutil.Field';
function Fe() {
    return me++;
}
function Ve(e, t) {
    var a = t.children,
        o = t.render,
        u = t.component;
    if (u) {
        return r(u, { $fieldutil: e });
    }
    if (H(o)) {
        return o(e);
    }
    if (H(a)) {
        return a(e);
    }
    return n.map(a, function(t) {
        return t && Y(t.type) ? i(t, { $fieldutil: e }) : t;
    });
}
function Pe(e, t) {
    var r = {
        $$FIELD_UUID: e.$$FIELD_UUID,
        $$reset: u,
        $$merge: b,
        $$detectChange: i,
        $$triggerChange: a,
        $onValidate: o,
        $new: function t() {
            return e.$fieldutil;
        },
        $picker: s,
        $getState: s,
        $getComponent: function e() {
            return t;
        },
        $reset: function t(r, n) {
            return e.$setState(u(r), n);
        },
        $getFirstError: y,
        $validate: l,
        $setState: e.$setState,
        $render: f,
        $setValue: $,
        $setTouched: c,
        $setDirty: v,
        $setFocused: p,
        $setValidity: m,
        $setError: h,
        $setPending: g
    };
    var n;
    function i(e) {
        if ('$value' in e || '$viewValue' in e) {
            l();
        }
    }
    function a(t) {
        var r = t.$newValue,
            n = t.$prevValue;
        var i = e.props.$onFieldChange;
        if (H(i)) {
            i(r, n, e.$formContext.$formutil);
        }
    }
    function o(e) {
        n.then(e);
        return n;
    }
    function u(t) {
        var r;
        var n = e.props,
            i = e.$formContext;
        if (i.$$getDefault) {
            var a = n.name;
            var o = i.$$getDefault(),
                u = o.$$defaultStates,
                s = o.$$defaultValues;
            if (a && s) {
                var l = X(s, a);
                r = X(u, a) || {};
                if (!I(l)) {
                    r.$value = l;
                }
            }
        }
        var f = n.$defaultValue,
            $ = n.$defaultState;
        return b(d({}, ge, {}, H($) ? $(n) : $, { $value: H(f) ? f(n) : '$defaultValue' in n ? f : '' }, r, {}, t));
    }
    function s() {
        return d({}, e.$state);
    }
    function l(t) {
        return (n = new Promise(function(r) {
            var n = e.props,
                i = e.$formContext;
            var a = d({}, n.$validators, {}, n.$asyncValidators);
            var o = e.$state,
                u = o.$value,
                s = o.$pending,
                l = Object.assign({}, o.$error);
            var f = i.$formutil;
            var $ = {};
            var c = false;
            var v;
            var p;
            var y;
            var b;
            delete l[se];
            var w = Object.keys(a).reduce(function(t, r) {
                delete l[r];
                if (!c && n[r] != null) {
                    var i = a[r](u, n[r], d({}, n, { $formutil: f, $fieldutil: e.$fieldutil, $validError: $ }));
                    if (L(i)) {
                        t.push(
                            i['catch'](function(e) {
                                if (!v) {
                                    m(r, e || r);
                                }
                            })
                        );
                    } else if (ye(i)) {
                        $[r] = i || r;
                        be(i, r, n.name);
                        if (n.$validateLazy) {
                            c = true;
                        }
                    }
                }
                return t;
            }, []);
            var F = function e(n) {
                return r(G(t, G(y, n)));
            };
            if (w.length) {
                if (!s) {
                    g(true);
                }
                p = function e(t) {
                    return (v = t(F));
                };
                w.push(h(d({}, l, {}, $)));
                b = Promise.all(w).then(function() {
                    if (v) {
                        return v;
                    }
                    e.$shouldCancelPrevAsyncValidate = null;
                    return g(false, F);
                });
            } else {
                if (s) {
                    g(false);
                }
                b = h(d({}, l, {}, $), F);
            }
            if (e.$shouldCancelPrevAsyncValidate) {
                e.$shouldCancelPrevAsyncValidate(function(e) {
                    y = e;
                    return b;
                });
            }
            e.$shouldCancelPrevAsyncValidate = p;
        }));
    }
    function f(t, r) {
        return e.$setState({ $viewValue: t, $dirty: true }, r);
    }
    function $(t, r) {
        return e.$setState({ $value: t }, r);
    }
    function c(t, r) {
        return e.$setState({ $touched: t }, r);
    }
    function v(t, r) {
        return e.$setState({ $dirty: t }, r);
    }
    function p(t, r) {
        return e.$setState({ $focused: t }, r);
    }
    function h(t, r) {
        return e.$setState({ $error: t }, r);
    }
    function m(t) {
        var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        var n = arguments.length > 2 ? arguments[2] : undefined;
        var i = Object.assign({}, e.$state.$error);
        if (ye(r)) {
            i[t] = r || t;
            be(r, t, e.props.name);
        } else {
            delete i[t];
        }
        return h(i, n);
    }
    function g(t, r) {
        return e.$setState({ $pending: t }, r);
    }
    function y() {
        var t = e.$state.$error,
            r = t === void 0 ? {} : t;
        for (var n in r) {
            if (r.hasOwnProperty(n)) {
                return r[n] instanceof Error ? r[n].message : r[n];
            }
        }
    }
    function b(t) {
        var r = Object.assign({}, t);
        if ('$error' in r) {
            if (!r.$error) {
                r.$error = {};
            }
            r.$valid = Object.keys(r.$error).length === 0;
        }
        var n = e.props,
            i = n.$parser,
            a = n.$formatter;
        if ('$viewValue' in r && !('$value' in r)) {
            var o = function e(t) {
                return (r.$viewValue = t);
            };
            r.$value = i ? i(r.$viewValue, o) : r.$viewValue;
        } else if ('$value' in r && !('$viewValue' in r)) {
            var u = function e(t) {
                return (r.$value = t);
            };
            r.$viewValue = a ? a(r.$value, u) : r.$value;
        }
        if ('$valid' in r) {
            r.$invalid = !r.$valid;
        } else if ('$invalid' in r) {
            r.$dirty = !r.$invalid;
        }
        if ('$dirty' in r) {
            r.$pristine = !r.$dirty;
        } else if ('$pristine' in r) {
            r.$dirty = !r.$pristine;
        }
        if ('$touched' in r) {
            r.$untouched = !r.$touched;
        } else if ('$untouched' in r) {
            r.$touched = !r.$untouched;
        }
        e.$state = d({}, e.$state, {}, r);
        return s();
    }
    return r;
}
var ke = (function(t) {
    x(n, t);
    var r = A(n);
    function n() {
        var e;
        P(this, n);
        for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) {
            i[a] = arguments[a];
        }
        e = r.call.apply(r, [this].concat(i));
        e.$$FIELD_UUID = Fe();
        e.$formContext = void 0;
        e.$state = void 0;
        e.shouldRendered = false;
        e.$setState = function(t, r) {
            return new Promise(function(n) {
                var i = function t() {
                    return n(G(r, e.$fieldutil));
                };
                if (e.isMounting) {
                    var a = e.props.name;
                    if (a in (e.$formContext.$$registers || {})) {
                        e.shouldRendered = false;
                        e.$formContext.$$onChange(a, t, i);
                        if (!e.shouldRendered) {
                            e.forceUpdate();
                        }
                    } else {
                        e.$registered.$$merge(t);
                        e.$registered.$$detectChange(t);
                        e.forceUpdate(i);
                    }
                } else {
                    e.$registered.$$merge(t);
                    i();
                }
            });
        };
        return e;
    }
    S(n, [
        {
            key: 'componentDidMount',
            value: function e() {
                this.isMounting = true;
                var t = this.props.name,
                    r = this.$formContext;
                s(
                    !t || r.$formutil,
                    "You should enusre that the <Field /> with the name '".concat(
                        t,
                        "' must be used underneath a <Form /> component or withForm() HOC, otherwise it's isolated."
                    )
                );
                s(t, 'You should assign a name to <Field />, otherwise it will be isolated!');
                if (r.$$register) {
                    r.$$register(t, this.$fieldHandler);
                }
                this.$prevState = this.$state;
                ee(this.props.$ref, this.$fieldutil);
            }
        },
        {
            key: 'componentWillUnmount',
            value: function e() {
                if (this.$formContext.$$unregister) {
                    this.$formContext.$$unregister(this.props.name, this.$fieldHandler, this.props.$reserveOnUnmount);
                }
                this.isMounting = false;
                ee(this.props.$ref, null);
            }
        },
        {
            key: 'componentDidUpdate',
            value: function e(t) {
                var r = this.props.name;
                if (r !== t.name) {
                    if (this.$formContext.$$register) {
                        this.$formContext.$$register(r, this.$fieldHandler, t.name);
                    }
                }
                ee(this.props.$ref, this.$fieldutil);
                if (this.$state.$value !== this.$prevState.$value) {
                    if (!(r in (this.$formContext.$$registers || {}))) {
                        this.$registered.$$triggerChange({
                            $newValue: this.$state.$value,
                            $prevValue: this.$prevState.$value
                        });
                    }
                }
                this.$prevState = this.$state;
            }
        },
        {
            key: 'shouldComponentUpdate',
            value: function e(t) {
                var r = t.$memo;
                return (
                    !r ||
                    !ue(this.$registered.$getState(), this.$prevState) ||
                    !(Array.isArray(r) ? f(r, this.props.$memo) : f(this.props, t))
                );
            }
        },
        {
            key: '_render',
            value: function e() {
                var t = (this.$fieldutil = d(
                    { $name: this.props.name },
                    this.$registered.$getState(),
                    {},
                    this.$registered,
                    { $$formutil: this.$formContext.$formutil }
                ));
                return Ve(t, this.props);
            }
        },
        {
            key: 'render',
            value: function t() {
                var r = this;
                this.shouldRendered = true;
                return e.createElement(R.Consumer, null, function(e) {
                    var t = !r.$formContext;
                    r.$formContext = e();
                    if (!r.$fieldHandler) {
                        r.$fieldHandler = Pe(r, r);
                    }
                    r.$registered = (r.$formContext.$$registers || {})[r.$fieldHandler.$name] || r.$fieldHandler;
                    if (t) {
                        r.$fieldHandler.$$reset();
                        r.$fieldHandler.$validate();
                    }
                    return r._render();
                });
            }
        }
    ]);
    return n;
})(a);
ke.displayName = we;
var Se = [
    'name',
    '$defaultValue',
    '$defaultState',
    '$onFieldChange',
    '$validators',
    '$asyncValidators',
    '$validateLazy',
    '$memo',
    '$reserveOnUnmount',
    '$ref',
    '$parser',
    '$formatter',
    'render',
    'component',
    'children'
];
function Ce(t) {
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var n = (function(n) {
        x(a, n);
        var i = A(a);
        function a() {
            var r;
            P(this, a);
            for (var n = arguments.length, o = new Array(n), u = 0; u < n; u++) {
                o[u] = arguments[u];
            }
            r = i.call.apply(i, [this].concat(o));
            r.renderChildren = function(n) {
                return e.createElement(
                    t,
                    Object.assign({}, r.othersProps, { $fieldutil: n, ref: r.props.__forwardRef__ })
                );
            };
            return r;
        }
        S(a, [
            {
                key: 'render',
                value: function t() {
                    var n = Object.assign({}, this.props);
                    var i = this.props,
                        a = i.component,
                        o = de(i, ['component']);
                    Se.concat(
                        Object.keys(
                            d({}, r.$validators, {}, r.$asyncValidators, {}, n.$validators, {}, n.$asyncValidators)
                        )
                    ).forEach(function(e) {
                        if (e in n) {
                            if (e === '$validators' || e === '$asyncValidators' || e === '$defaultState') {
                                o[e] = d({}, r[e], {}, n[e]);
                            }
                            delete n[e];
                        }
                    });
                    this.othersProps = n;
                    return e.createElement(ke, Object.assign({}, r, o, { render: this.renderChildren }));
                }
            }
        ]);
        return a;
    })(a);
    n.displayName = 'React.Formutil.withField.' + (t.displayName || t.name || 'Anonymous');
    var i = o(function(t, r) {
        return e.createElement(n, Object.assign({ __forwardRef__: r }, t));
    });
    i.displayName = 'React.Formutil.withField.ForwardRef.' + (t.displayName || t.name || 'Anonymous');
    return l(i, t);
}
var Oe = z(Ce);
var Ee = (function(t) {
    x(n, t);
    var r = A(n);
    function n() {
        P(this, n);
        return r.apply(this, arguments);
    }
    S(n, [
        {
            key: 'render',
            value: function t() {
                var r = this;
                var n = this.props,
                    i = n.$fieldutil,
                    a = n.value,
                    o = n.onChange,
                    u = n.onFocus,
                    s = n.onBlur,
                    l = n.checked,
                    f = n.unchecked,
                    $ = de(n, ['$fieldutil', 'value', 'onChange', 'onFocus', 'onBlur', 'checked', 'unchecked']);
                var c = this.props.type;
                var d = {
                    value: 'compositionValue' in this ? this.compositionValue : a,
                    onCompositionEnd: function e(t) {
                        r.composition = false;
                        delete r.compositionValue;
                        d.onChange(t);
                    },
                    onCompositionStart: function e() {
                        return (r.composition = true);
                    },
                    onChange: function e(t) {
                        var n = t.target.value;
                        if (r.composition) {
                            r.compositionValue = n;
                            r.forceUpdate();
                        } else {
                            o(n, t);
                        }
                    },
                    onFocus: u,
                    onBlur: s
                };
                var v = 'input';
                switch (c) {
                    case 'select':
                        v = c;
                        d.onChange = function(e) {
                            var t = e.target;
                            var r = t.multiple
                                ? [].slice
                                      .call(t.options)
                                      .filter(function(e) {
                                          return e.selected;
                                      })
                                      .map(function(e) {
                                          return e.value;
                                      })
                                : t.value;
                            o(r, e);
                        };
                        delete $.type;
                        break;
                    case 'textarea':
                        v = c;
                        delete $.type;
                        break;
                    case 'checkbox':
                    case 'radio':
                        d = {
                            checked: a === l,
                            onChange: function e(t) {
                                o(t.target.checked ? l : f, t);
                            },
                            onFocus: u,
                            onBlur: s
                        };
                        break;
                }
                return e.createElement(v, Object.assign({}, $, d));
            }
        }
    ]);
    return n;
})(a);
Ee.displayName = 'React.Formutil.EasyField.Native';
Ee.defaultProps = { value: '', type: 'text', checked: true, unchecked: false };
var je = t(function() {
        return {};
    }),
    _e = je.Provider,
    Ae = je.Consumer;
var De = (function(t) {
    x(a, t);
    var r = A(a);
    function a() {
        var e;
        P(this, a);
        for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) {
            n[i] = arguments[i];
        }
        e = r.call.apply(r, [this].concat(n));
        e.getGroupContext = function() {
            return e.props;
        };
        return e;
    }
    S(a, [
        {
            key: '_render',
            value: function t() {
                var r = this.props,
                    a = r.className,
                    o = r.groupNode,
                    u = r.children;
                var s = { GroupOption: xe, Field: Re };
                var l = H(u)
                    ? u(s)
                    : n.map(u, function(e) {
                          return i(e, s);
                      });
                if (o === null) {
                    return l;
                }
                return e.createElement(o, { className: a }, l);
            }
        },
        {
            key: 'render',
            value: function t() {
                return e.createElement(_e, { value: this.getGroupContext }, this._render());
            }
        }
    ]);
    return a;
})(a);
De.displayName = 'React.Formutil.EasyField.Group';
De.defaultProps = { type: 'checkbox', groupNode: 'div' };
var xe = (function(t) {
    x(n, t);
    var r = A(n);
    function n() {
        P(this, n);
        return r.apply(this, arguments);
    }
    S(n, [
        {
            key: 'componentDidMount',
            value: function e() {
                s('$value' in this.props, 'You should pass a $value to <GroupOption />.');
            }
        },
        {
            key: 'render',
            value: function t() {
                var r = this.props,
                    n = r.$value,
                    i = r.onChange,
                    a = r.onFocus,
                    o = r.onBlur,
                    u = de(r, ['$value', 'onChange', 'onFocus', 'onBlur']);
                return e.createElement(Ae, null, function(t) {
                    var r = t();
                    var s = r.type,
                        l = r.name;
                    var f =
                        s === 'radio'
                            ? {
                                  checked: r.value === n,
                                  onChange: function e(t) {
                                      r.onChange(n, t);
                                      i && i(t);
                                  }
                              }
                            : s === 'checkbox'
                            ? {
                                  checked: r.value.indexOf(n) > -1,
                                  onChange: function e(t) {
                                      r.onChange(
                                          t.target.checked
                                              ? r.value.concat(n)
                                              : r.value.filter(function(e) {
                                                    return e !== n;
                                                }),
                                          t
                                      );
                                      i && i(t);
                                  }
                              }
                            : {
                                  value: r.value,
                                  onChange: function e(t) {
                                      r.onChange(t);
                                      i && i(t);
                                  }
                              };
                    return e.createElement(
                        'input',
                        Object.assign({ name: l }, u, f, {
                            type: s,
                            onFocus: function e(t) {
                                r.onFocus(t);
                                a && a(t);
                            },
                            onBlur: function e(t) {
                                r.onBlur(t);
                                o && o(t);
                            }
                        })
                    );
                });
            }
        }
    ]);
    return n;
})(a);
xe.displayName = 'React.Formutil.EasyField.Group.Option';
var Re = (function(t) {
    x(n, t);
    var r = A(n);
    function n() {
        P(this, n);
        return r.apply(this, arguments);
    }
    S(n, [
        {
            key: 'componentDidMount',
            value: function e() {
                s(
                    false,
                    'The "Field" property in EasyField\'s children-props has been deprecated. Please use "GroupOption" instead.'
                );
            }
        },
        {
            key: 'render',
            value: function t() {
                return e.createElement(xe, this.props);
            }
        }
    ]);
    return n;
})(a);
Re.displayName = 'React.Formutil.EasyField.Group.Option.Deprecated';
var Ne = e.Frament || 'div';
var Ue = (function(t) {
    x(n, t);
    var r = A(n);
    function n(e) {
        var t;
        P(this, n);
        t = r.call(this, e);
        t.id = 0;
        t.latestValue = t.props.value;
        t.$formutil = void 0;
        t.FieldValidators = {
            required: function e(t) {
                return t !== null;
            }
        };
        t.$onFormChange = function(e) {
            e.$onValidates(function(e) {
                var r = e.$invalid,
                    n = e.$params;
                if (r) {
                    if (t.props.value.length) {
                        t.props.onChange((t.latestValue = []));
                    }
                } else if (!f(t.props.value, n.list)) {
                    t.props.onChange((t.latestValue = n.list));
                }
            });
        };
        t.swap = function(e, r, n) {
            return t.$setState(function(t) {
                var n = t.items;
                var i = [n[e], n[r]];
                n[r] = i[0];
                n[e] = i[1];
                return n;
            }, n);
        };
        t.insert = function() {
            var e, r, n;
            for (var i = arguments.length, a = new Array(i), o = 0; o < i; o++) {
                a[o] = arguments[o];
            }
            a.forEach(function(t) {
                if (H(t)) {
                    n = t;
                } else if (typeof t === 'number') {
                    e = t;
                } else if (typeof t === 'object') {
                    r = t;
                }
            });
            return t.$setState(function(n) {
                var i = n.items;
                if (I(e)) {
                    i.push(t.getId(r));
                } else {
                    i.splice(e, 0, t.getId(r));
                }
                return { items: i };
            }, n);
        };
        t.remove = function() {
            var e, r;
            for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++) {
                i[a] = arguments[a];
            }
            i.forEach(function(t) {
                if (H(t)) {
                    r = t;
                } else if (typeof t === 'number') {
                    e = t;
                }
            });
            return t.$setState(function(r) {
                var n = r.items;
                if (I(e)) {
                    n.pop();
                } else {
                    n.splice(e, 1);
                }
                if (!n.length) {
                    n = [t.getId()];
                }
                return { items: n };
            }, r);
        };
        t.$setState = function(e, r) {
            return new Promise(function(n) {
                return t.setState(e, function() {
                    return t.$formutil.$onValidates(function(e) {
                        return n(G(r, e));
                    });
                });
            });
        };
        t.state = {
            items: e.value.length
                ? e.value.map(function() {
                      return t.getId();
                  })
                : [t.getId()],
            formKey: 0
        };
        return t;
    }
    S(n, [
        {
            key: 'componentDidUpdate',
            value: function e(t) {
                var r = this;
                if (this.props.value !== this.latestValue) {
                    this.setState({
                        items: this.props.value.length
                            ? this.props.value.map(function() {
                                  return r.getId();
                              })
                            : [this.getId()],
                        formKey: this.state.formKey + 1
                    });
                    this.latestValue = this.props.value;
                }
            }
        },
        {
            key: 'getId',
            value: function e(t) {
                return { id: this.id++, values: t };
            }
        },
        {
            key: 'render',
            value: function t() {
                var r = this;
                var n = this.props,
                    i = n.children,
                    a = n.onFocus,
                    o = n.onBlur,
                    u = n.value;
                var s = this;
                if (!H(i)) {
                    return null;
                }
                var l = {
                    $insert: this.insert,
                    $remove: this.remove,
                    $swap: this.swap,
                    $push: function e(t, n) {
                        return r.insert(t, n);
                    },
                    $pop: function e(t) {
                        return r.remove(t);
                    },
                    $shift: function e(t) {
                        return r.remove(0, t);
                    },
                    $unshift: function e(t, n) {
                        return r.insert(0, t, n);
                    },
                    onFocus: a,
                    onBlur: o
                };
                return e.createElement($e, {
                    key: this.state.formKey,
                    $defaultValues: { list: u },
                    $onFormChange: this.$onFormChange,
                    children: function t(n) {
                        r.$formutil = n;
                        return e.createElement(
                            Ne,
                            null,
                            r.state.items.map(function(t, a) {
                                var o = t.id,
                                    u = t.values;
                                return e.createElement(ke, {
                                    key: o,
                                    required: true,
                                    $defaultValue: u || null,
                                    $validators: r.FieldValidators,
                                    name: 'list['.concat(a, ']'),
                                    children: function t(o) {
                                        return e.createElement($e, {
                                            $defaultValues: o.$value || {},
                                            $onFormChange: function e(t) {
                                                return t.$onValidates(function(e) {
                                                    var t = e.$invalid,
                                                        r = e.$params;
                                                    if (t) {
                                                        if (o.$viewValue !== null) {
                                                            o.$render(null);
                                                        }
                                                    } else if (!f(o.$viewValue, r)) {
                                                        o.$render(r);
                                                    }
                                                });
                                            },
                                            children: function e(t) {
                                                return i(
                                                    d(
                                                        {
                                                            get $length() {
                                                                return s.state.items.length;
                                                            },
                                                            $index: a,
                                                            $isLast: function e() {
                                                                return a === r.state.items.length - 1;
                                                            },
                                                            $isFirst: function e() {
                                                                return a === 0;
                                                            }
                                                        },
                                                        l,
                                                        {},
                                                        t
                                                    ),
                                                    n
                                                );
                                            }
                                        });
                                    }
                                });
                            })
                        );
                    }
                });
            }
        }
    ]);
    return n;
})(a);
Ue.displayName = 'React.Formutil.EasyField.List';
var Te = '__TYPE__';
var Ie = [
    [
        'required',
        function(e, t, r) {
            var n = r.__TYPE__,
                i = r.checked,
                a = i === void 0 ? true : i;
            return n === 'checked' ? e === a : !M(e);
        }
    ],
    [
        'maxLength',
        function(e, t, r) {
            return (r.required && M(e)) || e.length <= t;
        }
    ],
    [
        'minLength',
        function(e, t, r) {
            return (r.required && M(e)) || e.length >= t;
        }
    ],
    [
        'max',
        function(e, t, r) {
            return (r.required && M(e)) || e * 1 <= t;
        }
    ],
    [
        'min',
        function(e, t, r) {
            return (r.required && M(e)) || e * 1 >= t;
        }
    ],
    [
        'pattern',
        function(e, t, r) {
            return (r.required && M(e)) || t.test(e);
        }
    ],
    [
        'enum',
        function(e, t, r) {
            return (r.required && M(e)) || t.indexOf(e) > -1;
        }
    ],
    [
        'checker',
        function(e, t, r) {
            return t(e, r);
        }
    ]
].reduce(function(e, t) {
    var r = V(t, 2),
        n = r[0],
        i = r[1];
    e[n] = function e(t, r, a) {
        var o = a.validMessage,
            u = o === void 0 ? {} : o;
        return i.apply(void 0, arguments) || u[n] || 'Error input: '.concat(n);
    };
    return e;
}, {});
var He = 'React.Formutil.EasyField';
var Me = {
    validMessage: {},
    valuePropName: 'value',
    changePropName: 'onChange',
    focusPropName: 'onFocus',
    blurPropName: 'onBlur',
    $parser: function e(t) {
        return typeof t === 'string' ? t.trim() : t;
    }
};
function Le(e, t, r) {
    var n;
    var i = t.valuePropName,
        a = t.changePropName,
        o = t.focusPropName,
        u = t.blurPropName,
        s = t.getValueFromEvent,
        l = t.passUtil;
    var f = function e(t) {
        return t && t.target ? t.target[i] : t;
    };
    var c = d(
        {},
        r,
        ((n = {}),
        $(n, i, e.$viewValue),
        $(n, a, function(r) {
            var n;
            for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), u = 1; u < i; u++) {
                o[u - 1] = arguments[u];
            }
            if (((n = o[0]) === null || n === void 0 ? void 0 : n.nativeEvent) instanceof Event) {
                o.push(r);
            } else {
                o.unshift(r);
            }
            var l = t[a];
            l && l.apply(void 0, o);
            var $ = s ? s.apply(void 0, o) : f(r);
            e.$render($);
        }),
        $(n, o, function() {
            var r = t[o];
            r && r.apply(void 0, arguments);
            e.$setFocused(true);
        }),
        $(n, u, function() {
            var r = t[u];
            r && r.apply(void 0, arguments);
            if (e.$untouched) {
                e.$setTouched(true);
            }
            e.$setFocused(false);
        }),
        n)
    );
    if (l) {
        c[l === true ? '$fieldutil' : String(l)] = e;
    }
    return c;
}
function qe(e) {
    var t = e.children,
        r = e.component,
        n = e.render,
        i = de(e, ['children', 'component', 'render']);
    var a = i.name,
        o = i.type,
        u = i.defaultValue,
        s = i.valuePropName,
        l = i.changePropName,
        f = i.focusPropName,
        $ = i.blurPropName,
        c = i.getValueFromEvent,
        v = i.validMessage,
        p = i.checked,
        h = i.unchecked,
        m = i.__TYPE__,
        g = i.__DIFF__,
        y = i.passUtil,
        b = i.$defaultValue,
        w = i.$defaultState,
        F = i.$onFieldChange,
        P = i.$validators,
        k = i.$asyncValidators,
        S = i.$validateLazy,
        C = i.$memo,
        O = i.$reserveOnUnmount,
        E = i.$parser,
        j = i.$formatter,
        _ = i.$ref,
        A = de(i, [
            'name',
            'type',
            'defaultValue',
            'valuePropName',
            'changePropName',
            'focusPropName',
            'blurPropName',
            'getValueFromEvent',
            'validMessage',
            'checked',
            'unchecked',
            '__TYPE__',
            '__DIFF__',
            'passUtil',
            '$defaultValue',
            '$defaultState',
            '$onFieldChange',
            '$validators',
            '$asyncValidators',
            '$validateLazy',
            '$memo',
            '$reserveOnUnmount',
            '$parser',
            '$formatter',
            '$ref'
        ]);
    var D = { children: t, component: r, render: n };
    if (C === true && I(g)) {
        i.__DIFF__ = [t, r, n];
    }
    var x = !I(o) || (I(t) && I(r) && I(n));
    Object.keys(d({}, (i.$validators = d({}, Ie, {}, i.$validators)), {}, i.$asyncValidators)).forEach(function(e) {
        if (e in A) {
            if (!x || !W(e)) {
                delete A[e];
            }
        }
    });
    if (x) {
        var R = (o || '').split('.'),
            N = V(R, 2),
            U = N[0],
            T = U === void 0 ? 'text' : U,
            H = N[1];
        D.component = T === 'group' ? De : T === 'list' ? Ue : Ee;
        if (a) {
            A.name = a;
        }
        if (o) {
            A.type = T;
        }
        if (t) {
            A.children = t;
        }
        A.checked = p;
        A.unchecked = h;
        switch (T) {
            case 'select':
            case 'textarea':
                if (e.multiple) {
                    i[Te] = 'array';
                }
                break;
            case 'group':
                if (H === 'checkbox') {
                    i[Te] = 'array';
                }
                A.type = H;
                break;
            case 'checkbox':
            case 'radio':
                i[Te] = 'checked';
                break;
            case 'list':
                i[Te] = 'array';
                break;
        }
    }
    if (!('$defaultValue' in i) && 'defaultValue' in e) {
        i.$defaultValue = u;
    }
    if (!('$defaultValue' in i) && Te in i) {
        var M;
        switch (i[Te]) {
            case 'checked':
                var L = i.unchecked,
                    q = L === void 0 ? false : L;
                M = q;
                break;
            case 'array':
                M = [];
                break;
            case 'object':
                M = {};
                break;
            case 'number':
                M = 0;
                break;
        }
        i.$defaultValue = M;
    }
    return { fieldProps: i, childProps: A, renderProps: D };
}
function Be(e, t) {
    var a = t.component,
        o = t.render,
        u = t.children;
    if (a) {
        return r(a, e);
    }
    if (H(o)) {
        return o(e);
    }
    if (H(u)) {
        return u(e);
    }
    return n.map(u, function(t) {
        return i(t, e);
    });
}
var Ye = (function(t) {
    x(n, t);
    var r = A(n);
    function n() {
        var e;
        P(this, n);
        for (var t = arguments.length, i = new Array(t), a = 0; a < t; a++) {
            i[a] = arguments[a];
        }
        e = r.call.apply(r, [this].concat(i));
        e.renderChildren = function(t) {
            var r = e.parsedProps,
                n = r.fieldProps,
                i = r.childProps,
                a = r.renderProps;
            return Be(Le(t, n, i), a);
        };
        e.parsedProps = {};
        return e;
    }
    S(n, [
        {
            key: 'render',
            value: function t() {
                var r = (this.parsedProps = qe(this.props)),
                    n = r.fieldProps;
                return e.createElement(ke, Object.assign({}, n, { children: this.renderChildren }));
            }
        }
    ]);
    return n;
})(a);
Ye.displayName = He;
Ye.defaultProps = Me;
function Qe(t) {
    var r = o(function(r, n) {
        return e.createElement(R.Consumer, null, function(i) {
            return e.createElement(t, Object.assign({}, r, { $formutil: i().$formutil, ref: n }));
        });
    });
    r.displayName = 'React.Formutil.connect.' + (t.displayName || t.name || 'Anonymous');
    return l(r, t);
}
function Ge() {
    if (!e.useState) {
        throw new Error('Hooks api need react@>=16.8, Please upgrade your reactjs.');
    }
    var t = e.useContext;
    var r = t(R);
    return r();
}
function ze(t) {
    var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!e.useState) {
        throw new Error('Hooks api need react@>=16.8, Please upgrade your reactjs.');
    }
    var n = e.useState,
        i = e.useLayoutEffect,
        a = e.useRef;
    var o;
    if (t) {
        if (typeof t === 'string') {
            o = t;
            r.name = o;
        } else {
            r = t;
            o = r.name;
        }
    }
    var u = Ge();
    var l = a({}).current;
    var f = a([]);
    var $;
    l.$formContext = u;
    l.props = r;
    l.$setState = h;
    l.shouldRendered = true;
    var c = n(function() {
            l.$$FIELD_UUID = Fe();
            l.$fieldHandler = $ = Pe(l);
            l.$fieldHandler.$$reset();
            l.$fieldHandler.$validate();
        }),
        v = V(c, 2),
        p = v[1];
    if (!$) {
        $ = (u.$$registers || {})[l.$fieldHandler.$name] || l.$fieldHandler;
    }
    i(
        function() {
            var e = l.$state;
            if (l.isMounting) {
                if (!(o in (u.$$registers || {}))) {
                    $.$$triggerChange({ $newValue: e.$value, $prevValue: l.$prevState.$value });
                }
            }
            l.$prevState = e;
        },
        [l.$state.$value]
    );
    i(function() {
        l.isMounting = true;
        s(
            !o || u.$formutil,
            "You should enusre that the useField() with the name '".concat(
                o,
                "' must be used underneath a <Form /> component or withForm() HOC, otherwise it's isolated."
            )
        );
        s(o, 'You should pass a name argument to useField(), otherwise it will be isolated!');
        return function() {
            l.isMounting = false;
            ee(r.$ref, null);
        };
    }, []);
    i(
        function() {
            if (u.$$register) {
                u.$$register(o, l.$fieldHandler);
            }
            return function() {
                if (u.$$unregister) {
                    u.$$unregister(o, l.$fieldHandler, !l.isMounting && r.$reserveOnUnmount);
                }
            };
        },
        [o]
    );
    i(function() {
        ee(r.$ref, l.$fieldutil);
    });
    i(function() {
        if (f.current.length > 0) {
            var e = y(f.current);
            f.current.length = 0;
            while (e.length) {
                e.pop()(l.$fieldutil);
            }
        }
    });
    function h(e, t) {
        return new Promise(function(r) {
            var n = function e() {
                return r(G(t, l.$fieldutil));
            };
            if (l.isMounting) {
                if (o in (u.$$registers || {})) {
                    l.shouldRendered = false;
                    u.$$onChange(o, e, n);
                    if (!l.shouldRendered) {
                        p({});
                    }
                } else {
                    $.$$merge(e);
                    $.$$detectChange(e);
                    p({});
                    f.current.push(n);
                }
            } else {
                $.$$merge(e);
                n();
            }
        });
    }
    return (l.$fieldutil = d({ $name: o }, $.$getState(), {}, $, { $$formutil: u.$formutil }));
}
function Ke() {
    var e = Ge(),
        t = e.$formutil;
    return t;
}
function We(e) {
    e = d({}, Me, {}, e, { children: null });
    var t = qe(e),
        r = t.fieldProps,
        n = t.childProps;
    var i = ze(r);
    return Le(i, r, n);
}
export {
    Ye as EasyField,
    ke as Field,
    $e as Form,
    Qe as connect,
    R as formContext,
    ze as useField,
    Ke as useForm,
    We as useHandler,
    Oe as withField,
    he as withForm
};
