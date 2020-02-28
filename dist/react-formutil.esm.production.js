import e,{createContext as t,createElement as r,Children as n,cloneElement as i,Component as a,forwardRef as u}from"react";import{isValidElementType as o}from"react-is";import s from"warning";import l from"hoist-non-react-statics";import $ from"react-fast-compare";function f(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function d(e,t,r){if(t)c(e.prototype,t);if(r)c(e,r);return e}function v(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(t)n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable});r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};if(t%2){h(r,true).forEach(function(t){v(e,t,r[t])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(r))}else{h(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}}return e}function m(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}});if(t)y(e,t)}function g(e){g=Object.setPrototypeOf?Object.getPrototypeOf:function e(t){return t.__proto__||Object.getPrototypeOf(t)};return g(e)}function y(e,t){y=Object.setPrototypeOf||function e(t,r){t.__proto__=r;return t};return y(e,t)}function b(e,t){if(e==null)return{};var r={};var n=Object.keys(e);var i,a;for(a=0;a<n.length;a++){i=n[a];if(t.indexOf(i)>=0)continue;r[i]=e[i]}return r}function V(e,t){if(e==null)return{};var r=b(e,t);var n,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++){n=a[i];if(t.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;r[n]=e[n]}}return r}function w(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function F(e,t){if(t&&(typeof t==="object"||typeof t==="function")){return t}return w(e)}function k(e,t){return O(e)||E(e,t)||D()}function C(e){return P(e)||S(e)||j()}function P(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}function O(e){if(Array.isArray(e))return e}function S(e){if(Symbol.iterator in Object(e)||Object.prototype.toString.call(e)==="[object Arguments]")return Array.from(e)}function E(e,t){var r=[];var n=true;var i=false;var a=undefined;try{for(var u=e[Symbol.iterator](),o;!(n=(o=u.next()).done);n=true){r.push(o.value);if(t&&r.length===t)break}}catch(e){i=true;a=e}finally{try{if(!n&&u["return"]!=null)u["return"]()}finally{if(i)throw a}}return r}function j(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function D(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var x=t({});var A=Object.getPrototypeOf({});var N=/\s*(?:\]\s*\.|\]\s*\[|\.|\[|\])\s*/g;var _=T(window)?global:window;function T(e){return typeof e==="undefined"}function R(e){return typeof e==="function"}function U(e){return T(e)||e===null||e+""===""}function I(e){return!!e&&R(e.then)}function H(e){return Object.prototype.toString.call(e)==="[object Object]"}function M(e){if(!H(e))return false;if(null===Object.getPrototypeOf(e))return true;if(!R(e.constructor))return false;return e.constructor.prototype===A}function L(e){return o(e)&&typeof e!=="string"}function B(e){if(Array.isArray(e)){var t=[];for(var r=0,n=e.length;r<n;r++){t[r]=B(e[r])}return t}else if(M(e)){var i={};for(var a in e){i[a]=B(e[a])}return i}return e}var Y=function e(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++){n[i-1]=arguments[i]}if(R(t)){t.apply(void 0,n)}return n[0]};function Q(e){return function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++){r[n]=arguments[n]}if(L(r[0])){return e.apply(void 0,r)}return function(t){return e(t,r[0])}}}var G=["minlength","maxlength","max","min","required","pattern","step"];function z(e){return G.indexOf(e.toLowerCase())>-1}var q=function e(t){try{var r=new Function("origin","global","return typeof ".concat(t," === 'number' || (typeof ").concat(t," !== 'undefined' && !(origin in global)) ? ").concat(t," : origin"));return r(t,_)}catch(e){return t}};function K(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++){t[r]=arguments[r]}var n=t[0],i=t[1],a=t[2];s(typeof i==="string","The second parameter(".concat(JSON.stringify(i),") of parsePath() must be a string."));var u=(i.match(N)||[]).map(function(e){return e.replace(/\s/g,"")});var o=i.split(N).map(function(e){return e.trim()}).filter(function(e){return e!==""});var l=n;try{if(t.length<3){for(var $=0,f=o.length;$<f;$++){var c=q(o[$]);if($+1===f){return l[c]}if(T(l[c])){break}l=l[c]}}else{for(var d=0,v=o.length;d<v;d++){var h=q(o[d]);var p=o[d+1];var m=u[d];if(T(p)){l[h]=a;break}switch(m){case"].":case".":l=T(l[h])?l[h]={}:l[h];break;case"][":case"[":var g=q(p);l=T(l[h])?l[h]=typeof g==="number"&&g>=0?[]:{}:l[h];break;default:l[h]=a;break}}}}catch(e){s(false,"The name '%s' of Field seems is not a legal expression.",i)}if(t.length>2){return n}}function W(e,t){var r=t.split(N).map(function(e){return e.trim()}).filter(function(e){return e!==""});for(var n=0,i=r.length;n<i;n++){var a=q(r[n]);if(!(a in e)){break}if(n+1===i){return{data:e[a]}}e=e[a]}}function J(e,t){if(e){if(R(e)){e(t)}else if("current"in e){e.current=t}}}var X=function e(t,r){for(var n=0,i=t.length;n<i;n++){if(r(t[n])===true){return t[n]}}};var Z=function e(t,r){return Object.keys(t).reduce(function(e,n){e[n]=r(t[n],n,t);return e},{})};var ee=function e(t,r){return Object.keys(t).forEach(function(e){return r(t[e],e,t)})};var te=function e(t,r){var n=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};return t.reduce(function(){r.apply(void 0,arguments);return arguments.length<=0?undefined:arguments[0]},n)};var re=undefined;function ne(e,t,r){ee(e,function(t,r){if(t===re){delete e[r]}else if(M(t)||Array.isArray(t)){ne(t,r,e)}});if(r&&Object.keys(e).every(function(t){return e[t]===re})){r[t]=re;ne(r)}}var ie=function e(t,r){if(!T(K(t,r))){K(t,r,re);ne(t)}};var ae="FORM_VALIDATE_RESULT";var ue,oe;if(typeof requestAnimationFrame==="function"){ue=requestAnimationFrame;oe=cancelAnimationFrame}else{ue=setTimeout;oe=clearTimeout}var se=function(t){m(a,t);function a(e){var t;f(this,a);t=F(this,g(a).call(this,e));t.$$formPending=void 0;t.$$formValidatePromise=void 0;t.$$registers={};t.$$deepRegisters={};t.$$regDuplications={};t.$$duplicateTimer=void 0;t.$$checkDuplication=function(){var e=w(t),r=e.$$regDuplications;var n;ee(r,function(e,t){var i=k(e,2),a=i[0],u=i[1];s(a.$$reserved,"The Field with a name '".concat(t,"' has been registered!"));u.$$reset(a.$getState());n=delete r[t]});if(n){t.$render()}};t.$$register=function(e,r,n){t.$$unregister(n,r);if(e){var i=t.$$getRegister(e);if(i){oe(t.$$duplicateTimer);t.$$regDuplications[e]=[i,r];t.$$duplicateTimer=ue(t.$$checkDuplication)}else{t.$$fieldChangedQueue.push({name:e,$newValue:r.$getState().$value});ie(t.$$defaultValues,e)}t.$$registers[r.$name=e]=r;t.createDeepRegisters();t.$render()}};t.$$unregister=function(e,r,n){if(e){if(e in t.$$regDuplications){var i=k(t.$$regDuplications[e],2),a=i[0],u=i[1];t.$$fieldChangedQueue.push({name:e,$newValue:u.$getState().$value,$prevValue:a.$getState().$value});delete t.$$regDuplications[e]}else if(t.$$registers[e]===r){if(n){r.$$reserved=true}else{delete t.$$registers[e];t.$$fieldChangedQueue.push({name:e,$prevValue:r.$getState().$value});ie(t.$$defaultValues,e)}}t.createDeepRegisters();t.$render()}};t.$$defaultInitialize=function(){var e=t.props,r=e.$defaultValues,n=e.$defaultStates;t.$$defaultValues=t.$$deepParseObject(B(R(r)?r(t.props)||{}:r));t.$$defaultStates=t.$$deepParseObject(B(R(n)?n(t.props)||{}:n))};t.$$getDefault=function(){return{$$defaultStates:t.$$defaultStates,$$defaultValues:t.$$defaultValues}};t.$$triggerChangeTimer=void 0;t.$$fieldChangedQueue=[];t.$$triggerFormChange=function(){if(t.$$fieldChangedQueue.length){var e=C(t.$$fieldChangedQueue);t.$$fieldChangedQueue.length=0;var r={};var n={};var i=t.$$registers;var a=false;e.forEach(function(e){if(!(e.name in i)){delete e.$newValue}if(e.$newValue!==e.$prevValue){if("$newValue"in e&&"$prevValue"in e){var u=t.$$getRegister(e.name);if(u){u.$$triggerChange(e)}}"$newValue"in e&&K(r,e.name,e.$newValue);"$prevValue"in e&&K(n,e.name,e.$prevValue);a=true}});if(a){if(R(t.props.$validator)){t.$$formValidate()}if(R(t.props.$onFormChange)){t.props.$onFormChange(t.$formutil,r,n)}}}};t.createDeepRegisters=function(){return t.$$deepRegisters=t.$$deepParseObject(t.$$registers)};t.$$getRegister=function(e){if(e){var r=t.$$registers[e]||K(t.$$deepRegisters,e);if(r){return r}}};t.$$formValidate=function(e){return t.$$formValidatePromise=new Promise(function(r){var n=t.props.$validator;var i;var a;var u;var o;var s=n(t.$formutil.$params,t.formtutil);var l=function t(n){return r(Y(e,Y(u,n)))};if(I(s)){if(!t.$$formPending){t.$$formPending=true;t.$render()}a=function e(t){return i=t(l)};o=s.then(function(){return void 0},function(e){return e}).then(function(e){if(i){return i}t.$shouldCancelPrevAsyncValidate=null;t.$$formPending=false;return t.$$setFormErrors(e,l)})}else{if(t.$$formPending){t.$$formPending=false}o=t.$$setFormErrors(s,l)}if(t.$shouldCancelPrevAsyncValidate){t.$shouldCancelPrevAsyncValidate(function(e){u=e;return o})}t.$shouldCancelPrevAsyncValidate=a})};t.$$setFormErrors=function(e,r){if(e&&(e instanceof Error||typeof e!=="object")){s(false,"The result of $validator in <Form /> should always return None(null,undefined) or an object contains error message of Field.");return t.$render(r)}return t.$$setStates(e||{},function(e,t){var r=t.$getState(),n=r.$error,i=n===void 0?{}:n;if(e){return{$error:p({},i,v({},ae,e))}}if(i[ae]){delete i[ae];return{$error:i}}return},r,true)};t.$getField=function(e){var r=t.$$getRegister(e);s(!e||r,"$getField('".concat(e,"') fail to find the matched Field. Maybe it has been unmounted."));s(e,"You should pass a name of the mounted Field to $getField().");if(r){return r.$new()}};t.$$onChange=function(e,r,n){return t.$setStates(v({},e,r),n)};t.$$setStates=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};var r=arguments.length>1?arguments[1]:undefined;var n=arguments.length>2?arguments[2]:undefined;var i=arguments.length>3?arguments[3]:undefined;var a=t.$$deepParseObject(e);ee(t.$$registers,function(e,n){var u;if(i||(u=W(a,n))){var o=r(u&&u.data,e);if(o){var s=t.$formutil.$weakParams[n];var l=e.$$merge(o),$=l.$value;e.$$detectChange(o);if("$value"in o||"$viewValue"in o){var f=X(t.$$fieldChangedQueue,function(e){return e.name===n});if(f){if(!("$prevValue"in f)){f.$prevValue=f.$newValue}f.$newValue=$}else{t.$$fieldChangedQueue.push({name:n,$newValue:$,$prevValue:s})}}}}});return t.$render(n)};t.$render=function(e){return new Promise(function(r){return t.forceUpdate(function(){return r(Y(e,t.$formutil))})})};t.$validates=function(){var e;for(var r=arguments.length,n=new Array(r),i=0;i<r;i++){n[i]=arguments[i]}if(R(n[n.length-1])){e=n.pop()}if(n.length){var a=function e(r){r.forEach(function(r){if(Array.isArray(r)){e(r)}else{var n=t.$getField(r);if(n){n.$validate()}}})};a(n)}else{ee(t.$$registers,function(e){return e.$validate()});if(R(t.props.$validator)){t.$$formValidate()}}return t.$onValidates(e)};t.$onValidates=function(e){var r=Object.keys(t.$$registers).map(function(e){return t.$$registers[e].$onValidate()});r.push(t.$$formValidatePromise);return Promise.all(r).then(function(){return Y(e,t.$formutil)})};t.$validate=function(e,r){var n=t.$getField(e);if(n){return n.$validate(r)}return Y(r)};t.$reset=function(e,r){t.$$defaultInitialize();if(R(e)){r=e;e={}}return t.$$setStates(e,function(e,t){return t.$$reset(e)},r,true)};t.$setStates=function(e,r){return t.$$setStates(e,function(e){return e},r)};t.$setValues=function(e,r){t.$$deepParseObject(B(e),t.$$defaultValues);ne(t.$$defaultValues);return t.$$setStates(e,function(e){return{$value:e}},r)};t.$setFocuses=function(e,r){return t.$$setStates(e,function(e){return{$focused:e}},r)};t.$setDirts=function(e,r){return t.$$setStates(e,function(e){return{$dirty:e}},r)};t.$setTouches=function(e,r){return t.$$setStates(e,function(e){return{$touched:e}},r)};t.$setPendings=function(e,r){return t.$$setStates(e,function(e){return{$pending:e}},r)};t.$setErrors=function(e,r){return t.$$setStates(e,function(e){return{$error:e}},r)};t.$batchState=function(e,r){return t.$setStates(Z(t.$$registers,function(){return e}),r)};t.$batchDirty=function(e,r){return t.$batchState({$dirty:e},r)};t.$batchTouched=function(e,r){return t.$batchState({$touched:e},r)};t.$batchFocused=function(e,r){return t.$batchState({$focused:e},r)};t.$batchPending=function(e,r){return t.$batchState({$pending:e},r)};t.$batchError=function(e,r){return t.$batchState({$error:e},r)};t.$$defaultInitialize();return t}d(a,[{key:"getFormContext",value:function e(){return{$$registers:this.$$registers,$$register:this.$$register,$$unregister:this.$$unregister,$$onChange:this.$$onChange,$$getDefault:this.$$getDefault,$formutil:this.$formutil}}},{key:"$$deepParseObject",value:function e(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};ee(t,function(e,t){return K(r,t,e)});return r}},{key:"componentDidMount",value:function e(){J(this.props.$ref,this.$formutil)}},{key:"componentDidUpdate",value:function e(t){var r=this;J(this.props.$ref,this.$formutil);oe(this.$$triggerChangeTimer);this.$$triggerChangeTimer=ue(function(){r.$$triggerFormChange()})}},{key:"componentWillUnmount",value:function e(){J(this.props.$ref,null)}},{key:"_render",value:function e(){var t=this.$formutil;var a=this.props,u=a.children,o=a.render,s=a.component;if(s){return r(s,{$formutil:t})}if(R(o)){return o(t)}if(R(u)){return u(t)}return n.map(u,function(e){return e&&L(e.type)?i(e,{$formutil:t}):e})}},{key:"render",value:function t(){var r=this;var n=this.props.$processer;var i=Object.keys(this.$$registers).map(function(e){return{path:e,$state:r.$$registers[e].$getState()}});var a=te(i,function(e,t){var r=t.path,i=t.$state;if(n){n(i,r)}if("$value"in i&&(i.$dirty||!T(i.$value))){e[r]=i.$value}});var u=te(i,function(e,t){var r=t.path,n=t.$state;return r in a&&K(e,r,a[r])});var o=i.some(function(e){var t=e.$state;return t.$invalid});var s=i.some(function(e){var t=e.$state;return t.$dirty});var l=i.some(function(e){var t=e.$state;return t.$touched});var $=i.some(function(e){var t=e.$state;return t.$focused});var f=this.$$formPending||i.some(function(e){var t=e.$state;return t.$pending});var c=this.$formutil={$$registers:p({},this.$$registers),$$deepRegisters:this.$$deepRegisters,$states:te(i,function(e,t){var r=t.path,n=t.$state;return K(e,r,n)}),$params:p({},this.$$defaultValues,{},u),$errors:te(i,function(e,t){var r=t.path,n=t.$state;if(n.$invalid){K(e,r,n.$error)}}),$dirts:te(i,function(e,t){var r=t.path,n=t.$state;return K(e,r,n.$dirty)}),$touches:te(i,function(e,t){var r=t.path,n=t.$state;return K(e,r,n.$touched)}),$focuses:te(i,function(e,t){var r=t.path,n=t.$state;return K(e,r,n.$focused)}),$pendings:te(i,function(e,t){var r=t.path,n=t.$state;return K(e,r,n.$pending)}),$weakStates:te(i,function(e,t){var r=t.path,n=t.$state;return e[r]=n}),$weakParams:a,$weakErrors:te(i,function(e,t){var r=t.path,n=t.$state;if(n.$invalid){e[r]=n.$error}}),$weakDirts:te(i,function(e,t){var r=t.path,n=t.$state;return e[r]=n.$dirty}),$weakTouches:te(i,function(e,t){var r=t.path,n=t.$state;return e[r]=n.$touched}),$weakFocuses:te(i,function(e,t){var r=t.path,n=t.$state;return e[r]=n.$focused}),$weakPendings:te(i,function(e,t){var r=t.path,n=t.$state;return e[r]=n.$pending}),$getFirstError:function e(t){if(t){var r=c.$getField(t);return r&&r.$getFirstError()}for(var n in c.$weakErrors){var i=c.$weakErrors[n];for(var a in i){return i[a]instanceof Error?i[a].message:i[a]}}},$render:this.$render,$getField:this.$getField,$onValidates:this.$onValidates,$new:function e(){return r.$formutil},$setStates:this.$setStates,$setValues:this.$setValues,$setErrors:this.$setErrors,$setTouches:this.$setTouches,$setDirts:this.$setDirts,$setFocuses:this.$setFocuses,$batchState:this.$batchState,$batchTouched:this.$batchTouched,$batchDirty:this.$batchDirty,$batchFocused:this.$batchFocused,$reset:this.$reset,$validates:this.$validates,$validate:this.$validate,$valid:!o,$invalid:o,$dirty:s,$pristine:!s,$touched:l,$untouched:!l,$focused:$,$pending:f};return e.createElement(x.Provider,{value:this.getFormContext()},this._render())}}]);return a}(a);se.displayName="React.Formutil.Form";se.defaultProps={$defaultValues:{},$defaultStates:{}};function le(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var n=u(function(n,i){var a=Object.assign({},n);var u=n.component,o=V(n,["component"]);["$defaultStates","$defaultValues","$onFormChange","$validator","$processer","$ref"].forEach(function(e){if(e in a){if(e==="$defaultStates"||e==="$defaultValues"){o[e]=p({},r[e],{},a[e])}delete a[e]}});return e.createElement(se,Object.assign({},r,o,{render:function r(n){return e.createElement(t,Object.assign({},a,{$formutil:n,ref:i}))}}))});n.displayName="React.Formutil.withForm."+(t.displayName||t.name||"Anonymous");return l(n,t)}var $e=Q(le);var fe=0;var ce={$valid:true,$invalid:false,$dirty:false,$pristine:true,$touched:false,$untouched:true,$focused:false,$pending:false,$error:{}};function de(e){return e!==true}function ve(e,t,r){s(!T(e),"You should return a string or Error when the validation('".concat(r&&r+": ").concat(t,"') failed, otherwise return true."))}var he="React.Formutil.Field";function pe(){return fe++}function me(e,t){var a=t.children,u=t.render,o=t.component;if(o){return r(o,{$fieldutil:e})}if(R(u)){return u(e)}if(R(a)){return a(e)}return n.map(a,function(t){return t&&L(t.type)?i(t,{$fieldutil:e}):t})}function ge(e,t){var r={$$FIELD_UUID:e.$$FIELD_UUID,$$reset:o,$$merge:b,$$detectChange:i,$$triggerChange:a,$onValidate:u,$new:function t(){return e.$fieldutil},$picker:s,$getState:s,$getComponent:function e(){return t},$reset:function t(r,n){return e.$setState(o(r),n)},$getFirstError:y,$validate:l,$setState:e.$setState,$render:$,$setValue:f,$setTouched:c,$setDirty:d,$setFocused:v,$setValidity:m,$setError:h,$setPending:g};var n;function i(e){if("$value"in e||"$viewValue"in e){l()}}function a(t){var r=t.$newValue,n=t.$prevValue;var i=e.props.$onFieldChange;if(R(i)){i(r,n,e.$formContext.$formutil)}}function u(e){n.then(e);return n}function o(t){var r;var n=e.props,i=e.$formContext;if(i.$$getDefault){var a=n.name;var u=i.$$getDefault(),o=u.$$defaultStates,s=u.$$defaultValues;if(a&&s){var l=K(s,a);r=K(o,a)||{};if(!T(l)){r.$value=l}}}var $=n.$defaultValue,f=n.$defaultState;return b(p({},ce,{},R(f)?f(n):f,{$value:R($)?$(n):"$defaultValue"in n?$:""},r,{},t))}function s(){return p({},e.$state)}function l(t){return n=new Promise(function(r){var n=e.props,i=e.$formContext;var a=p({},n.$validators,{},n.$asyncValidators);var u=e.$state,o=u.$value,s=u.$pending,l=Object.assign({},u.$error);var $=i.$formutil;var f={};var c=false;var d;var v;var y;var b;delete l[ae];var V=Object.keys(a).reduce(function(t,r){delete l[r];if(!c&&n[r]!=null){var i=a[r](o,n[r],p({},n,{$formutil:$,$fieldutil:e.$fieldutil,$validError:f}));if(I(i)){t.push(i["catch"](function(e){if(!d){m(r,e||r)}}))}else if(de(i)){f[r]=i||r;ve(i,r,n.name);if(n.$validateLazy){c=true}}}return t},[]);var w=function e(n){return r(Y(t,Y(y,n)))};if(V.length){if(!s){g(true)}v=function e(t){return d=t(w)};V.push(h(p({},l,{},f)));b=Promise.all(V).then(function(){if(d){return d}e.$shouldCancelPrevAsyncValidate=null;return g(false,w)})}else{if(s){g(false)}b=h(p({},l,{},f),w)}if(e.$shouldCancelPrevAsyncValidate){e.$shouldCancelPrevAsyncValidate(function(e){y=e;return b})}e.$shouldCancelPrevAsyncValidate=v})}function $(t,r){return e.$setState({$viewValue:t,$dirty:true},r)}function f(t,r){return e.$setState({$value:t},r)}function c(t,r){return e.$setState({$touched:t},r)}function d(t,r){return e.$setState({$dirty:t},r)}function v(t,r){return e.$setState({$focused:t},r)}function h(t,r){return e.$setState({$error:t},r)}function m(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;var n=arguments.length>2?arguments[2]:undefined;var i=Object.assign({},e.$state.$error);if(de(r)){i[t]=r||t;ve(r,t,e.props.name)}else{delete i[t]}return h(i,n)}function g(t,r){return e.$setState({$pending:t},r)}function y(){var t=e.$state.$error,r=t===void 0?{}:t;for(var n in r){return r[n]instanceof Error?r[n].message:r[n]}}function b(t){var r=Object.assign({},t);if("$error"in r){if(!r.$error){r.$error={}}r.$valid=Object.keys(r.$error).length===0}var n=e.props,i=n.$parser,a=n.$formatter;if("$viewValue"in r&&!("$value"in r)){var u=function e(t){return r.$viewValue=t};r.$value=i?i(r.$viewValue,u):r.$viewValue}else if("$value"in r&&!("$viewValue"in r)){var o=function e(t){return r.$value=t};r.$viewValue=a?a(r.$value,o):r.$value}if("$valid"in r){r.$invalid=!r.$valid}else if("$invalid"in r){r.$dirty=!r.$invalid}if("$dirty"in r){r.$pristine=!r.$dirty}else if("$pristine"in r){r.$dirty=!r.$pristine}if("$touched"in r){r.$untouched=!r.$touched}else if("$untouched"in r){r.$touched=!r.$untouched}e.$state=p({},e.$state,{},r);return s()}return r}var ye=function(t){m(r,t);function r(){var e;var t;f(this,r);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++){i[a]=arguments[a]}t=F(this,(e=g(r)).call.apply(e,[this].concat(i)));t.$$FIELD_UUID=pe();t.$formContext=void 0;t.$state=void 0;t.$setState=function(e,r){return new Promise(function(n){var i=function e(){return n(Y(r,t.$fieldutil))};if(t.isMounting){var a=t.props.name;if(a in(t.$formContext.$$registers||{})){t.$formContext.$$onChange(a,e,i)}else{t.$registered.$$merge(e);t.$registered.$$detectChange(e);t.forceUpdate(i)}}else{t.$registered.$$merge(e);i()}})};return t}d(r,[{key:"componentDidMount",value:function e(){this.isMounting=true;var t=this.props.name,r=this.$formContext;s(!t||r.$formutil,"You should enusre that the <Field /> with the name '".concat(t,"' must be used underneath a <Form /> component or withForm() HOC, otherwise it's isolated."));s(t,"You should assign a name to <Field />, otherwise it will be isolated!");if(r.$$register){r.$$register(t,this.$fieldHandler)}this.$prevValue=this.$state.$value;J(this.props.$ref,this.$fieldutil)}},{key:"componentWillUnmount",value:function e(){if(this.$formContext.$$unregister){this.$formContext.$$unregister(this.props.name,this.$fieldHandler,this.props.$reserveOnUnmount)}this.isMounting=false;J(this.props.$ref,null)}},{key:"componentDidUpdate",value:function e(t){var r=this.props.name;if(r!==t.name){if(this.$formContext.$$register){this.$formContext.$$register(r,this.$fieldHandler,t.name)}}J(this.props.$ref,this.$fieldutil);if(this.$state.$value!==this.$prevValue){if(!(r in(this.$formContext.$$registers||{}))){this.$registered.$$triggerChange({$newValue:this.$state.$value,$prevValue:this.$prevValue})}this.$prevValue=this.$state.$value}}},{key:"_render",value:function e(){var t=this.$fieldutil=p({$name:this.props.name},this.$registered.$getState(),{},this.$registered,{$$formutil:this.$formContext.$formutil});return me(t,this.props)}},{key:"render",value:function t(){var r=this;var n=!this.$formContext;return e.createElement(x.Consumer,null,function(e){r.$formContext=e;if(!r.$fieldHandler){r.$fieldHandler=ge(r,r)}r.$registered=(e.$$registers||{})[r.$fieldHandler.$name]||r.$fieldHandler;if(n){r.$fieldHandler.$$reset();r.$fieldHandler.$validate()}return r._render()})}}]);return r}(a);ye.displayName=he;function be(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var n=u(function(n,i){var a=Object.assign({},n);var u=n.component,o=V(n,["component"]);["$validators","$asyncValidators","$validateLazy","$reserveOnUnmount","$defaultValue","$defaultState","$onFieldChange","$parser","$formatter","$ref","name"].concat(Object.keys(p({},r.$validators,{},r.$asyncValidators,{},a.$validators,{},a.$asyncValidators))).forEach(function(e){if(e in a){if(e==="$validators"||e==="$asyncValidators"||e==="$defaultState"){o[e]=p({},r[e],{},a[e])}delete a[e]}});return e.createElement(ye,Object.assign({},r,o,{render:function r(n){return e.createElement(t,Object.assign({},a,{$fieldutil:n,ref:i}))}}))});n.displayName="React.Formutil.withField."+(t.displayName||t.name||"Anonymous");return l(n,t)}var Ve=Q(be);var we=function(t){m(r,t);function r(){f(this,r);return F(this,g(r).apply(this,arguments))}d(r,[{key:"render",value:function t(){var r=this;var n=this.props,i=n.$fieldutil,a=n.value,u=n.onChange,o=n.onFocus,s=n.onBlur,l=n.checked,$=n.unchecked,f=V(n,["$fieldutil","value","onChange","onFocus","onBlur","checked","unchecked"]);var c=this.props.type;var d={value:"compositionValue"in this?this.compositionValue:a,onCompositionEnd:function e(t){r.composition=false;delete r.compositionValue;d.onChange(t)},onCompositionStart:function e(){return r.composition=true},onChange:function e(t){var n=t.target.value;if(r.composition){r.compositionValue=n;r.forceUpdate()}else{u(n,t)}},onFocus:o,onBlur:s};var v="input";switch(c){case"select":v=c;d.onChange=function(e){var t=e.target;var r=t.multiple?[].slice.call(t.options).filter(function(e){return e.selected}).map(function(e){return e.value}):t.value;u(r,e)};delete f.type;break;case"textarea":v=c;delete f.type;break;case"checkbox":case"radio":d={checked:a===l,onChange:function e(t){u(t.target.checked?l:$,t)},onFocus:o,onBlur:s};break;default:break}return e.createElement(v,Object.assign({},f,d))}}]);return r}(a);we.displayName="React.Formutil.EasyField.Native";we.defaultProps={value:"",type:"text",checked:true,unchecked:false};var Fe=t({}),ke=Fe.Provider,Ce=Fe.Consumer;var Pe=function(t){m(r,t);function r(){f(this,r);return F(this,g(r).apply(this,arguments))}d(r,[{key:"getGroupContext",value:function e(){return this.props}},{key:"_render",value:function t(){var r=this.props,a=r.className,u=r.groupNode,o=r.children;var s={GroupOption:Oe,Field:Se};var l=R(o)?o(s):n.map(o,function(e){return i(e,s)});if(u===null){return l}return e.createElement(u,{className:a},l)}},{key:"render",value:function t(){return e.createElement(ke,{value:this.getGroupContext()},this._render())}}]);return r}(a);Pe.displayName="React.Formutil.EasyField.Group";Pe.defaultProps={type:"checkbox",groupNode:"div"};var Oe=function(t){m(r,t);function r(){f(this,r);return F(this,g(r).apply(this,arguments))}d(r,[{key:"componentDidMount",value:function e(){s("$value"in this.props,"You should pass a $value to <GroupOption />.")}},{key:"render",value:function t(){var r=this.props,n=r.$value,i=r.onChange,a=r.onFocus,u=r.onBlur,o=V(r,["$value","onChange","onFocus","onBlur"]);return e.createElement(Ce,null,function(t){var r=t.type,s=t.name;var l=r==="radio"?{checked:t.value===n,onChange:function e(r){t.onChange(n,r);i&&i(r)}}:r==="checkbox"?{checked:t.value.indexOf(n)>-1,onChange:function e(r){t.onChange(r.target.checked?t.value.concat(n):t.value.filter(function(e){return e!==n}),r);i&&i(r)}}:{value:t.value,onChange:function e(r){t.onChange(r);i&&i(r)}};return e.createElement("input",Object.assign({name:s},o,l,{type:r,onFocus:function e(r){t.onFocus(r);a&&a(r)},onBlur:function e(r){t.onBlur(r);u&&u(r)}}))})}}]);return r}(a);Oe.displayName="React.Formutil.EasyField.Group.Option";var Se=function(t){m(r,t);function r(){f(this,r);return F(this,g(r).apply(this,arguments))}d(r,[{key:"componentDidMount",value:function e(){s(false,'The "Field" property in EasyField\'s children-props has been deprecated. Please use "GroupOption" instead.')}},{key:"render",value:function t(){return e.createElement(Oe,this.props)}}]);return r}(a);Se.displayName="React.Formutil.EasyField.Group.Option.Deprecated";var Ee=e.Frament||"div";var je=function(t){m(r,t);function r(e){var t;f(this,r);t=F(this,g(r).call(this,e));t.id=0;t.latestValue=t.props.value;t.$formutil=void 0;t.FieldValidators={required:function e(t){return t!==null}};t.$onFormChange=function(e){e.$onValidates(function(e){var r=e.$invalid,n=e.$params;if(r){if(t.props.value.length){t.props.onChange(t.latestValue=[])}}else if(!$(t.props.value,n.list)){t.props.onChange(t.latestValue=n.list)}})};t.swap=function(e,r,n){return t.$setState(function(t){var n=t.items;var i=[n[e],n[r]];n[r]=i[0];n[e]=i[1];return n},n)};t.insert=function(){var e,r,n;for(var i=arguments.length,a=new Array(i),u=0;u<i;u++){a[u]=arguments[u]}a.forEach(function(t){if(R(t)){n=t}else if(typeof t==="number"){e=t}else if(typeof t==="object"){r=t}});return t.$setState(function(n){var i=n.items;if(T(e)){i.push(t.getId(r))}else{i.splice(e,0,t.getId(r))}return{items:i}},n)};t.remove=function(){var e,r;for(var n=arguments.length,i=new Array(n),a=0;a<n;a++){i[a]=arguments[a]}i.forEach(function(t){if(R(t)){r=t}else if(typeof t==="number"){e=t}});return t.$setState(function(r){var n=r.items;if(T(e)){n.pop()}else{n.splice(e,1)}if(!n.length){n=[t.getId()]}return{items:n}},r)};t.$setState=function(e,r){return new Promise(function(n){return t.setState(e,function(){return t.$formutil.$onValidates(function(e){return n(Y(r,e))})})})};t.state={items:e.value.length?e.value.map(function(){return t.getId()}):[t.getId()],formKey:0};return t}d(r,[{key:"componentDidUpdate",value:function e(t){var r=this;if(this.props.value!==this.latestValue){this.setState({items:this.props.value.length?this.props.value.map(function(){return r.getId()}):[this.getId()],formKey:this.state.formKey+1});this.latestValue=this.props.value}}},{key:"getId",value:function e(t){return{id:this.id++,values:t}}},{key:"render",value:function t(){var r=this;var n=this.props,i=n.children,a=n.onFocus,u=n.onBlur,o=n.value;var s=this;if(!R(i)){return null}var l={$insert:this.insert,$remove:this.remove,$swap:this.swap,$push:function e(t,n){return r.insert(t,n)},$pop:function e(t){return r.remove(t)},$shift:function e(t){return r.remove(0,t)},$unshift:function e(t,n){return r.insert(0,t,n)},onFocus:a,onBlur:u};return e.createElement(se,{key:this.state.formKey,$defaultValues:{list:o},$onFormChange:this.$onFormChange,children:function t(n){r.$formutil=n;return e.createElement(Ee,null,r.state.items.map(function(t,a){var u=t.id,o=t.values;return e.createElement(ye,{key:u,required:true,$defaultValue:o||null,$validators:r.FieldValidators,name:"list[".concat(a,"]"),children:function t(u){return e.createElement(se,{$defaultValues:u.$value||{},$onFormChange:function e(t){return t.$onValidates(function(e){var t=e.$invalid,r=e.$params;if(t){if(u.$viewValue!==null){u.$render(null)}}else if(!$(u.$viewValue,r)){u.$render(r)}})},children:function e(t){return i(p({get $length(){return s.state.items.length},$index:a,$isLast:function e(){return a===r.state.items.length-1},$isFirst:function e(){return a===0}},l,{},t),n)}})}})}))}})}}]);return r}(a);je.displayName="React.Formutil.EasyField.List";var De="__TYPE__";var xe=[["required",function(e,t,r){var n=r.__TYPE__,i=r.checked,a=i===void 0?true:i;return n==="checked"?e===a:!U(e)}],["maxLength",function(e,t){return U(e)||e.length<=t}],["minLength",function(e,t){return U(e)||e.length>=t}],["max",function(e,t){return U(e)||e*1<=t}],["min",function(e,t){return U(e)||e*1>=t}],["pattern",function(e,t){return U(e)||t.test(e)}],["enum",function(e,t){return U(e)||t.indexOf(e)>-1}],["checker",function(e,t,r){return t(e,r)}]].reduce(function(e,t){var r=k(t,2),n=r[0],i=r[1];e[n]=function e(t,r,a){var u=a.validMessage,o=u===void 0?{}:u;return i.apply(void 0,arguments)||o[n]||"Error input: ".concat(n)};return e},{});var Ae="React.Formutil.EasyField";var Ne={validMessage:{},valuePropName:"value",changePropName:"onChange",focusPropName:"onFocus",blurPropName:"onBlur",$parser:function e(t){return typeof t==="string"?t.trim():t}};function _e(e,t,r){var n;var i=t.valuePropName,a=t.changePropName,u=t.focusPropName,o=t.blurPropName,s=t.passUtil;var l=function e(t){return t&&t.target?t.target[i]:t};var $=p({},r,(n={},v(n,i,e.$viewValue),v(n,a,function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++){n[i]=arguments[i]}var u=n[0];var o=n[n.length-1];if(!o||!o.target){o=n}else{o=[o]}var s=t[a];s&&s.apply(void 0,C(o));var $=l(u);e.$render($)}),v(n,u,function(){var r=t[u];r&&r.apply(void 0,arguments);e.$setFocused(true)}),v(n,o,function(){var r=t[o];r&&r.apply(void 0,arguments);if(e.$untouched){e.$setTouched(true)}e.$setFocused(false)}),n));if(s){$[s===true?"$fieldutil":s]=e}return $}function Te(e){var t=e.children,r=e.component,n=e.render,i=V(e,["children","component","render"]);var a=i.name,u=i.type,o=i.defaultValue,s=i.valuePropName,l=i.changePropName,$=i.focusPropName,f=i.blurPropName,c=i.validMessage,d=i.checked,v=i.unchecked,h=i.__TYPE__,m=i.passUtil,g=i.$defaultValue,y=i.$defaultState,b=i.$onFieldChange,w=i.$validators,F=i.$asyncValidators,C=i.$validateLazy,P=i.$reserveOnUnmount,O=i.$parser,S=i.$formatter,E=i.$ref,j=V(i,["name","type","defaultValue","valuePropName","changePropName","focusPropName","blurPropName","validMessage","checked","unchecked","__TYPE__","passUtil","$defaultValue","$defaultState","$onFieldChange","$validators","$asyncValidators","$validateLazy","$reserveOnUnmount","$parser","$formatter","$ref"]);var D={children:t,component:r,render:n};var x=!T(u)||T(t)&&T(r)&&T(n);Object.keys(p({},i.$validators=p({},xe,{},i.$validators),{},i.$asyncValidators)).forEach(function(e){if(e in j){if(!x||!z(e)){delete j[e]}}});if(x){var A=(u||"").split("."),N=k(A,2),_=N[0],R=_===void 0?"text":_,U=N[1];D.component=R==="group"?Pe:R==="list"?je:we;if(a){j.name=a}if(u){j.type=R}if(t){j.children=t}j.checked=d;j.unchecked=v;switch(R){case"select":case"textarea":if(e.multiple){i[De]="array"}break;case"group":if(U==="checkbox"){i[De]="array"}j.type=U;break;case"checkbox":case"radio":i[De]="checked";break;case"list":i[De]="array";break;default:break}}if(!("$defaultValue"in i)&&"defaultValue"in e){i.$defaultValue=o}if(!("$defaultValue"in i)&&De in i){var I;switch(i[De]){case"checked":var H=i.unchecked,M=H===void 0?false:H;I=M;break;case"array":I=[];break;case"object":I={};break;case"number":I=0;break;case"empty":default:break}i.$defaultValue=I}return{fieldProps:i,childProps:j,renderProps:D}}function Re(e,t){var a=t.component,u=t.render,o=t.children;if(a){return r(a,e)}if(R(u)){return u(e)}if(R(o)){return o(e)}return n.map(o,function(t){return i(t,e)})}var Ue=function(t){m(r,t);function r(){f(this,r);return F(this,g(r).apply(this,arguments))}d(r,[{key:"render",value:function t(){var r=Te(this.props),n=r.fieldProps,i=r.childProps,a=r.renderProps;return e.createElement(ye,Object.assign({},n,{children:function e(t){return Re(_e(t,n,i),a)}}))}}]);return r}(a);Ue.displayName=Ae;Ue.defaultProps=Ne;function Ie(t){var r=u(function(r,n){return e.createElement(x.Consumer,null,function(i){return e.createElement(t,Object.assign({},r,{$formutil:i.$formutil,ref:n}))})});r.displayName="React.Formutil.connect."+(t.displayName||t.name||"Anonymous");return l(r,t)}function He(){if(!e.useState){throw new Error("Hooks api need react@>=16.8, Please upgrade your reactjs.")}var t=e.useContext;var r=t(x);return r}function Me(t){var r=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};if(!e.useState){throw new Error("Hooks api need react@>=16.8, Please upgrade your reactjs.")}var n=e.useState,i=e.useLayoutEffect,a=e.useRef;var u;if(t){if(typeof t==="string"){u=t;r.name=u}else{r=t;u=r.name}}var o=He();var l=a({}).current;var $=a([]);var f;l.$formContext=o;l.props=r;l.$setState=h;var c=n(function(){l.$$FIELD_UUID=pe();l.$fieldHandler=f=ge(l);var e=l.$fieldHandler.$$reset();l.$fieldHandler.$validate();return e}),d=k(c,2),v=d[1];if(!f){f=(o.$$registers||{})[l.$fieldHandler.$name]||l.$fieldHandler}i(function(){var e=l.$state;if(l.isMounting){if(!(u in(o.$$registers||{}))){var t=l.$prevValue;f.$$triggerChange({$newValue:e.$value,$prevValue:t})}}l.$prevValue=e.$value},[l.$state.$value]);i(function(){l.isMounting=true;s(!u||o.$formutil,"You should enusre that the useField() with the name '".concat(u,"' must be used underneath a <Form /> component or withForm() HOC, otherwise it's isolated."));s(u,"You should pass a name argument to useField(), otherwise it will be isolated!");return function(){l.isMounting=false;J(r.$ref,null)}},[]);i(function(){if(o.$$register){o.$$register(u,l.$fieldHandler)}return function(){if(o.$$unregister){o.$$unregister(u,l.$fieldHandler,!l.isMounting&&r.$reserveOnUnmount)}}},[u]);i(function(){J(r.$ref,l.$fieldutil)});i(function(){if($.current.length>0){var e=C($.current);$.current.length=0;while(e.length){e.pop()(l.$fieldutil)}}});function h(e,t){return new Promise(function(r){var n=function e(){return r(Y(t,l.$fieldutil))};if(l.isMounting){if(u in(o.$$registers||{})){o.$$onChange(u,e,n)}else{v(f.$$merge(e));f.$$detectChange(e);$.current.push(n)}}else{f.$$merge(e);n()}})}return l.$fieldutil=p({$name:u},f.$getState(),{},f,{$$formutil:o.$formutil})}function Le(){var e=He(),t=e.$formutil;return t}function Be(e){e=p({},Ne,{},e,{children:null});var t=Te(e),r=t.fieldProps,n=t.childProps;var i=Me(r);return _e(i,r,n)}export{Ue as EasyField,ye as Field,se as Form,Ie as connect,Me as useField,Le as useForm,Be as useHandler,Ve as withField,$e as withForm};
