Object.defineProperty(exports, '__esModule', { value: true });
function e(e) {
    return e && typeof e === 'object' && 'default' in e ? e['default'] : e;
}
var t = require('react');
var r = e(t);
var n = require('react-is');
var a = e(require('warning'));
var i = e(require('hoist-non-react-statics'));
var o = e(require('react-fast-compare'));
function u(e, t, r) {
    if (t in e) {
        Object.defineProperty(e, t, { value: r, enumerable: true, configurable: true, writable: true });
    } else {
        e[t] = r;
    }
    return e;
}
var s = u;
function l(e, t) {
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
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] != null ? arguments[t] : {};
        if (t % 2) {
            l(Object(r), true).forEach(function(t) {
                s(e, t, r[t]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
        } else {
            l(Object(r)).forEach(function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
            });
        }
    }
    return e;
}
var $ = f;
function c(e, t) {
    if (t == null || t > e.length) t = e.length;
    for (var r = 0, n = new Array(t); r < t; r++) {
        n[r] = e[r];
    }
    return n;
}
var d = c;
function v(e) {
    if (Array.isArray(e)) return d(e);
}
var p = v;
function h(e) {
    if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(e)) return Array.from(e);
}
var m = h;
function g(e, t) {
    if (!e) return;
    if (typeof e === 'string') return d(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === 'Object' && e.constructor) r = e.constructor.name;
    if (r === 'Map' || r === 'Set') return Array.from(r);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t);
}
var y = g;
function b() {
    throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
}
var w = b;
function F(e) {
    return p(e) || m(e) || y(e) || w();
}
var C = F;
function V(e) {
    if (Array.isArray(e)) return e;
}
var P = V;
function k(e, t) {
    if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(e))) return;
    var r = [];
    var n = true;
    var a = false;
    var i = undefined;
    try {
        for (var o = e[Symbol.iterator](), u; !(n = (u = o.next()).done); n = true) {
            r.push(u.value);
            if (t && r.length === t) break;
        }
    } catch (e) {
        a = true;
        i = e;
    } finally {
        try {
            if (!n && o['return'] != null) o['return']();
        } finally {
            if (a) throw i;
        }
    }
    return r;
}
var S = k;
function O() {
    throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
}
var E = O;
function j(e, t) {
    return P(e) || S(e, t) || y(e, t) || E();
}
var x = j;
function _(e, t) {
    if (!(e instanceof t)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
var A = _;
function D(e, t) {
    for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || false;
        n.configurable = true;
        if ('value' in n) n.writable = true;
        Object.defineProperty(e, n.key, n);
    }
}
function R(e, t, r) {
    if (t) D(e.prototype, t);
    if (r) D(e, r);
    return e;
}
var N = R;
function U(e) {
    if (e === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return e;
}
var T = U;
function I(e, t) {
    return (t = { exports: {} }), e(t, t.exports), t.exports;
}
var H = I(function(e) {
    function t(r) {
        e.exports = t = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function e(t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
              };
        return t(r);
    }
    e.exports = t;
});
function M() {
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
var q = M;
var L = I(function(e) {
    function t(r) {
        '@babel/helpers - typeof';
        if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
            e.exports = t = function e(t) {
                return typeof t;
            };
        } else {
            e.exports = t = function e(t) {
                return t && typeof Symbol === 'function' && t.constructor === Symbol && t !== Symbol.prototype
                    ? 'symbol'
                    : typeof t;
            };
        }
        return t(r);
    }
    e.exports = t;
});
function B(e, t) {
    if (t && (L(t) === 'object' || typeof t === 'function')) {
        return t;
    }
    return T(e);
}
var Y = B;
function Q(e) {
    return function() {
        var t = H(e),
            r;
        if (q()) {
            var n = H(this).constructor;
            r = Reflect.construct(t, arguments, n);
        } else {
            r = t.apply(this, arguments);
        }
        return Y(this, r);
    };
}
var G = Q;
var z = I(function(e) {
    function t(r, n) {
        e.exports = t =
            Object.setPrototypeOf ||
            function e(t, r) {
                t.__proto__ = r;
                return t;
            };
        return t(r, n);
    }
    e.exports = t;
});
function K(e, t) {
    if (typeof t !== 'function' && t !== null) {
        throw new TypeError('Super expression must either be null or a function');
    }
    e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: true, configurable: true } });
    if (t) z(e, t);
}
var W = K;
var J = t.createContext(function() {
    return {};
});
var X = Object.getPrototypeOf({});
var Z = /\s*(?:\]\s*\.|\]\s*\[|\.|\[|\])\s*/g;
var ee = te(window) ? global : window;
function te(e) {
    return typeof e === 'undefined';
}
function re(e) {
    return typeof e === 'function';
}
function ne(e) {
    return te(e) || e === null || e + '' === '';
}
function ae(e) {
    return !!e && re(e.then);
}
function ie(e) {
    return Object.prototype.toString.call(e) === '[object Object]';
}
function oe(e) {
    if (!ie(e)) return false;
    if (null === Object.getPrototypeOf(e)) return true;
    if (!re(e.constructor)) return false;
    return e.constructor.prototype === X;
}
function ue(e) {
    return n.isValidElementType(e) && typeof e !== 'string';
}
function se(e) {
    if (Array.isArray(e)) {
        var t = [];
        for (var r = 0, n = e.length; r < n; r++) {
            t[r] = se(e[r]);
        }
        return t;
    } else if (oe(e)) {
        var a = {};
        for (var i in e) {
            if (e.hasOwnProperty(i)) a[i] = se(e[i]);
        }
        return a;
    }
    return e;
}
var le = function e(t) {
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) {
        n[a - 1] = arguments[a];
    }
    if (re(t)) {
        t.apply(void 0, n);
    }
    return n[0];
};
function fe(e) {
    return function() {
        for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) {
            r[n] = arguments[n];
        }
        if (ue(r[0])) {
            return e.apply(void 0, r);
        }
        return function(t) {
            return e(t, r[0]);
        };
    };
}
var $e = ['minlength', 'maxlength', 'max', 'min', 'required', 'pattern', 'step'];
function ce(e) {
    return $e.indexOf(e.toLowerCase()) > -1;
}
var de = function e(t) {
    try {
        var r = new Function(
            'origin',
            'global',
            'return typeof '
                .concat(t, " === 'number' || (typeof ")
                .concat(t, " !== 'undefined' && !(origin in global)) ? ")
                .concat(t, ' : origin')
        );
        return r(t, ee);
    } catch (e) {
        return t;
    }
};
function ve() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) {
        t[r] = arguments[r];
    }
    var n = t[0],
        i = t[1],
        o = t[2];
    a(typeof i === 'string', 'The second parameter('.concat(JSON.stringify(i), ') of parsePath() must be a string.'));
    var u = (i.match(Z) || []).map(function(e) {
        return e.replace(/\s/g, '');
    });
    var s = i
        .split(Z)
        .map(function(e) {
            return e.trim();
        })
        .filter(function(e) {
            return e !== '';
        });
    var l = n;
    try {
        if (t.length < 3) {
            for (var f = 0, c = s.length; f < c; f++) {
                var d = de(s[f]);
                if (f + 1 === c) {
                    return l[d];
                }
                if (te(l[d])) {
                    break;
                }
                l = l[d];
            }
        } else {
            for (var v = 0, p = s.length; v < p; v++) {
                var h = de(s[v]);
                var m = s[v + 1];
                var g = u[v];
                if (te(m)) {
                    l[h] = o;
                    break;
                }
                switch (g) {
                    case '].':
                    case '.':
                        l = l[h] = te(l[h]) ? {} : $({}, l[h]);
                        break;
                    case '][':
                    case '[':
                        var y = de(m);
                        l = l[h] = te(l[h])
                            ? typeof y === 'number' && y >= 0
                                ? []
                                : {}
                            : Array.isArray(l[h])
                            ? C(l[h])
                            : $({}, l[h]);
                        break;
                    default:
                        l[h] = o;
                        break;
                }
            }
        }
    } catch (e) {
        a(false, "The name '%s' of Field seems is not a legal expression.", i);
    }
    if (t.length > 2) {
        return n;
    }
}
function pe(e, t) {
    var r = t
        .split(Z)
        .map(function(e) {
            return e.trim();
        })
        .filter(function(e) {
            return e !== '';
        });
    for (var n = 0, a = r.length; n < a; n++) {
        var i = de(r[n]);
        if (!(i in e)) {
            break;
        }
        if (n + 1 === a) {
            return { data: e[i] };
        }
        e = e[i];
    }
}
function he(e, t) {
    if (e) {
        if (re(e)) {
            e(t);
        } else if ('current' in e) {
            e.current = t;
        }
    }
}
var me = function e(t, r) {
    for (var n = 0, a = t.length; n < a; n++) {
        if (r(t[n]) === true) {
            return t[n];
        }
    }
};
var ge = function e(t, r) {
    return Object.keys(t).reduce(function(e, n) {
        e[n] = r(t[n], n, t);
        return e;
    }, {});
};
var ye = function e(t, r) {
    return Object.keys(t).forEach(function(e) {
        return r(t[e], e, t);
    });
};
var be = undefined;
function we(e, t, r) {
    ye(e, function(t, r) {
        if (t === be) {
            delete e[r];
        } else if (oe(t) || Array.isArray(t)) {
            we(t, r, e);
        }
    });
    if (
        r &&
        Object.keys(e).every(function(t) {
            return e[t] === be;
        })
    ) {
        r[t] = be;
        we(r);
    }
}
var Fe = function e(t, r) {
    if (!te(ve(t, r))) {
        ve(t, r, be);
        we(t);
    }
};
function Ce(e, t) {
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
var Ve = 'FORM_VALIDATE_RESULT';
var Pe, ke;
if (typeof requestAnimationFrame === 'function') {
    Pe = requestAnimationFrame;
    ke = cancelAnimationFrame;
} else {
    Pe = setTimeout;
    ke = clearTimeout;
}
var Se = (function(e) {
    W(i, e);
    var n = G(i);
    function i(e) {
        var t;
        A(this, i);
        t = n.call(this, e);
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
            var e = T(t),
                r = e.$$regDuplications;
            var n;
            ye(r, function(e, t) {
                var i = x(e, 2),
                    o = i[0],
                    u = i[1];
                a(o.$$reserved, "The Field with a name '".concat(t, "' has been registered!"));
                u.$$reset(o.$getState());
                n = delete r[t];
            });
            if (n) {
                t.$render();
            }
        };
        t.$$register = function(e, r, n) {
            t.$$unregister(n, r);
            if (e) {
                var a = t.$$getRegister(e);
                if (a) {
                    ke(t.$$duplicateTimer);
                    t.$$regDuplications[e] = [a, r];
                    t.$$duplicateTimer = Pe(t.$$checkDuplication);
                } else {
                    t.$$fieldChangedQueue.push({ name: e, $newValue: r.$getState().$value });
                    Fe(t.$$defaultValues, e);
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
                    var a = x(t.$$regDuplications[e], 2),
                        i = a[0],
                        o = a[1];
                    t.$$fieldChangedQueue.push({
                        name: e,
                        $newValue: o.$getState().$value,
                        $prevValue: i.$getState().$value
                    });
                    delete t.$$regDuplications[e];
                } else if (t.$$registers[e] === r) {
                    if (n) {
                        r.$$reserved = true;
                    } else {
                        delete t.$$registers[e];
                        t.$$fieldChangedQueue.push({ name: e, $prevValue: r.$getState().$value });
                        Fe(t.$$defaultValues, e);
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
            t.$$defaultValues = t.$$deepParseObject(se(re(r) ? r(t.props) || {} : r));
            t.$$defaultStates = t.$$deepParseObject(se(re(n) ? n(t.props) || {} : n));
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
                var e = C(t.$$fieldChangedQueue);
                t.$$fieldChangedQueue.length = 0;
                var r = {};
                var n = {};
                var a = t.$$registers;
                var i = false;
                e.forEach(function(e) {
                    if (!(e.name in a)) {
                        delete e.$newValue;
                    }
                    if (e.$newValue !== e.$prevValue) {
                        if ('$newValue' in e && '$prevValue' in e) {
                            var o = t.$$getRegister(e.name);
                            if (o) {
                                o.$$triggerChange(e);
                            }
                        }
                        '$newValue' in e && ve(r, e.name, e.$newValue);
                        '$prevValue' in e && ve(n, e.name, e.$prevValue);
                        i = true;
                    }
                });
                if (i) {
                    if (re(t.props.$validator)) {
                        t.$$formValidate();
                    }
                    if (re(t.props.$onFormChange)) {
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
                var r = t.$$registers[e] || ve(t.$$deepRegisters, e);
                if (r) {
                    return r;
                }
            }
        };
        t.$$formValidate = function() {
            return (t.$$formValidatePromise = new Promise(function(e) {
                var r = t.props.$validator;
                var n;
                var a;
                var i;
                var o;
                var u = r(t.$formutil.$params, t.$formutil);
                var s = function t(r) {
                    return e(le(i, r));
                };
                if (ae(u)) {
                    if (!t.$$formPending) {
                        t.$$formPending = true;
                        t.$render();
                    }
                    a = function e(t) {
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
                        i = e;
                        return o;
                    });
                }
                t.$shouldCancelPrevAsyncValidate = a;
            }));
        };
        t.$$setFormErrors = function(e, r) {
            if (e && (e instanceof Error || typeof e !== 'object')) {
                a(
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
                        a = n === void 0 ? {} : n;
                    if (e) {
                        return { $error: $({}, a, s({}, Ve, e)) };
                    }
                    if (a[Ve]) {
                        delete a[Ve];
                        return { $error: a };
                    }
                },
                r,
                true
            );
        };
        t.$getField = function(e) {
            var r = t.$$getRegister(e);
            a(!e || r, "$getField('".concat(e, "') fail to find the matched Field. Maybe it has been unmounted."));
            a(e, 'You should pass a name of the mounted Field to $getField().');
            if (r) {
                var n;
                return (n = r.$new) === null || n === void 0 ? void 0 : n.call(r);
            }
        };
        t.$$onChange = function(e, r, n) {
            return t.$setStates(s({}, e, r), n);
        };
        t.$$setStates = function() {
            var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var r = arguments.length > 1 ? arguments[1] : undefined;
            var n = arguments.length > 2 ? arguments[2] : undefined;
            var a = arguments.length > 3 ? arguments[3] : undefined;
            var i = t.$$deepParseObject(e);
            ye(t.$$registers, function(e, n) {
                var o = pe(i, n);
                if (a || o) {
                    var u = r(o && o.data, e);
                    if (u) {
                        var s = t.$formutil.$weakParams[n];
                        var l = e.$$merge(u),
                            f = l.$value;
                        e.$$detectChange(u);
                        if ('$value' in u || '$viewValue' in u) {
                            var $ = me(t.$$fieldChangedQueue, function(e) {
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
                    return r(le(e, t.$formutil));
                });
            });
        };
        t.$validates = function() {
            var e;
            for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) {
                n[a] = arguments[a];
            }
            if (re(n[n.length - 1])) {
                e = n.pop();
            }
            if (n.length) {
                var i = function e(r) {
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
                i(n);
            } else {
                ye(t.$$registers, function(e) {
                    return e.$validate();
                });
                if (re(t.props.$validator)) {
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
                return le(e, t.$formutil);
            });
        };
        t.$validate = function(e, r) {
            var n = t.$getField(e);
            if (n) {
                return n.$validate(r);
            }
            return le(r);
        };
        t.$reset = function(e, r) {
            t.$$defaultInitialize();
            if (re(e)) {
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
            t.$$deepParseObject(se(e), t.$$defaultValues);
            we(t.$$defaultValues);
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
                ge(t.$$registers, function() {
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
            for (var a in r.$weakErrors) {
                if (r.$weakErrors.hasOwnProperty(a)) {
                    var i = r.$weakErrors[a];
                    for (var o in i) {
                        if (i.hasOwnProperty(o)) {
                            return i[o] instanceof Error ? i[o].message : i[o];
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
    N(i, [
        {
            key: '$$deepParseObject',
            value: function e(t) {
                var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                ye(t, function(e, t) {
                    return ve(r, t, e);
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
                he(this.props.$ref, this.$formutil);
            }
        },
        {
            key: 'componentDidUpdate',
            value: function e(t) {
                var r = this;
                he(this.props.$ref, this.$formutil);
                ke(this.$$triggerChangeTimer);
                this.$$triggerChangeTimer = Pe(function() {
                    r.$$triggerFormChange();
                });
            }
        },
        {
            key: 'componentWillUnmount',
            value: function e() {
                he(this.props.$ref, null);
            }
        },
        {
            key: '_render',
            value: function e() {
                var r = this.$formutil;
                var n = this.props,
                    a = n.children,
                    i = n.render,
                    o = n.component;
                if (o) {
                    return t.createElement(o, { $formutil: r });
                }
                if (re(i)) {
                    return i(r);
                }
                if (re(a)) {
                    return a(r);
                }
                return t.Children.map(a, function(e) {
                    return e && ue(e.type) ? t.cloneElement(e, { $formutil: r }) : e;
                });
            }
        },
        {
            key: 'render',
            value: function e() {
                var t = this;
                var n = this.props.$processer;
                var a = Object.keys(this.$$registers).map(function(e) {
                    return { path: e, $state: t.$$registers[e].$getState() };
                });
                var i = this.$$formShouldUpdateAll;
                var o = this.$formutil || {};
                var u = a.some(function(e) {
                    var t = e.$state;
                    return t.$invalid;
                });
                var s = a.some(function(e) {
                    var t = e.$state;
                    return t.$dirty;
                });
                var l = a.some(function(e) {
                    var t = e.$state;
                    return t.$touched;
                });
                var f = a.some(function(e) {
                    var t = e.$state;
                    return t.$focused;
                });
                var c =
                    this.$$formPending ||
                    a.some(function(e) {
                        var t = e.$state;
                        return t.$pending;
                    });
                var d = i ? {} : $({}, o.$pureParams);
                var v = i ? {} : $({}, o.$states);
                var p = i ? {} : $({}, o.$errors);
                var h = i ? {} : $({}, o.$dirts);
                var m = i ? {} : $({}, o.$touches);
                var g = i ? {} : $({}, o.$focuses);
                var y = i ? {} : $({}, o.$pendings);
                var b = i ? {} : $({}, o.$weakStates);
                var w = i ? {} : $({}, o.$weakParams);
                var F = i ? {} : $({}, o.$weakErrors);
                var C = i ? {} : $({}, o.$weakDirts);
                var V = i ? {} : $({}, o.$weakFocuses);
                var P = i ? {} : $({}, o.$weakTouches);
                var k = i ? {} : $({}, o.$weakPendings);
                for (var S = 0, O = a.length; S < O; S++) {
                    var E = a[S],
                        j = E.$state,
                        x = E.path;
                    if (!i) {
                        if (!this.$$formShouldUpdateFields[x]) {
                            continue;
                        }
                    }
                    if (n) {
                        n(j, x);
                    }
                    if (x in w && j.$pristine && te(j.$value)) {
                        delete w[x];
                        Fe(d, x);
                    } else if (w[x] !== j.$value) {
                        w[x] = j.$value;
                        ve(d, x, j.$value);
                    }
                    ve(v, x, j);
                    b[x] = j;
                    if (F[x] !== j.$error) {
                        if (j.$invalid) {
                            ve(p, x, j.$error);
                            F[x] = j.$error;
                        } else if (x in F) {
                            Fe(p, x);
                            delete F[x];
                        }
                    }
                    if (C[x] !== j.$dirty) {
                        ve(h, x, j.$dirty);
                        C[x] = j.$dirty;
                    }
                    if (P[x] !== j.$touched) {
                        ve(m, x, j.$touched);
                        P[x] = j.$touched;
                    }
                    if (V[x] !== j.$focused) {
                        ve(g, x, j.$focused);
                        V[x] = j.$focused;
                    }
                    if (k[x] !== j.$pending) {
                        ve(y, x, j.$pending);
                        k[x] = j.$pending;
                    }
                }
                this.$formutil = {
                    $$registers: $({}, this.$$registers),
                    $$deepRegisters: this.$$deepRegisters,
                    $states: v,
                    $pureParams: d,
                    $params: $({}, this.$$defaultValues, {}, d),
                    $errors: p,
                    $dirts: h,
                    $touches: m,
                    $focuses: g,
                    $pendings: y,
                    $weakStates: b,
                    $weakParams: w,
                    $weakErrors: F,
                    $weakDirts: C,
                    $weakTouches: P,
                    $weakFocuses: V,
                    $weakPendings: k,
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
                    $pending: c
                };
                this.$$resetFormUpdateFields();
                return r.createElement(J.Provider, { value: this.getFormContext }, this._render());
            }
        }
    ]);
    return i;
})(t.Component);
Se.displayName = 'React.Formutil.Form';
Se.defaultProps = { $defaultValues: {}, $defaultStates: {} };
function Oe(e, t) {
    if (e == null) return {};
    var r = {};
    var n = Object.keys(e);
    var a, i;
    for (i = 0; i < n.length; i++) {
        a = n[i];
        if (t.indexOf(a) >= 0) continue;
        r[a] = e[a];
    }
    return r;
}
var Ee = Oe;
function je(e, t) {
    if (e == null) return {};
    var r = Ee(e, t);
    var n, a;
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++) {
            n = i[a];
            if (t.indexOf(n) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(e, n)) continue;
            r[n] = e[n];
        }
    }
    return r;
}
var xe = je;
var _e = [
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
function Ae(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var a = (function(t) {
        W(i, t);
        var a = G(i);
        function i() {
            var t;
            A(this, i);
            for (var n = arguments.length, o = new Array(n), u = 0; u < n; u++) {
                o[u] = arguments[u];
            }
            t = a.call.apply(a, [this].concat(o));
            t.renderChildren = function(n) {
                return r.createElement(
                    e,
                    Object.assign({}, t.othersProps, { $formutil: n, ref: t.props.__forwardRef__ })
                );
            };
            return t;
        }
        N(i, [
            {
                key: 'render',
                value: function e() {
                    var t = Object.assign({}, this.props);
                    var a = this.props,
                        i = a.component,
                        o = xe(a, ['component']);
                    _e.forEach(function(e) {
                        if (e in t) {
                            if (e === '$defaultStates' || e === '$defaultValues') {
                                o[e] = $({}, n[e], {}, t[e]);
                            }
                            delete t[e];
                        }
                    });
                    this.othersProps = t;
                    return r.createElement(Se, Object.assign({}, n, o, { render: this.renderChildren }));
                }
            }
        ]);
        return i;
    })(t.Component);
    a.displayName = 'React.Formutil.withForm.' + (e.displayName || e.name || 'Anonymous');
    var o = t.forwardRef(function(e, t) {
        return r.createElement(a, Object.assign({ __forwardRef__: t }, e));
    });
    o.displayName = 'React.Formutil.withForm.ForwardRef.' + (e.displayName || e.name || 'Anonymous');
    return i(o, e);
}
var De = fe(Ae);
var Re = 0;
var Ne = {
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
function Ue(e) {
    return e !== true;
}
function Te(e, t, r) {
    a(
        !te(e),
        "You should return a string or Error when the validation('"
            .concat(r && r + ': ')
            .concat(t, "') failed, otherwise return true.")
    );
}
var Ie = 'React.Formutil.Field';
function He() {
    return Re++;
}
function Me(e, r) {
    var n = r.children,
        a = r.render,
        i = r.component;
    if (i) {
        return t.createElement(i, { $fieldutil: e });
    }
    if (re(a)) {
        return a(e);
    }
    if (re(n)) {
        return n(e);
    }
    return t.Children.map(n, function(r) {
        return r && ue(r.type) ? t.cloneElement(r, { $fieldutil: e }) : r;
    });
}
function qe(e, t) {
    var r = {
        $$FIELD_UUID: e.$$FIELD_UUID,
        $$reset: u,
        $$merge: b,
        $$detectChange: a,
        $$triggerChange: i,
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
        $setValue: c,
        $setTouched: d,
        $setDirty: v,
        $setFocused: p,
        $setValidity: m,
        $setError: h,
        $setPending: g
    };
    var n;
    function a(e) {
        if ('$value' in e || '$viewValue' in e) {
            l();
        }
    }
    function i(t) {
        var r = t.$newValue,
            n = t.$prevValue;
        var a = e.props.$onFieldChange;
        if (re(a)) {
            a(r, n, e.$formContext.$formutil);
        }
    }
    function o(e) {
        n.then(e);
        return n;
    }
    function u(t) {
        var r;
        var n = e.props,
            a = e.$formContext;
        if (a.$$getDefault) {
            var i = n.name;
            var o = a.$$getDefault(),
                u = o.$$defaultStates,
                s = o.$$defaultValues;
            if (i && s) {
                var l = ve(s, i);
                r = ve(u, i) || {};
                if (!te(l)) {
                    r.$value = l;
                }
            }
        }
        var f = n.$defaultValue,
            c = n.$defaultState;
        return b($({}, Ne, {}, re(c) ? c(n) : c, { $value: re(f) ? f(n) : '$defaultValue' in n ? f : '' }, r, {}, t));
    }
    function s() {
        return $({}, e.$state);
    }
    function l(t) {
        return (n = new Promise(function(r) {
            var n = e.props,
                a = e.$formContext;
            var i = $({}, n.$validators, {}, n.$asyncValidators);
            var o = e.$state,
                u = o.$value,
                s = o.$pending,
                l = Object.assign({}, o.$error);
            var f = a.$formutil;
            var c = {};
            var d = false;
            var v;
            var p;
            var y;
            var b;
            delete l[Ve];
            var w = Object.keys(i).reduce(function(t, r) {
                delete l[r];
                if (!d && n[r] != null) {
                    var a = i[r](u, n[r], $({}, n, { $formutil: f, $fieldutil: e.$fieldutil, $validError: c }));
                    if (ae(a)) {
                        t.push(
                            a['catch'](function(e) {
                                if (!v) {
                                    m(r, e || r);
                                }
                            })
                        );
                    } else if (Ue(a)) {
                        c[r] = a || r;
                        Te(a, r, n.name);
                        if (n.$validateLazy) {
                            d = true;
                        }
                    }
                }
                return t;
            }, []);
            var F = function e(n) {
                return r(le(t, le(y, n)));
            };
            if (w.length) {
                if (!s) {
                    g(true);
                }
                p = function e(t) {
                    return (v = t(F));
                };
                w.push(h($({}, l, {}, c)));
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
                b = h($({}, l, {}, c), F);
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
    function c(t, r) {
        return e.$setState({ $value: t }, r);
    }
    function d(t, r) {
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
        var a = Object.assign({}, e.$state.$error);
        if (Ue(r)) {
            a[t] = r || t;
            Te(r, t, e.props.name);
        } else {
            delete a[t];
        }
        return h(a, n);
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
            a = n.$parser,
            i = n.$formatter;
        if ('$viewValue' in r && !('$value' in r)) {
            var o = function e(t) {
                return (r.$viewValue = t);
            };
            r.$value = a ? a(r.$viewValue, o) : r.$viewValue;
        } else if ('$value' in r && !('$viewValue' in r)) {
            var u = function e(t) {
                return (r.$value = t);
            };
            r.$viewValue = i ? i(r.$value, u) : r.$value;
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
        e.$state = $({}, e.$state, {}, r);
        return s();
    }
    return r;
}
var Le = (function(e) {
    W(n, e);
    var t = G(n);
    function n() {
        var e;
        A(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) {
            a[i] = arguments[i];
        }
        e = t.call.apply(t, [this].concat(a));
        e.$$FIELD_UUID = He();
        e.$formContext = void 0;
        e.$state = void 0;
        e.shouldRendered = false;
        e.$setState = function(t, r) {
            return new Promise(function(n) {
                var a = function t() {
                    return n(le(r, e.$fieldutil));
                };
                if (e.isMounting) {
                    var i = e.props.name;
                    if (i in (e.$formContext.$$registers || {})) {
                        e.shouldRendered = false;
                        e.$formContext.$$onChange(i, t, a);
                        if (!e.shouldRendered) {
                            e.forceUpdate();
                        }
                    } else {
                        e.$registered.$$merge(t);
                        e.$registered.$$detectChange(t);
                        e.forceUpdate(a);
                    }
                } else {
                    e.$registered.$$merge(t);
                    a();
                }
            });
        };
        return e;
    }
    N(n, [
        {
            key: 'componentDidMount',
            value: function e() {
                this.isMounting = true;
                var t = this.props.name,
                    r = this.$formContext;
                a(
                    !t || r.$formutil,
                    "You should enusre that the <Field /> with the name '".concat(
                        t,
                        "' must be used underneath a <Form /> component or withForm() HOC, otherwise it's isolated."
                    )
                );
                a(t, 'You should assign a name to <Field />, otherwise it will be isolated!');
                if (r.$$register) {
                    r.$$register(t, this.$fieldHandler);
                }
                this.$prevState = this.$state;
                he(this.props.$ref, this.$fieldutil);
            }
        },
        {
            key: 'componentWillUnmount',
            value: function e() {
                if (this.$formContext.$$unregister) {
                    this.$formContext.$$unregister(this.props.name, this.$fieldHandler, this.props.$reserveOnUnmount);
                }
                this.isMounting = false;
                he(this.props.$ref, null);
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
                he(this.props.$ref, this.$fieldutil);
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
                    !Ce(this.$registered.$getState(), this.$prevState) ||
                    !(Array.isArray(r) ? o(r, this.props.$memo) : o(this.props, t))
                );
            }
        },
        {
            key: '_render',
            value: function e() {
                var t = (this.$fieldutil = $(
                    { $name: this.props.name },
                    this.$registered.$getState(),
                    {},
                    this.$registered,
                    { $$formutil: this.$formContext.$formutil }
                ));
                return Me(t, this.props);
            }
        },
        {
            key: 'render',
            value: function e() {
                var t = this;
                this.shouldRendered = true;
                return r.createElement(J.Consumer, null, function(e) {
                    var r = !t.$formContext;
                    t.$formContext = e();
                    if (!t.$fieldHandler) {
                        t.$fieldHandler = qe(t, t);
                    }
                    t.$registered = (t.$formContext.$$registers || {})[t.$fieldHandler.$name] || t.$fieldHandler;
                    if (r) {
                        t.$fieldHandler.$$reset();
                        t.$fieldHandler.$validate();
                    }
                    return t._render();
                });
            }
        }
    ]);
    return n;
})(t.Component);
Le.displayName = Ie;
var Be = [
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
function Ye(e) {
    var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var a = (function(t) {
        W(i, t);
        var a = G(i);
        function i() {
            var t;
            A(this, i);
            for (var n = arguments.length, o = new Array(n), u = 0; u < n; u++) {
                o[u] = arguments[u];
            }
            t = a.call.apply(a, [this].concat(o));
            t.renderChildren = function(n) {
                return r.createElement(
                    e,
                    Object.assign({}, t.othersProps, { $fieldutil: n, ref: t.props.__forwardRef__ })
                );
            };
            return t;
        }
        N(i, [
            {
                key: 'render',
                value: function e() {
                    var t = Object.assign({}, this.props);
                    var a = this.props,
                        i = a.component,
                        o = xe(a, ['component']);
                    Be.concat(
                        Object.keys(
                            $({}, n.$validators, {}, n.$asyncValidators, {}, t.$validators, {}, t.$asyncValidators)
                        )
                    ).forEach(function(e) {
                        if (e in t) {
                            if (e === '$validators' || e === '$asyncValidators' || e === '$defaultState') {
                                o[e] = $({}, n[e], {}, t[e]);
                            }
                            delete t[e];
                        }
                    });
                    this.othersProps = t;
                    return r.createElement(Le, Object.assign({}, n, o, { render: this.renderChildren }));
                }
            }
        ]);
        return i;
    })(t.Component);
    a.displayName = 'React.Formutil.withField.' + (e.displayName || e.name || 'Anonymous');
    var o = t.forwardRef(function(e, t) {
        return r.createElement(a, Object.assign({ __forwardRef__: t }, e));
    });
    o.displayName = 'React.Formutil.withField.ForwardRef.' + (e.displayName || e.name || 'Anonymous');
    return i(o, e);
}
var Qe = fe(Ye);
var Ge = (function(e) {
    W(n, e);
    var t = G(n);
    function n() {
        A(this, n);
        return t.apply(this, arguments);
    }
    N(n, [
        {
            key: 'render',
            value: function e() {
                var t = this;
                var n = this.props,
                    a = n.$fieldutil,
                    i = n.value,
                    o = n.onChange,
                    u = n.onFocus,
                    s = n.onBlur,
                    l = n.checked,
                    f = n.unchecked,
                    $ = xe(n, ['$fieldutil', 'value', 'onChange', 'onFocus', 'onBlur', 'checked', 'unchecked']);
                var c = this.props.type;
                var d = {
                    value: 'compositionValue' in this ? this.compositionValue : i,
                    onCompositionEnd: function e(r) {
                        t.composition = false;
                        delete t.compositionValue;
                        d.onChange(r);
                    },
                    onCompositionStart: function e() {
                        return (t.composition = true);
                    },
                    onChange: function e(r) {
                        var n = r.target.value;
                        if (t.composition) {
                            t.compositionValue = n;
                            t.forceUpdate();
                        } else {
                            o(n, r);
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
                            checked: i === l,
                            onChange: function e(t) {
                                o(t.target.checked ? l : f, t);
                            },
                            onFocus: u,
                            onBlur: s
                        };
                        break;
                }
                return r.createElement(v, Object.assign({}, $, d));
            }
        }
    ]);
    return n;
})(t.Component);
Ge.displayName = 'React.Formutil.EasyField.Native';
Ge.defaultProps = { value: '', type: 'text', checked: true, unchecked: false };
var ze = t.createContext(function() {
        return {};
    }),
    Ke = ze.Provider,
    We = ze.Consumer;
var Je = (function(e) {
    W(a, e);
    var n = G(a);
    function a() {
        var e;
        A(this, a);
        for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) {
            r[i] = arguments[i];
        }
        e = n.call.apply(n, [this].concat(r));
        e.getGroupContext = function() {
            return e.props;
        };
        return e;
    }
    N(a, [
        {
            key: '_render',
            value: function e() {
                var n = this.props,
                    a = n.className,
                    i = n.groupNode,
                    o = n.children;
                var u = { GroupOption: Xe, Field: Ze };
                var s = re(o)
                    ? o(u)
                    : t.Children.map(o, function(e) {
                          return t.cloneElement(e, u);
                      });
                if (i === null) {
                    return s;
                }
                return r.createElement(i, { className: a }, s);
            }
        },
        {
            key: 'render',
            value: function e() {
                return r.createElement(Ke, { value: this.getGroupContext }, this._render());
            }
        }
    ]);
    return a;
})(t.Component);
Je.displayName = 'React.Formutil.EasyField.Group';
Je.defaultProps = { type: 'checkbox', groupNode: 'div' };
var Xe = (function(e) {
    W(n, e);
    var t = G(n);
    function n() {
        A(this, n);
        return t.apply(this, arguments);
    }
    N(n, [
        {
            key: 'componentDidMount',
            value: function e() {
                a('$value' in this.props, 'You should pass a $value to <GroupOption />.');
            }
        },
        {
            key: 'render',
            value: function e() {
                var t = this.props,
                    n = t.$value,
                    a = t.onChange,
                    i = t.onFocus,
                    o = t.onBlur,
                    u = xe(t, ['$value', 'onChange', 'onFocus', 'onBlur']);
                return r.createElement(We, null, function(e) {
                    var t = e();
                    var s = t.type,
                        l = t.name;
                    var f =
                        s === 'radio'
                            ? {
                                  checked: t.value === n,
                                  onChange: function e(r) {
                                      t.onChange(n, r);
                                      a && a(r);
                                  }
                              }
                            : s === 'checkbox'
                            ? {
                                  checked: t.value.indexOf(n) > -1,
                                  onChange: function e(r) {
                                      t.onChange(
                                          r.target.checked
                                              ? t.value.concat(n)
                                              : t.value.filter(function(e) {
                                                    return e !== n;
                                                }),
                                          r
                                      );
                                      a && a(r);
                                  }
                              }
                            : {
                                  value: t.value,
                                  onChange: function e(r) {
                                      t.onChange(r);
                                      a && a(r);
                                  }
                              };
                    return r.createElement(
                        'input',
                        Object.assign({ name: l }, u, f, {
                            type: s,
                            onFocus: function e(r) {
                                t.onFocus(r);
                                i && i(r);
                            },
                            onBlur: function e(r) {
                                t.onBlur(r);
                                o && o(r);
                            }
                        })
                    );
                });
            }
        }
    ]);
    return n;
})(t.Component);
Xe.displayName = 'React.Formutil.EasyField.Group.Option';
var Ze = (function(e) {
    W(n, e);
    var t = G(n);
    function n() {
        A(this, n);
        return t.apply(this, arguments);
    }
    N(n, [
        {
            key: 'componentDidMount',
            value: function e() {
                a(
                    false,
                    'The "Field" property in EasyField\'s children-props has been deprecated. Please use "GroupOption" instead.'
                );
            }
        },
        {
            key: 'render',
            value: function e() {
                return r.createElement(Xe, this.props);
            }
        }
    ]);
    return n;
})(t.Component);
Ze.displayName = 'React.Formutil.EasyField.Group.Option.Deprecated';
var et = r.Frament || 'div';
var tt = (function(e) {
    W(n, e);
    var t = G(n);
    function n(e) {
        var r;
        A(this, n);
        r = t.call(this, e);
        r.id = 0;
        r.latestValue = r.props.value;
        r.$formutil = void 0;
        r.FieldValidators = {
            required: function e(t) {
                return t !== null;
            }
        };
        r.$onFormChange = function(e) {
            e.$onValidates(function(e) {
                var t = e.$invalid,
                    n = e.$params;
                if (t) {
                    if (r.props.value.length) {
                        r.props.onChange((r.latestValue = []));
                    }
                } else if (!o(r.props.value, n.list)) {
                    r.props.onChange((r.latestValue = n.list));
                }
            });
        };
        r.swap = function(e, t, n) {
            return r.$setState(function(r) {
                var n = r.items;
                var a = [n[e], n[t]];
                n[t] = a[0];
                n[e] = a[1];
                return n;
            }, n);
        };
        r.insert = function() {
            var e, t, n;
            for (var a = arguments.length, i = new Array(a), o = 0; o < a; o++) {
                i[o] = arguments[o];
            }
            i.forEach(function(r) {
                if (re(r)) {
                    n = r;
                } else if (typeof r === 'number') {
                    e = r;
                } else if (typeof r === 'object') {
                    t = r;
                }
            });
            return r.$setState(function(n) {
                var a = n.items;
                if (te(e)) {
                    a.push(r.getId(t));
                } else {
                    a.splice(e, 0, r.getId(t));
                }
                return { items: a };
            }, n);
        };
        r.remove = function() {
            var e, t;
            for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) {
                a[i] = arguments[i];
            }
            a.forEach(function(r) {
                if (re(r)) {
                    t = r;
                } else if (typeof r === 'number') {
                    e = r;
                }
            });
            return r.$setState(function(t) {
                var n = t.items;
                if (te(e)) {
                    n.pop();
                } else {
                    n.splice(e, 1);
                }
                if (!n.length) {
                    n = [r.getId()];
                }
                return { items: n };
            }, t);
        };
        r.$setState = function(e, t) {
            return new Promise(function(n) {
                return r.setState(e, function() {
                    return r.$formutil.$onValidates(function(e) {
                        return n(le(t, e));
                    });
                });
            });
        };
        r.state = {
            items: e.value.length
                ? e.value.map(function() {
                      return r.getId();
                  })
                : [r.getId()],
            formKey: 0
        };
        return r;
    }
    N(n, [
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
            value: function e() {
                var t = this;
                var n = this.props,
                    a = n.children,
                    i = n.onFocus,
                    u = n.onBlur,
                    s = n.value;
                var l = this;
                if (!re(a)) {
                    return null;
                }
                var f = {
                    $insert: this.insert,
                    $remove: this.remove,
                    $swap: this.swap,
                    $push: function e(r, n) {
                        return t.insert(r, n);
                    },
                    $pop: function e(r) {
                        return t.remove(r);
                    },
                    $shift: function e(r) {
                        return t.remove(0, r);
                    },
                    $unshift: function e(r, n) {
                        return t.insert(0, r, n);
                    },
                    onFocus: i,
                    onBlur: u
                };
                return r.createElement(Se, {
                    key: this.state.formKey,
                    $defaultValues: { list: s },
                    $onFormChange: this.$onFormChange,
                    children: function e(n) {
                        t.$formutil = n;
                        return r.createElement(
                            et,
                            null,
                            t.state.items.map(function(e, i) {
                                var u = e.id,
                                    s = e.values;
                                return r.createElement(Le, {
                                    key: u,
                                    required: true,
                                    $defaultValue: s || null,
                                    $validators: t.FieldValidators,
                                    name: 'list['.concat(i, ']'),
                                    children: function e(u) {
                                        return r.createElement(Se, {
                                            $defaultValues: u.$value || {},
                                            $onFormChange: function e(t) {
                                                return t.$onValidates(function(e) {
                                                    var t = e.$invalid,
                                                        r = e.$params;
                                                    if (t) {
                                                        if (u.$viewValue !== null) {
                                                            u.$render(null);
                                                        }
                                                    } else if (!o(u.$viewValue, r)) {
                                                        u.$render(r);
                                                    }
                                                });
                                            },
                                            children: function e(r) {
                                                return a(
                                                    $(
                                                        {
                                                            get $length() {
                                                                return l.state.items.length;
                                                            },
                                                            $index: i,
                                                            $isLast: function e() {
                                                                return i === t.state.items.length - 1;
                                                            },
                                                            $isFirst: function e() {
                                                                return i === 0;
                                                            }
                                                        },
                                                        f,
                                                        {},
                                                        r
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
})(t.Component);
tt.displayName = 'React.Formutil.EasyField.List';
var rt = '__TYPE__';
var nt = [
    [
        'required',
        function(e, t, r) {
            var n = r.__TYPE__,
                a = r.checked,
                i = a === void 0 ? true : a;
            return n === 'checked' ? e === i : !ne(e);
        }
    ],
    [
        'maxLength',
        function(e, t, r) {
            return (r.required && ne(e)) || e.length <= t;
        }
    ],
    [
        'minLength',
        function(e, t, r) {
            return (r.required && ne(e)) || e.length >= t;
        }
    ],
    [
        'max',
        function(e, t, r) {
            return (r.required && ne(e)) || e * 1 <= t;
        }
    ],
    [
        'min',
        function(e, t, r) {
            return (r.required && ne(e)) || e * 1 >= t;
        }
    ],
    [
        'pattern',
        function(e, t, r) {
            return (r.required && ne(e)) || t.test(e);
        }
    ],
    [
        'enum',
        function(e, t, r) {
            return (r.required && ne(e)) || t.indexOf(e) > -1;
        }
    ],
    [
        'checker',
        function(e, t, r) {
            return t(e, r);
        }
    ]
].reduce(function(e, t) {
    var r = x(t, 2),
        n = r[0],
        a = r[1];
    e[n] = function e(t, r, i) {
        var o = i.validMessage,
            u = o === void 0 ? {} : o;
        return a.apply(void 0, arguments) || u[n] || 'Error input: '.concat(n);
    };
    return e;
}, {});
var at = 'React.Formutil.EasyField';
var it = {
    validMessage: {},
    valuePropName: 'value',
    changePropName: 'onChange',
    focusPropName: 'onFocus',
    blurPropName: 'onBlur',
    $parser: function e(t) {
        return typeof t === 'string' ? t.trim() : t;
    }
};
function ot(e, t, r) {
    var n;
    var a = t.valuePropName,
        i = t.changePropName,
        o = t.focusPropName,
        u = t.blurPropName,
        l = t.getValueFromEvent,
        f = t.passUtil;
    var c = function e(t) {
        return t && t.target ? t.target[a] : t;
    };
    var d = $(
        {},
        r,
        ((n = {}),
        s(n, a, e.$viewValue),
        s(n, i, function(r) {
            var n;
            for (var a = arguments.length, o = new Array(a > 1 ? a - 1 : 0), u = 1; u < a; u++) {
                o[u - 1] = arguments[u];
            }
            if (((n = o[0]) === null || n === void 0 ? void 0 : n.nativeEvent) instanceof Event) {
                o.push(r);
            } else {
                o.unshift(r);
            }
            var s = t[i];
            s && s.apply(void 0, o);
            var f = l ? l.apply(void 0, o) : c(r);
            e.$render(f);
        }),
        s(n, o, function() {
            var r = t[o];
            r && r.apply(void 0, arguments);
            e.$setFocused(true);
        }),
        s(n, u, function() {
            var r = t[u];
            r && r.apply(void 0, arguments);
            if (e.$untouched) {
                e.$setTouched(true);
            }
            e.$setFocused(false);
        }),
        n)
    );
    if (f) {
        d[f === true ? '$fieldutil' : String(f)] = e;
    }
    return d;
}
function ut(e) {
    var t = e.children,
        r = e.component,
        n = e.render,
        a = xe(e, ['children', 'component', 'render']);
    var i = a.name,
        o = a.type,
        u = a.defaultValue,
        s = a.valuePropName,
        l = a.changePropName,
        f = a.focusPropName,
        c = a.blurPropName,
        d = a.getValueFromEvent,
        v = a.validMessage,
        p = a.checked,
        h = a.unchecked,
        m = a.__TYPE__,
        g = a.__DIFF__,
        y = a.passUtil,
        b = a.$defaultValue,
        w = a.$defaultState,
        F = a.$onFieldChange,
        C = a.$validators,
        V = a.$asyncValidators,
        P = a.$validateLazy,
        k = a.$memo,
        S = a.$reserveOnUnmount,
        O = a.$parser,
        E = a.$formatter,
        j = a.$ref,
        _ = xe(a, [
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
    var A = { children: t, component: r, render: n };
    if (k === true && te(g)) {
        a.__DIFF__ = [t, r, n];
    }
    var D = !te(o) || (te(t) && te(r) && te(n));
    Object.keys($({}, (a.$validators = $({}, nt, {}, a.$validators)), {}, a.$asyncValidators)).forEach(function(e) {
        if (e in _) {
            if (!D || !ce(e)) {
                delete _[e];
            }
        }
    });
    if (D) {
        var R = (o || '').split('.'),
            N = x(R, 2),
            U = N[0],
            T = U === void 0 ? 'text' : U,
            I = N[1];
        A.component = T === 'group' ? Je : T === 'list' ? tt : Ge;
        if (i) {
            _.name = i;
        }
        if (o) {
            _.type = T;
        }
        if (t) {
            _.children = t;
        }
        _.checked = p;
        _.unchecked = h;
        switch (T) {
            case 'select':
            case 'textarea':
                if (e.multiple) {
                    a[rt] = 'array';
                }
                break;
            case 'group':
                if (I === 'checkbox') {
                    a[rt] = 'array';
                }
                _.type = I;
                break;
            case 'checkbox':
            case 'radio':
                a[rt] = 'checked';
                break;
            case 'list':
                a[rt] = 'array';
                break;
        }
    }
    if (!('$defaultValue' in a) && 'defaultValue' in e) {
        a.$defaultValue = u;
    }
    if (!('$defaultValue' in a) && rt in a) {
        var H;
        switch (a[rt]) {
            case 'checked':
                var M = a.unchecked,
                    q = M === void 0 ? false : M;
                H = q;
                break;
            case 'array':
                H = [];
                break;
            case 'object':
                H = {};
                break;
            case 'number':
                H = 0;
                break;
        }
        a.$defaultValue = H;
    }
    return { fieldProps: a, childProps: _, renderProps: A };
}
function st(e, r) {
    var n = r.component,
        a = r.render,
        i = r.children;
    if (n) {
        return t.createElement(n, e);
    }
    if (re(a)) {
        return a(e);
    }
    if (re(i)) {
        return i(e);
    }
    return t.Children.map(i, function(r) {
        return t.cloneElement(r, e);
    });
}
var lt = (function(e) {
    W(n, e);
    var t = G(n);
    function n() {
        var e;
        A(this, n);
        for (var r = arguments.length, a = new Array(r), i = 0; i < r; i++) {
            a[i] = arguments[i];
        }
        e = t.call.apply(t, [this].concat(a));
        e.renderChildren = function(t) {
            var r = e.parsedProps,
                n = r.fieldProps,
                a = r.childProps,
                i = r.renderProps;
            return st(ot(t, n, a), i);
        };
        e.parsedProps = {};
        return e;
    }
    N(n, [
        {
            key: 'render',
            value: function e() {
                var t = (this.parsedProps = ut(this.props)),
                    n = t.fieldProps;
                return r.createElement(Le, Object.assign({}, n, { children: this.renderChildren }));
            }
        }
    ]);
    return n;
})(t.Component);
lt.displayName = at;
lt.defaultProps = it;
function ft(e) {
    var n = t.forwardRef(function(t, n) {
        return r.createElement(J.Consumer, null, function(a) {
            return r.createElement(e, Object.assign({}, t, { $formutil: a().$formutil, ref: n }));
        });
    });
    n.displayName = 'React.Formutil.connect.' + (e.displayName || e.name || 'Anonymous');
    return i(n, e);
}
function $t() {
    if (!r.useState) {
        throw new Error('Hooks api need react@>=16.8, Please upgrade your reactjs.');
    }
    var e = r.useContext;
    var t = e(J);
    return t();
}
function ct(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    if (!r.useState) {
        throw new Error('Hooks api need react@>=16.8, Please upgrade your reactjs.');
    }
    var n = r.useState,
        i = r.useLayoutEffect,
        o = r.useRef;
    var u;
    if (e) {
        if (typeof e === 'string') {
            u = e;
            t.name = u;
        } else {
            t = e;
            u = t.name;
        }
    }
    var s = $t();
    var l = o({}).current;
    var f = o([]);
    var c;
    l.$formContext = s;
    l.props = t;
    l.$setState = h;
    l.shouldRendered = true;
    var d = n(function() {
            l.$$FIELD_UUID = He();
            l.$fieldHandler = c = qe(l);
            l.$fieldHandler.$$reset();
            l.$fieldHandler.$validate();
        }),
        v = x(d, 2),
        p = v[1];
    if (!c) {
        c = (s.$$registers || {})[l.$fieldHandler.$name] || l.$fieldHandler;
    }
    i(
        function() {
            var e = l.$state;
            if (l.isMounting) {
                if (!(u in (s.$$registers || {}))) {
                    c.$$triggerChange({ $newValue: e.$value, $prevValue: l.$prevState.$value });
                }
            }
            l.$prevState = e;
        },
        [l.$state.$value]
    );
    i(function() {
        l.isMounting = true;
        a(
            !u || s.$formutil,
            "You should enusre that the useField() with the name '".concat(
                u,
                "' must be used underneath a <Form /> component or withForm() HOC, otherwise it's isolated."
            )
        );
        a(u, 'You should pass a name argument to useField(), otherwise it will be isolated!');
        return function() {
            l.isMounting = false;
            he(t.$ref, null);
        };
    }, []);
    i(
        function() {
            if (s.$$register) {
                s.$$register(u, l.$fieldHandler);
            }
            return function() {
                if (s.$$unregister) {
                    s.$$unregister(u, l.$fieldHandler, !l.isMounting && t.$reserveOnUnmount);
                }
            };
        },
        [u]
    );
    i(function() {
        he(t.$ref, l.$fieldutil);
    });
    i(function() {
        if (f.current.length > 0) {
            var e = C(f.current);
            f.current.length = 0;
            while (e.length) {
                e.pop()(l.$fieldutil);
            }
        }
    });
    function h(e, t) {
        return new Promise(function(r) {
            var n = function e() {
                return r(le(t, l.$fieldutil));
            };
            if (l.isMounting) {
                if (u in (s.$$registers || {})) {
                    l.shouldRendered = false;
                    s.$$onChange(u, e, n);
                    if (!l.shouldRendered) {
                        p({});
                    }
                } else {
                    c.$$merge(e);
                    c.$$detectChange(e);
                    p({});
                    f.current.push(n);
                }
            } else {
                c.$$merge(e);
                n();
            }
        });
    }
    return (l.$fieldutil = $({ $name: u }, c.$getState(), {}, c, { $$formutil: s.$formutil }));
}
function dt() {
    var e = $t(),
        t = e.$formutil;
    return t;
}
function vt(e) {
    e = $({}, it, {}, e, { children: null });
    var t = ut(e),
        r = t.fieldProps,
        n = t.childProps;
    var a = ct(r);
    return ot(a, r, n);
}
exports.EasyField = lt;
exports.Field = Le;
exports.Form = Se;
exports.connect = ft;
exports.formContext = J;
exports.useField = ct;
exports.useForm = dt;
exports.useHandler = vt;
exports.withField = Qe;
exports.withForm = De;
