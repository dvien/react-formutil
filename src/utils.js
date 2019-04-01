import warning from 'warning';

const PATH_REGEXP = /\s*(?:\]\s*\.|\]\s*\[|\.|\[|\])\s*/g;
const Root = isUndefined(window) ? global : window;

export function isUndefined(arg) {
    return typeof arg === 'undefined';
}

export function isFunction(arg) {
    return typeof arg === 'function';
}

export function isEmpty(arg) {
    return isUndefined(arg) || arg === null || arg + '' === '';
}

export function isPromise(promise) {
    return !!promise && isFunction(promise.then);
}

export const runCallback = function(callback, ...args) {
    if (isFunction(callback)) {
        callback(...args);
    }

    return args[0];
};

export function createHOC(withHOC) {
    return function(...args) {
        if (isFunction(args[0])) {
            return withHOC(...args);
        }

        return function(WrappedComponent) {
            return withHOC(WrappedComponent, args[0]);
        };
    };
}

const VALID_PROPS = ['minlength', 'maxlength', 'max', 'min', 'required', 'pattern', 'step'];
export function isValidProp(prop) {
    return VALID_PROPS.indexOf(prop.toLowerCase()) > -1;
}

/* eslint-disable */
const executeWord = function(word) {
    try {
        const exec = new Function(
            'origin',
            'global',
            `return typeof ${word} === 'number' || (typeof ${word} !== 'undefined' && !(origin in global)) ? ${word} : origin`
        );
        return exec(word, Root);
    } catch (err) {
        return word;
    }
};

/**
 * @desc 解析表达式中赋值深路径对象
 *
 * @param {object} target 要赋值的对象
 * @param {string} path 赋值路径，eg：list[0].title
 * @param {any} [value] 要赋过去的值，如过不传，则返回解析路径后的值
 *
 * 使用示例：parsePath({}, 'list[0].authors[1].name', 'Lucy');
 */
export const parsePath = (...args) => {
    const [target, path, value] = args;

    warning(typeof path === 'string', `The second parameter(${JSON.stringify(path)}) of parsePath() must be a string.`);

    const pathSymbols = (path.match(PATH_REGEXP) || []).map(s => s.replace(/\s/g, ''));
    const pathWords = path
        .split(PATH_REGEXP)
        .map(s => s.trim())
        .filter(item => item !== '');
    let scope = target;

    try {
        if (args.length < 3) {
            for (let index = 0, len = pathWords.length; index < len; index++) {
                const word = executeWord(pathWords[index]);

                if (index + 1 === len) {
                    return scope[word];
                }

                if (isUndefined(scope[word])) {
                    break;
                }

                scope = scope[word];
            }
        } else {
            for (let index = 0, length = pathWords.length; index < length; index++) {
                const word = executeWord(pathWords[index]);
                const nextWord = pathWords[index + 1];
                const symbol = pathSymbols[index];

                if (isUndefined(nextWord)) {
                    scope[word] = value;
                    break;
                }

                switch (symbol) {
                    case '].':
                    case '.':
                        scope = isUndefined(scope[word]) ? (scope[word] = {}) : scope[word];
                        break;

                    case '][':
                    case '[':
                        const nextVarWord = executeWord(nextWord);

                        scope = isUndefined(scope[word])
                            ? (scope[word] = typeof nextVarWord === 'number' && nextVarWord >= 0 ? [] : {})
                            : scope[word];
                        break;

                    default:
                        scope[word] = value;
                        break;
                }
            }
        }
    } catch (error) {
        warning(false, `The name '%s' of Field seems is not a legal expression.`, path);
    }

    if (args.length > 2) {
        return target;
    }
};

export const arrayFind = (array, process) => {
    for (let i = 0, j = array.length; i < j; i++) {
        if (process(array[i]) === true) {
            return array[i];
        }
    }
};

export const objectMap = (obj, handler) =>
    Object.keys(obj).reduce((newObj, key) => {
        newObj[key] = handler(obj[key], key, obj);
        return newObj;
    }, {});

export const objectEach = (obj, handler) => Object.keys(obj).forEach(key => handler(obj[key], key, obj));

export const toObject = (arr, handler, obj = {}) =>
    arr.reduce((...args) => {
        handler(...args);

        return args[0];
    }, obj);

const TODO_DELETE = undefined;
const CLEAR = (obj, pkey, pobj) => {
    objectEach(obj, (value, key) => {
        if (value === TODO_DELETE) {
            delete obj[key];
        } else if (value && typeof value === 'object') {
            CLEAR(value, key, obj);
        }
    });

    if (pobj && Object.keys(obj).every(key => obj[key] === TODO_DELETE)) {
        pobj[pkey] = TODO_DELETE;
        CLEAR(pobj);
    }
};
export const preObjectClear = (obj, name) => {
    if (!isUndefined(parsePath(obj, name))) {
        parsePath(obj, name, TODO_DELETE);
    }
};
export const objectClear = obj => {
    CLEAR(obj);
};
