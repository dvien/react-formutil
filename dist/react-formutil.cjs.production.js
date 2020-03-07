"use strict";Object.defineProperty(exports,"__esModule",{value:true});function e(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var t=e(require("@babel/runtime/helpers/esm/defineProperty"));var r=e(require("@babel/runtime/helpers/esm/objectSpread2"));var n=e(require("@babel/runtime/helpers/esm/toConsumableArray"));var a=e(require("@babel/runtime/helpers/esm/slicedToArray"));var i=e(require("@babel/runtime/helpers/esm/classCallCheck"));var u=e(require("@babel/runtime/helpers/esm/createClass"));var o=e(require("@babel/runtime/helpers/esm/possibleConstructorReturn"));var s=e(require("@babel/runtime/helpers/esm/getPrototypeOf"));var l=e(require("@babel/runtime/helpers/esm/assertThisInitialized"));var $=e(require("@babel/runtime/helpers/esm/inherits"));var f=require("react");var c=e(f);var d=e(require("prop-types"));var v=require("react-is");var p=e(require("warning"));var h=e(require("@babel/runtime/helpers/esm/objectWithoutProperties"));var m=e(require("hoist-non-react-statics"));var g=e(require("react-fast-compare"));var y=f.createContext(function(){return{}});var b=Object.getPrototypeOf({});var C=/\s*(?:\]\s*\.|\]\s*\[|\.|\[|\])\s*/g;var F=V(window)?global:window;function V(e){return typeof e==="undefined"}function w(e){return typeof e==="function"}function k(e){return V(e)||e===null||e+""===""}function P(e){return!!e&&w(e.then)}function E(e){return Object.prototype.toString.call(e)==="[object Object]"}function S(e){if(!E(e))return false;if(null===Object.getPrototypeOf(e))return true;if(!w(e.constructor))return false;return e.constructor.prototype===b}function O(e){return v.isValidElementType(e)&&typeof e!=="string"}function x(e,t,r){if(e[t]&&!O(e[t])){return new Error("Invalid prop 'component' supplied to '".concat(r,"': the prop is not a valid React component"))}}function j(e){if(Array.isArray(e)){var t=[];for(var r=0,n=e.length;r<n;r++){t[r]=j(e[r])}return t}else if(S(e)){var a={};for(var i in e){if(e.hasOwnProperty(i))a[i]=j(e[i])}return a}return e}var _=function e(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++){n[a-1]=arguments[a]}if(w(t)){t.apply(void 0,n)}return n[0]};function D(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}if(O(r[0])){return e.apply(void 0,r)}return function(t){return e(t,r[0])}}}var N=["minlength","maxlength","max","min","required","pattern","step"];function R(e){return N.indexOf(e.toLowerCase())>-1}var A=function e(t){try{var r=new Function("origin","global","return typeof ".concat(t," === 'number' || (typeof ").concat(t," !== 'undefined' && !(origin in global)) ? ").concat(t," : origin"));return r(t,F)}catch(e){return t}};function T(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}var n=t[0],a=t[1],i=t[2];p(typeof a==="string","The second parameter(".concat(JSON.stringify(a),") of parsePath() must be a string."));var u=(a.match(C)||[]).map(function(e){return e.replace(/\s/g,"")});var o=a.split(C).map(function(e){return e.trim()}).filter(function(e){return e!==""});var s=n;try{if(t.length<3){for(var l=0,$=o.length;l<$;l++){var f=A(o[l]);if(l+1===$){return s[f]}if(V(s[f])){break}s=s[f]}}else{for(var c=0,d=o.length;c<d;c++){var v=A(o[c]);var h=o[c+1];var m=u[c];if(V(h)){s[v]=i;break}switch(m){case"].":case".":s=V(s[v])?s[v]={}:s[v];break;case"][":case"[":var g=A(h);s=V(s[v])?s[v]=typeof g==="number"&&g>=0?[]:{}:s[v];break;default:s[v]=i;break}}}}catch(e){p(false,"The name '%s' of Field seems is not a legal expression.",a)}if(t.length>2){return n}}function U(e,t){var r=t.split(C).map(function(e){return e.trim()}).filter(function(e){return e!==""});for(var n=0,a=r.length;n<a;n++){var i=A(r[n]);if(!(i in e)){break}if(n+1===a){return{data:e[i]}}e=e[i]}}function q(e,t){if(e){if(w(e)){e(t)}else if("current"in e){e.current=t}}}var I=function e(t,r){for(var n=0,a=t.length;n<a;n++){if(r(t[n])===true){return t[n]}}};var H=function e(t,r){return Object.keys(t).reduce(function(e,n){e[n]=r(t[n],n,t);return e},{})};var M=function e(t,r){return Object.keys(t).forEach(function(e){return r(t[e],e,t)})};var L=function e(t,r){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return t.reduce(function(){r.apply(void 0,arguments);return arguments.length<=0?undefined:arguments[0]},n)};var B=undefined;function Y(e,t,r){M(e,function(t,r){if(t===B){delete e[r]}else if(S(t)||Array.isArray(t)){Y(t,r,e)}});if(r&&Object.keys(e).every(function(t){return e[t]===B})){r[t]=B;Y(r)}}var z=function e(t,r){if(!V(T(t,r))){T(t,r,B);Y(t)}};var Q="FORM_VALIDATE_RESULT";var G,K;if(typeof requestAnimationFrame==="function"){G=requestAnimationFrame;K=cancelAnimationFrame}else{G=setTimeout;K=clearTimeout}var W={render:d.func,component:x,children:function e(t){var r=d.oneOfType([d.func,d.node]);if(!t.render&&!t.component){r=r.isRequired}for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++){a[i-1]=arguments[i]}return r.apply(void 0,[t].concat(a))},$defaultValues:d.oneOfType([d.object,d.func]),$defaultStates:d.oneOfType([d.object,d.func]),$onFormChange:d.func,$validator:d.func,$processer:d.func,$ref:d.oneOfType([d.func,d.shape({current:d.any})])};var J=function(e){$(d,e);function d(e){var u;i(this,d);u=o(this,s(d).call(this,e));u.$$formPending=void 0;u.$$formValidatePromise=void 0;u.$$registers={};u.$$deepRegisters={};u.getFormContext=function(){return{$$registers:u.$$registers,$$register:u.$$register,$$unregister:u.$$unregister,$$onChange:u.$$onChange,$$getDefault:u.$$getDefault,$formutil:u.$formutil}};u.$$regDuplications={};u.$$duplicateTimer=void 0;u.$$checkDuplication=function(){var e=l(u),t=e.$$regDuplications;var r;M(t,function(e,n){var i=a(e,2),u=i[0],o=i[1];p(u.$$reserved,"The Field with a name '".concat(n,"' has been registered!"));o.$$reset(u.$getState());r=delete t[n]});if(r){u.$render()}};u.$$register=function(e,t,r){u.$$unregister(r,t);if(e){var n=u.$$getRegister(e);if(n){K(u.$$duplicateTimer);u.$$regDuplications[e]=[n,t];u.$$duplicateTimer=G(u.$$checkDuplication)}else{u.$$fieldChangedQueue.push({name:e,$newValue:t.$getState().$value});z(u.$$defaultValues,e)}u.$$registers[t.$name=e]=t;u.createDeepRegisters();u.$render()}};u.$$unregister=function(e,t,r){if(e){if(e in u.$$regDuplications){var n=a(u.$$regDuplications[e],2),i=n[0],o=n[1];u.$$fieldChangedQueue.push({name:e,$newValue:o.$getState().$value,$prevValue:i.$getState().$value});delete u.$$regDuplications[e]}else if(u.$$registers[e]===t){if(r){t.$$reserved=true}else{delete u.$$registers[e];u.$$fieldChangedQueue.push({name:e,$prevValue:t.$getState().$value});z(u.$$defaultValues,e)}}u.createDeepRegisters();u.$render()}};u.$$defaultInitialize=function(){var e=u.props,t=e.$defaultValues,r=e.$defaultStates;u.$$defaultValues=u.$$deepParseObject(j(w(t)?t(u.props)||{}:t));u.$$defaultStates=u.$$deepParseObject(j(w(r)?r(u.props)||{}:r))};u.$$getDefault=function(){return{$$defaultStates:u.$$defaultStates,$$defaultValues:u.$$defaultValues}};u.$$triggerChangeTimer=void 0;u.$$fieldChangedQueue=[];u.$$triggerFormChange=function(){if(u.$$fieldChangedQueue.length){var e=n(u.$$fieldChangedQueue);u.$$fieldChangedQueue.length=0;var t={};var r={};var a=u.$$registers;var i=false;e.forEach(function(e){if(!(e.name in a)){delete e.$newValue}if(e.$newValue!==e.$prevValue){if("$newValue"in e&&"$prevValue"in e){var n=u.$$getRegister(e.name);if(n){n.$$triggerChange(e)}}"$newValue"in e&&T(t,e.name,e.$newValue);"$prevValue"in e&&T(r,e.name,e.$prevValue);i=true}});if(i){if(w(u.props.$validator)){u.$$formValidate()}if(w(u.props.$onFormChange)){u.props.$onFormChange(u.$formutil,t,r)}}}};u.createDeepRegisters=function(){return u.$$deepRegisters=u.$$deepParseObject(u.$$registers)};u.$$getRegister=function(e){if(e){var t=u.$$registers[e]||T(u.$$deepRegisters,e);if(t){return t}}};u.$$formValidate=function(e){return u.$$formValidatePromise=new Promise(function(t){var r=u.props.$validator;var n;var a;var i;var o;var s=r(u.$formutil.$params,u.formtutil);var l=function r(n){return t(_(e,_(i,n)))};if(P(s)){if(!u.$$formPending){u.$$formPending=true;u.$render()}a=function e(t){return n=t(l)};o=s.then(function(){return void 0},function(e){return e}).then(function(e){if(n){return n}u.$shouldCancelPrevAsyncValidate=null;u.$$formPending=false;return u.$$setFormErrors(e,l)})}else{if(u.$$formPending){u.$$formPending=false}o=u.$$setFormErrors(s,l)}if(u.$shouldCancelPrevAsyncValidate){u.$shouldCancelPrevAsyncValidate(function(e){i=e;return o})}u.$shouldCancelPrevAsyncValidate=a})};u.$$setFormErrors=function(e,n){if(e&&(e instanceof Error||typeof e!=="object")){p(false,"The result of $validator in <Form /> should always return None(null,undefined) or an object contains error message of Field.");return u.$render(n)}return u.$$setStates(e||{},function(e,n){var a=n.$getState(),i=a.$error,u=i===void 0?{}:i;if(e){return{$error:r({},u,t({},Q,e))}}if(u[Q]){delete u[Q];return{$error:u}}return},n,true)};u.$getField=function(e){var t=u.$$getRegister(e);p(!e||t,"$getField('".concat(e,"') fail to find the matched Field. Maybe it has been unmounted."));p(e,"You should pass a name of the mounted Field to $getField().");if(t){return t.$new()}};u.$$onChange=function(e,r,n){return u.$setStates(t({},e,r),n)};u.$$setStates=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var t=arguments.length>1?arguments[1]:undefined;var r=arguments.length>2?arguments[2]:undefined;var n=arguments.length>3?arguments[3]:undefined;var a=u.$$deepParseObject(e);M(u.$$registers,function(e,r){var i;if(n||(i=U(a,r))){var o=t(i&&i.data,e);if(o){var s=u.$formutil.$weakParams[r];var l=e.$$merge(o),$=l.$value;e.$$detectChange(o);if("$value"in o||"$viewValue"in o){var f=I(u.$$fieldChangedQueue,function(e){return e.name===r});if(f){if(!("$prevValue"in f)){f.$prevValue=f.$newValue}f.$newValue=$}else{u.$$fieldChangedQueue.push({name:r,$newValue:$,$prevValue:s})}}}}});return u.$render(r)};u.$render=function(e){return new Promise(function(t){return u.forceUpdate(function(){return t(_(e,u.$formutil))})})};u.$validates=function(){var e;for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}if(w(r[r.length-1])){e=r.pop()}if(r.length){var a=function e(t){t.forEach(function(t){if(Array.isArray(t)){e(t)}else{var r=u.$getField(t);if(r){r.$validate()}}})};a(r)}else{M(u.$$registers,function(e){return e.$validate()});if(w(u.props.$validator)){u.$$formValidate()}}return u.$onValidates(e)};u.$onValidates=function(e){var t=Object.keys(u.$$registers).map(function(e){return u.$$registers[e].$onValidate()});t.push(u.$$formValidatePromise);return Promise.all(t).then(function(){return _(e,u.$formutil)})};u.$validate=function(e,t){var r=u.$getField(e);if(r){return r.$validate(t)}return _(t)};u.$reset=function(e,t){u.$$defaultInitialize();if(w(e)){t=e;e={}}return u.$$setStates(e,function(e,t){return t.$$reset(e)},t,true)};u.$setStates=function(e,t){return u.$$setStates(e,function(e){return e},t)};u.$setValues=function(e,t){u.$$deepParseObject(j(e),u.$$defaultValues);Y(u.$$defaultValues);return u.$$setStates(e,function(e){return{$value:e}},t)};u.$setFocuses=function(e,t){return u.$$setStates(e,function(e){return{$focused:e}},t)};u.$setDirts=function(e,t){return u.$$setStates(e,function(e){return{$dirty:e}},t)};u.$setTouches=function(e,t){return u.$$setStates(e,function(e){return{$touched:e}},t)};u.$setPendings=function(e,t){return u.$$setStates(e,function(e){return{$pending:e}},t)};u.$setErrors=function(e,t){return u.$$setStates(e,function(e){return{$error:e}},t)};u.$batchState=function(e,t){return u.$setStates(H(u.$$registers,function(){return e}),t)};u.$batchDirty=function(e,t){return u.$batchState({$dirty:e},t)};u.$batchTouched=function(e,t){return u.$batchState({$touched:e},t)};u.$batchFocused=function(e,t){return u.$batchState({$focused:e},t)};u.$batchPending=function(e,t){return u.$batchState({$pending:e},t)};u.$batchError=function(e,t){return u.$batchState({$error:e},t)};u.$$defaultInitialize();return u}u(d,[{key:"$$deepParseObject",value:function e(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};M(t,function(e,t){return T(r,t,e)});return r}},{key:"componentDidMount",value:function e(){q(this.props.$ref,this.$formutil)}},{key:"componentDidUpdate",value:function e(t){var r=this;q(this.props.$ref,this.$formutil);K(this.$$triggerChangeTimer);this.$$triggerChangeTimer=G(function(){r.$$triggerFormChange()})}},{key:"componentWillUnmount",value:function e(){q(this.props.$ref,null)}},{key:"_render",value:function e(){var t=this.$formutil;var r=this.props,n=r.children,a=r.render,i=r.component;if(i){return f.createElement(i,{$formutil:t})}if(w(a)){return a(t)}if(w(n)){return n(t)}return f.Children.map(n,function(e){return e&&O(e.type)?f.cloneElement(e,{$formutil:t}):e})}},{key:"render",value:function e(){var t=this;var n=this.props.$processer;var a=Object.keys(this.$$registers).map(function(e){return{path:e,$state:t.$$registers[e].$getState()}});var i=L(a,function(e,t){var r=t.path,a=t.$state;if(n){n(a,r)}if("$value"in a&&(a.$dirty||!V(a.$value))){e[r]=a.$value}});var u=L(a,function(e,t){var r=t.path,n=t.$state;return r in i&&T(e,r,i[r])});var o=a.some(function(e){var t=e.$state;return t.$invalid});var s=a.some(function(e){var t=e.$state;return t.$dirty});var l=a.some(function(e){var t=e.$state;return t.$touched});var $=a.some(function(e){var t=e.$state;return t.$focused});var f=this.$$formPending||a.some(function(e){var t=e.$state;return t.$pending});var d=this.$formutil={$$registers:r({},this.$$registers),$$deepRegisters:this.$$deepRegisters,$states:L(a,function(e,t){var r=t.path,n=t.$state;return T(e,r,n)}),$params:r({},this.$$defaultValues,{},u),$errors:L(a,function(e,t){var r=t.path,n=t.$state;if(n.$invalid){T(e,r,n.$error)}}),$dirts:L(a,function(e,t){var r=t.path,n=t.$state;return T(e,r,n.$dirty)}),$touches:L(a,function(e,t){var r=t.path,n=t.$state;return T(e,r,n.$touched)}),$focuses:L(a,function(e,t){var r=t.path,n=t.$state;return T(e,r,n.$focused)}),$pendings:L(a,function(e,t){var r=t.path,n=t.$state;return T(e,r,n.$pending)}),$weakStates:L(a,function(e,t){var r=t.path,n=t.$state;return e[r]=n}),$weakParams:i,$weakErrors:L(a,function(e,t){var r=t.path,n=t.$state;if(n.$invalid){e[r]=n.$error}}),$weakDirts:L(a,function(e,t){var r=t.path,n=t.$state;return e[r]=n.$dirty}),$weakTouches:L(a,function(e,t){var r=t.path,n=t.$state;return e[r]=n.$touched}),$weakFocuses:L(a,function(e,t){var r=t.path,n=t.$state;return e[r]=n.$focused}),$weakPendings:L(a,function(e,t){var r=t.path,n=t.$state;return e[r]=n.$pending}),$getFirstError:function e(t){if(t){var r=d.$getField(t);return r&&r.$getFirstError()}for(var n in d.$weakErrors){if(d.$weakErrors.hasOwnProperty(n)){var a=d.$weakErrors[n];for(var i in a){if(a.hasOwnProperty(i)){return a[i]instanceof Error?a[i].message:a[i]}}}}},$render:this.$render,$getField:this.$getField,$onValidates:this.$onValidates,$new:function e(){return t.$formutil},$setStates:this.$setStates,$setValues:this.$setValues,$setErrors:this.$setErrors,$setTouches:this.$setTouches,$setDirts:this.$setDirts,$setFocuses:this.$setFocuses,$batchState:this.$batchState,$batchTouched:this.$batchTouched,$batchDirty:this.$batchDirty,$batchFocused:this.$batchFocused,$reset:this.$reset,$validates:this.$validates,$validate:this.$validate,$valid:!o,$invalid:o,$dirty:s,$pristine:!s,$touched:l,$untouched:!l,$focused:$,$pending:f};return c.createElement(y.Provider,{value:this.getFormContext},this._render())}}]);return d}(f.Component);J.displayName="React.Formutil.Form";J.defaultProps={$defaultValues:{},$defaultStates:{}};var X=Object.keys(W);function Z(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var n=function(n){$(a,n);function a(){var t;var r;i(this,a);for(var n=arguments.length,u=new Array(n),l=0;l<n;l++){u[l]=arguments[l]}r=o(this,(t=s(a)).call.apply(t,[this].concat(u)));r.renderChildren=function(t){return c.createElement(e,Object.assign({},r.othersProps,{$formutil:t,ref:r.props.__forwardRef__}))};return r}u(a,[{key:"render",value:function e(){var n=Object.assign({},this.props);var a=this.props,i=a.component,u=h(a,["component"]);X.forEach(function(e){if(e in n){if(e==="$defaultStates"||e==="$defaultValues"){u[e]=r({},t[e],{},n[e])}delete n[e]}});this.othersProps=n;return c.createElement(J,Object.assign({},t,u,{render:this.renderChildren}))}}]);return a}(f.Component);n.displayName="React.Formutil.withForm."+(e.displayName||e.name||"Anonymous");var a=f.forwardRef(function(e,t){return c.createElement(n,Object.assign({__forwardRef__:t},e))});a.displayName="React.Formutil.withForm.ForwardRef."+(e.displayName||e.name||"Anonymous");return m(a,e)}var ee=D(Z);var te=0;var re={$valid:true,$invalid:false,$dirty:false,$pristine:true,$touched:false,$untouched:true,$focused:false,$pending:false,$error:{}};function ne(e){return e!==true}function ae(e,t,r){p(!V(e),"You should return a string or Error when the validation('".concat(r&&r+": ").concat(t,"') failed, otherwise return true."))}var ie=undefined;var ue="React.Formutil.Field";function oe(){return te++}function se(e,t){var r=t.children,n=t.render,a=t.component;if(a){return f.createElement(a,{$fieldutil:e})}if(w(n)){return n(e)}if(w(r)){return r(e)}return f.Children.map(r,function(t){return t&&O(t.type)?f.cloneElement(t,{$fieldutil:e}):t})}function le(e,t){var n={$$FIELD_UUID:e.$$FIELD_UUID,$$reset:s,$$merge:b,$$detectChange:i,$$triggerChange:u,$onValidate:o,$new:function t(){return e.$fieldutil},$picker:l,$getState:l,$getComponent:function e(){return t},$reset:function t(r,n){return e.$setState(s(r),n)},$getFirstError:y,$validate:$,$setState:e.$setState,$render:f,$setValue:c,$setTouched:d,$setDirty:v,$setFocused:p,$setValidity:m,$setError:h,$setPending:g};var a;function i(e){if("$value"in e||"$viewValue"in e){$()}}function u(t){var r=t.$newValue,n=t.$prevValue;var a=e.props.$onFieldChange;if(w(a)){a(r,n,e.$formContext.$formutil)}}function o(e){a.then(e);return a}function s(t){var n;var a=e.props,i=e.$formContext;if(i.$$getDefault){var u=a.name;var o=i.$$getDefault(),s=o.$$defaultStates,l=o.$$defaultValues;if(u&&l){var $=T(l,u);n=T(s,u)||{};if(!V($)){n.$value=$}}}var f=a.$defaultValue,c=a.$defaultState;return b(r({},re,{},w(c)?c(a):c,{$value:w(f)?f(a):"$defaultValue"in a?f:""},n,{},t))}function l(){return r({},e.$state)}function $(t){return a=new Promise(function(n){var a=e.props,i=e.$formContext;var u=r({},a.$validators,{},a.$asyncValidators);var o=e.$state,s=o.$value,l=o.$pending,$=Object.assign({},o.$error);var f=i.$formutil;var c={};var d=false;var v;var p;var y;var b;delete $[Q];var C=Object.keys(u).reduce(function(t,n){delete $[n];if(!d&&a[n]!=null){var i=u[n](s,a[n],r({},a,{$formutil:f,$fieldutil:e.$fieldutil,$validError:c}));if(P(i)){t.push(i["catch"](function(e){if(!v){m(n,e||n)}}))}else if(ne(i)){c[n]=i||n;ae(i,n,a.name);if(a.$validateLazy){d=true}}}return t},[]);var F=function e(r){return n(_(t,_(y,r)))};if(C.length){if(!l){g(true)}p=function e(t){return v=t(F)};C.push(h(r({},$,{},c)));b=Promise.all(C).then(function(){if(v){return v}e.$shouldCancelPrevAsyncValidate=null;return g(false,F)})}else{if(l){g(false)}b=h(r({},$,{},c),F)}if(e.$shouldCancelPrevAsyncValidate){e.$shouldCancelPrevAsyncValidate(function(e){y=e;return b})}e.$shouldCancelPrevAsyncValidate=p})}function f(t,r){return e.$setState({$viewValue:t,$dirty:true},r)}function c(t,r){return e.$setState({$value:t},r)}function d(t,r){return e.$setState({$touched:t},r)}function v(t,r){return e.$setState({$dirty:t},r)}function p(t,r){return e.$setState({$focused:t},r)}function h(t,r){return e.$setState({$error:t},r)}function m(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var n=arguments.length>2?arguments[2]:undefined;var a=Object.assign({},e.$state.$error);if(ne(r)){a[t]=r||t;ae(r,t,e.props.name)}else{delete a[t]}return h(a,n)}function g(t,r){return e.$setState({$pending:t},r)}function y(){var t=e.$state.$error,r=t===void 0?{}:t;for(var n in r){if(r.hasOwnProperty(n)){return r[n]instanceof Error?r[n].message:r[n]}}}function b(t){var n=Object.assign({},t);if("$error"in n){if(!n.$error){n.$error={}}n.$valid=Object.keys(n.$error).length===0}var a=e.props,i=a.$parser,u=a.$formatter;if("$viewValue"in n&&!("$value"in n)){var o=function e(t){return n.$viewValue=t};n.$value=i?i(n.$viewValue,o):n.$viewValue}else if("$value"in n&&!("$viewValue"in n)){var s=function e(t){return n.$value=t};n.$viewValue=u?u(n.$value,s):n.$value}if("$valid"in n){n.$invalid=!n.$valid}else if("$invalid"in n){n.$dirty=!n.$invalid}if("$dirty"in n){n.$pristine=!n.$dirty}else if("$pristine"in n){n.$dirty=!n.$pristine}if("$touched"in n){n.$untouched=!n.$touched}else if("$untouched"in n){n.$touched=!n.$untouched}e.$state=r({},e.$state,{},n);return l()}return n}var $e=function(e){$(t,e);function t(){var e;var r;i(this,t);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++){a[u]=arguments[u]}r=o(this,(e=s(t)).call.apply(e,[this].concat(a)));r.$$FIELD_UUID=oe();r.$formContext=void 0;r.$state=void 0;r.$setState=function(e,t){return new Promise(function(n){var a=function e(){return n(_(t,r.$fieldutil))};if(r.isMounting){var i=r.props.name;if(i in(r.$formContext.$$registers||{})){r.$formContext.$$onChange(i,e,a)}else{r.$registered.$$merge(e);r.$registered.$$detectChange(e);r.forceUpdate(a)}}else{r.$registered.$$merge(e);a()}})};return r}u(t,[{key:"componentDidMount",value:function e(){this.isMounting=true;var t=this.props.name,r=this.$formContext;p(!t||r.$formutil,"You should enusre that the <Field /> with the name '".concat(t,"' must be used underneath a <Form /> component or withForm() HOC, otherwise it's isolated."));p(t,"You should assign a name to <Field />, otherwise it will be isolated!");if(r.$$register){r.$$register(t,this.$fieldHandler)}this.$prevState=this.$state;q(this.props.$ref,this.$fieldutil)}},{key:"componentWillUnmount",value:function e(){if(this.$formContext.$$unregister){this.$formContext.$$unregister(this.props.name,this.$fieldHandler,this.props.$reserveOnUnmount)}this.isMounting=false;q(this.props.$ref,null)}},{key:"componentDidUpdate",value:function e(t){var r=this.props.name;if(r!==t.name){if(this.$formContext.$$register){this.$formContext.$$register(r,this.$fieldHandler,t.name)}}q(this.props.$ref,this.$fieldutil);if(this.$state.$value!==this.$prevState.$value){if(!(r in(this.$formContext.$$registers||{}))){this.$registered.$$triggerChange({$newValue:this.$state.$value,$prevValue:this.$prevState.$value})}}this.$prevState=this.$state}},{key:"shouldComponentUpdate",value:function e(t){if(this.props.$renderLazy){return!g(t,this.props)||!g(this.$registered.$getState(),this.$prevState)}return true}},{key:"_render",value:function e(){var t=this.$fieldutil=r({$name:this.props.name},this.$registered.$getState(),{},this.$registered,{$$formutil:this.$formContext.$formutil});return se(t,this.props)}},{key:"render",value:function e(){var t=this;return c.createElement(y.Consumer,null,function(e){var r=!t.$formContext;t.$formContext=e();if(!t.$fieldHandler){t.$fieldHandler=le(t,t)}t.$registered=(t.$formContext.$$registers||{})[t.$fieldHandler.$name]||t.$fieldHandler;if(r){t.$fieldHandler.$$reset();t.$fieldHandler.$validate()}return t._render()})}}]);return t}(f.Component);$e.displayName=ue;var fe=Object.keys(ie);function ce(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var n=function(n){$(a,n);function a(){var t;var r;i(this,a);for(var n=arguments.length,u=new Array(n),l=0;l<n;l++){u[l]=arguments[l]}r=o(this,(t=s(a)).call.apply(t,[this].concat(u)));r.renderChildren=function(t){return c.createElement(e,Object.assign({},r.othersProps,{$fieldutil:t,ref:r.props.__forwardRef__}))};return r}u(a,[{key:"render",value:function e(){var n=Object.assign({},this.props);var a=this.props,i=a.component,u=h(a,["component"]);fe.concat(Object.keys(r({},t.$validators,{},t.$asyncValidators,{},n.$validators,{},n.$asyncValidators))).forEach(function(e){if(e in n){if(e==="$validators"||e==="$asyncValidators"||e==="$defaultState"){u[e]=r({},t[e],{},n[e])}delete n[e]}});this.othersProps=n;return c.createElement($e,Object.assign({},t,u,{render:this.renderChildren}))}}]);return a}(f.Component);n.displayName="React.Formutil.withField."+(e.displayName||e.name||"Anonymous");var a=f.forwardRef(function(e,t){return c.createElement(n,Object.assign({__forwardRef__:t},e))});a.displayName="React.Formutil.withField.ForwardRef."+(e.displayName||e.name||"Anonymous");return m(a,e)}var de=D(ce);var ve=function(e){$(t,e);function t(){i(this,t);return o(this,s(t).apply(this,arguments))}u(t,[{key:"render",value:function e(){var t=this;var r=this.props,n=r.$fieldutil,a=r.value,i=r.onChange,u=r.onFocus,o=r.onBlur,s=r.checked,l=r.unchecked,$=h(r,["$fieldutil","value","onChange","onFocus","onBlur","checked","unchecked"]);var f=this.props.type;var d={value:"compositionValue"in this?this.compositionValue:a,onCompositionEnd:function e(r){t.composition=false;delete t.compositionValue;d.onChange(r)},onCompositionStart:function e(){return t.composition=true},onChange:function e(r){var n=r.target.value;if(t.composition){t.compositionValue=n;t.forceUpdate()}else{i(n,r)}},onFocus:u,onBlur:o};var v="input";switch(f){case"select":v=f;d.onChange=function(e){var t=e.target;var r=t.multiple?[].slice.call(t.options).filter(function(e){return e.selected}).map(function(e){return e.value}):t.value;i(r,e)};delete $.type;break;case"textarea":v=f;delete $.type;break;case"checkbox":case"radio":d={checked:a===s,onChange:function e(t){i(t.target.checked?s:l,t)},onFocus:u,onBlur:o};break}return c.createElement(v,Object.assign({},$,d))}}]);return t}(f.Component);ve.displayName="React.Formutil.EasyField.Native";ve.defaultProps={value:"",type:"text",checked:true,unchecked:false};var pe=f.createContext(function(){return{}}),he=pe.Provider,me=pe.Consumer;var ge=function(e){$(t,e);function t(){var e;var r;i(this,t);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++){a[u]=arguments[u]}r=o(this,(e=s(t)).call.apply(e,[this].concat(a)));r.getGroupContext=function(){return r.props};return r}u(t,[{key:"_render",value:function e(){var t=this.props,r=t.className,n=t.groupNode,a=t.children;var i={GroupOption:ye,Field:be};var u=w(a)?a(i):f.Children.map(a,function(e){return f.cloneElement(e,i)});if(n===null){return u}return c.createElement(n,{className:r},u)}},{key:"render",value:function e(){return c.createElement(he,{value:this.getGroupContext},this._render())}}]);return t}(f.Component);ge.displayName="React.Formutil.EasyField.Group";ge.defaultProps={type:"checkbox",groupNode:"div"};var ye=function(e){$(t,e);function t(){i(this,t);return o(this,s(t).apply(this,arguments))}u(t,[{key:"componentDidMount",value:function e(){p("$value"in this.props,"You should pass a $value to <GroupOption />.")}},{key:"render",value:function e(){var t=this.props,r=t.$value,n=t.onChange,a=t.onFocus,i=t.onBlur,u=h(t,["$value","onChange","onFocus","onBlur"]);return c.createElement(me,null,function(e){var t=e();var o=t.type,s=t.name;var l=o==="radio"?{checked:t.value===r,onChange:function e(a){t.onChange(r,a);n&&n(a)}}:o==="checkbox"?{checked:t.value.indexOf(r)>-1,onChange:function e(a){t.onChange(a.target.checked?t.value.concat(r):t.value.filter(function(e){return e!==r}),a);n&&n(a)}}:{value:t.value,onChange:function e(r){t.onChange(r);n&&n(r)}};return c.createElement("input",Object.assign({name:s},u,l,{type:o,onFocus:function e(r){t.onFocus(r);a&&a(r)},onBlur:function e(r){t.onBlur(r);i&&i(r)}}))})}}]);return t}(f.Component);ye.displayName="React.Formutil.EasyField.Group.Option";var be=function(e){$(t,e);function t(){i(this,t);return o(this,s(t).apply(this,arguments))}u(t,[{key:"componentDidMount",value:function e(){p(false,'The "Field" property in EasyField\'s children-props has been deprecated. Please use "GroupOption" instead.')}},{key:"render",value:function e(){return c.createElement(ye,this.props)}}]);return t}(f.Component);be.displayName="React.Formutil.EasyField.Group.Option.Deprecated";var Ce=c.Frament||"div";var Fe=function(e){$(t,e);function t(e){var r;i(this,t);r=o(this,s(t).call(this,e));r.id=0;r.latestValue=r.props.value;r.$formutil=void 0;r.FieldValidators={required:function e(t){return t!==null}};r.$onFormChange=function(e){e.$onValidates(function(e){var t=e.$invalid,n=e.$params;if(t){if(r.props.value.length){r.props.onChange(r.latestValue=[])}}else if(!g(r.props.value,n.list)){r.props.onChange(r.latestValue=n.list)}})};r.swap=function(e,t,n){return r.$setState(function(r){var n=r.items;var a=[n[e],n[t]];n[t]=a[0];n[e]=a[1];return n},n)};r.insert=function(){var e,t,n;for(var a=arguments.length,i=new Array(a),u=0;u<a;u++){i[u]=arguments[u]}i.forEach(function(r){if(w(r)){n=r}else if(typeof r==="number"){e=r}else if(typeof r==="object"){t=r}});return r.$setState(function(n){var a=n.items;if(V(e)){a.push(r.getId(t))}else{a.splice(e,0,r.getId(t))}return{items:a}},n)};r.remove=function(){var e,t;for(var n=arguments.length,a=new Array(n),i=0;i<n;i++){a[i]=arguments[i]}a.forEach(function(r){if(w(r)){t=r}else if(typeof r==="number"){e=r}});return r.$setState(function(t){var n=t.items;if(V(e)){n.pop()}else{n.splice(e,1)}if(!n.length){n=[r.getId()]}return{items:n}},t)};r.$setState=function(e,t){return new Promise(function(n){return r.setState(e,function(){return r.$formutil.$onValidates(function(e){return n(_(t,e))})})})};r.state={items:e.value.length?e.value.map(function(){return r.getId()}):[r.getId()],formKey:0};return r}u(t,[{key:"componentDidUpdate",value:function e(t){var r=this;if(this.props.value!==this.latestValue){this.setState({items:this.props.value.length?this.props.value.map(function(){return r.getId()}):[this.getId()],formKey:this.state.formKey+1});this.latestValue=this.props.value}}},{key:"getId",value:function e(t){return{id:this.id++,values:t}}},{key:"render",value:function e(){var t=this;var n=this.props,a=n.children,i=n.onFocus,u=n.onBlur,o=n.value;var s=this;if(!w(a)){return null}var l={$insert:this.insert,$remove:this.remove,$swap:this.swap,$push:function e(r,n){return t.insert(r,n)},$pop:function e(r){return t.remove(r)},$shift:function e(r){return t.remove(0,r)},$unshift:function e(r,n){return t.insert(0,r,n)},onFocus:i,onBlur:u};return c.createElement(J,{key:this.state.formKey,$defaultValues:{list:o},$onFormChange:this.$onFormChange,children:function e(n){t.$formutil=n;return c.createElement(Ce,null,t.state.items.map(function(e,i){var u=e.id,o=e.values;return c.createElement($e,{key:u,required:true,$defaultValue:o||null,$validators:t.FieldValidators,name:"list[".concat(i,"]"),children:function e(u){return c.createElement(J,{$defaultValues:u.$value||{},$onFormChange:function e(t){return t.$onValidates(function(e){var t=e.$invalid,r=e.$params;if(t){if(u.$viewValue!==null){u.$render(null)}}else if(!g(u.$viewValue,r)){u.$render(r)}})},children:function e(u){return a(r({get $length(){return s.state.items.length},$index:i,$isLast:function e(){return i===t.state.items.length-1},$isFirst:function e(){return i===0}},l,{},u),n)}})}})}))}})}}]);return t}(f.Component);Fe.displayName="React.Formutil.EasyField.List";var Ve="__TYPE__";var we=[["required",function(e,t,r){var n=r.__TYPE__,a=r.checked,i=a===void 0?true:a;return n==="checked"?e===i:!k(e)}],["maxLength",function(e,t){return k(e)||e.length<=t}],["minLength",function(e,t){return k(e)||e.length>=t}],["max",function(e,t){return k(e)||e*1<=t}],["min",function(e,t){return k(e)||e*1>=t}],["pattern",function(e,t){return k(e)||t.test(e)}],["enum",function(e,t){return k(e)||t.indexOf(e)>-1}],["checker",function(e,t,r){return t(e,r)}]].reduce(function(e,t){var r=a(t,2),n=r[0],i=r[1];e[n]=function e(t,r,a){var u=a.validMessage,o=u===void 0?{}:u;return i.apply(void 0,arguments)||o[n]||"Error input: ".concat(n)};return e},{});var ke="React.Formutil.EasyField";var Pe={validMessage:{},valuePropName:"value",changePropName:"onChange",focusPropName:"onFocus",blurPropName:"onBlur",$parser:function e(t){return typeof t==="string"?t.trim():t}};function Ee(e,n,a){var i;var u=n.valuePropName,o=n.changePropName,s=n.focusPropName,l=n.blurPropName,$=n.getValueFromEvent,f=n.passUtil;var c=function e(t){return t&&t.target?t.target[u]:t};var d=r({},a,(i={},t(i,u,e.$viewValue),t(i,o,function(t){var r;for(var a=arguments.length,i=new Array(a>1?a-1:0),u=1;u<a;u++){i[u-1]=arguments[u]}if(((r=i[0])===null||r===void 0?void 0:r.nativeEvent)instanceof Event){i.push(t)}else{i.unshift(t)}var s=n[o];s&&s.apply(void 0,i);var l=$?$.apply(void 0,i):c(t);e.$render(l)}),t(i,s,function(){var t=n[s];t&&t.apply(void 0,arguments);e.$setFocused(true)}),t(i,l,function(){var t=n[l];t&&t.apply(void 0,arguments);if(e.$untouched){e.$setTouched(true)}e.$setFocused(false)}),i));if(f){d[f===true?"$fieldutil":String(f)]=e}return d}function Se(e){var t=e.children,n=e.component,i=e.render,u=h(e,["children","component","render"]);var o=u.name,s=u.type,l=u.defaultValue,$=u.valuePropName,f=u.changePropName,c=u.focusPropName,d=u.blurPropName,v=u.getValueFromEvent,p=u.validMessage,m=u.checked,g=u.unchecked,y=u.__TYPE__,b=u.passUtil,C=u.$defaultValue,F=u.$defaultState,w=u.$onFieldChange,k=u.$validators,P=u.$asyncValidators,E=u.$validateLazy,S=u.$renderLazy,O=u.$reserveOnUnmount,x=u.$parser,j=u.$formatter,_=u.$ref,D=h(u,["name","type","defaultValue","valuePropName","changePropName","focusPropName","blurPropName","getValueFromEvent","validMessage","checked","unchecked","__TYPE__","passUtil","$defaultValue","$defaultState","$onFieldChange","$validators","$asyncValidators","$validateLazy","$renderLazy","$reserveOnUnmount","$parser","$formatter","$ref"]);var N={children:t,component:n,render:i};var A=!V(s)||V(t)&&V(n)&&V(i);Object.keys(r({},u.$validators=r({},we,{},u.$validators),{},u.$asyncValidators)).forEach(function(e){if(e in D){if(!A||!R(e)){delete D[e]}}});if(A){var T=(s||"").split("."),U=a(T,2),q=U[0],I=q===void 0?"text":q,H=U[1];N.component=I==="group"?ge:I==="list"?Fe:ve;if(o){D.name=o}if(s){D.type=I}if(t){D.children=t}D.checked=m;D.unchecked=g;switch(I){case"select":case"textarea":if(e.multiple){u[Ve]="array"}break;case"group":if(H==="checkbox"){u[Ve]="array"}D.type=H;break;case"checkbox":case"radio":u[Ve]="checked";break;case"list":u[Ve]="array";break}}if(!("$defaultValue"in u)&&"defaultValue"in e){u.$defaultValue=l}if(!("$defaultValue"in u)&&Ve in u){var M;switch(u[Ve]){case"checked":var L=u.unchecked,B=L===void 0?false:L;M=B;break;case"array":M=[];break;case"object":M={};break;case"number":M=0;break}u.$defaultValue=M}return{fieldProps:u,childProps:D,renderProps:N}}function Oe(e,t){var r=t.component,n=t.render,a=t.children;if(r){return f.createElement(r,e)}if(w(n)){return n(e)}if(w(a)){return a(e)}return f.Children.map(a,function(t){return f.cloneElement(t,e)})}var xe=function(e){$(t,e);function t(){var e;var r;i(this,t);for(var n=arguments.length,a=new Array(n),u=0;u<n;u++){a[u]=arguments[u]}r=o(this,(e=s(t)).call.apply(e,[this].concat(a)));r.renderChildren=function(e){var t=r.parsedProps,n=t.fieldProps,a=t.childProps,i=t.renderProps;return Oe(Ee(e,n,a),i)};r.parsedProps={};return r}u(t,[{key:"render",value:function e(){var t=this.parsedProps=Se(this.props),r=t.fieldProps;return c.createElement($e,Object.assign({},r,{children:this.renderChildren}))}}]);return t}(f.Component);xe.displayName=ke;xe.defaultProps=Pe;function je(e){var t=f.forwardRef(function(t,r){return c.createElement(y.Consumer,null,function(n){return c.createElement(e,Object.assign({},t,{$formutil:n().$formutil,ref:r}))})});t.displayName="React.Formutil.connect."+(e.displayName||e.name||"Anonymous");return m(t,e)}function _e(){if(!c.useState){throw new Error("Hooks api need react@>=16.8, Please upgrade your reactjs.")}var e=c.useContext;var t=e(y);return t()}function De(e){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(!c.useState){throw new Error("Hooks api need react@>=16.8, Please upgrade your reactjs.")}var i=c.useState,u=c.useLayoutEffect,o=c.useRef;var s;if(e){if(typeof e==="string"){s=e;t.name=s}else{t=e;s=t.name}}var l=_e();var $=o({}).current;var f=o([]);var d;$.$formContext=l;$.props=t;$.$setState=g;var v=i(function(){$.$$FIELD_UUID=oe();$.$fieldHandler=d=le($);var e=$.$fieldHandler.$$reset();$.$fieldHandler.$validate();return e}),h=a(v,2),m=h[1];if(!d){d=(l.$$registers||{})[$.$fieldHandler.$name]||$.$fieldHandler}u(function(){var e=$.$state;if($.isMounting){if(!(s in(l.$$registers||{}))){d.$$triggerChange({$newValue:e.$value,$prevValue:$.$prevState.$value})}}$.$prevState=e},[$.$state.$value]);u(function(){$.isMounting=true;p(!s||l.$formutil,"You should enusre that the useField() with the name '".concat(s,"' must be used underneath a <Form /> component or withForm() HOC, otherwise it's isolated."));p(s,"You should pass a name argument to useField(), otherwise it will be isolated!");return function(){$.isMounting=false;q(t.$ref,null)}},[]);u(function(){if(l.$$register){l.$$register(s,$.$fieldHandler)}return function(){if(l.$$unregister){l.$$unregister(s,$.$fieldHandler,!$.isMounting&&t.$reserveOnUnmount)}}},[s]);u(function(){q(t.$ref,$.$fieldutil)});u(function(){if(f.current.length>0){var e=n(f.current);f.current.length=0;while(e.length){e.pop()($.$fieldutil)}}});function g(e,t){return new Promise(function(r){var n=function e(){return r(_(t,$.$fieldutil))};if($.isMounting){if(s in(l.$$registers||{})){l.$$onChange(s,e,n)}else{m(d.$$merge(e));d.$$detectChange(e);f.current.push(n)}}else{d.$$merge(e);n()}})}return $.$fieldutil=r({$name:s},d.$getState(),{},d,{$$formutil:l.$formutil})}function Ne(){var e=_e(),t=e.$formutil;return t}function Re(e){e=r({},Pe,{},e,{children:null});var t=Se(e),n=t.fieldProps,a=t.childProps;var i=De(n);return Ee(i,n,a)}exports.EasyField=xe;exports.Field=$e;exports.Form=J;exports.connect=je;exports.formContext=y;exports.useField=De;exports.useForm=Ne;exports.useHandler=Re;exports.withField=de;exports.withForm=ee;
