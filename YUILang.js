// [Keep Lint happy. #yp ]
"use strict";

// [Requires YUILang_config.js for 'isArray' call.  #yp ]

// [Namespace is created in config file, if not...  #yp ]
if (typeof YUILang === 'undefined') 
    var YUILang = {};

// [Create a module style namespace.  #yp ]
(function() {

/**
 * 
 * [Port of YUI 3.5.0 'YUI.Lang' class as a light weight provider of
 * core language utilities and extensions (largely type testing).
 * 
 * All YUI documentation remains intact with notes attached 
 * in square brackets where changes have been made. #yp ]
 * 
 * The YUI module contains the components required for building the YUI
 * seed file.  This includes the script loading mechanism, a simple queue,
 * and the core utilities for the library.
 * @module yui
 * @submodule yui-base
 */
 
/**
 * Provides core language utilites and extensions used throughout YUI.
 *
 * @class Lang
 * @static
 */

// [Adjust namespace. #yp ]
//var L = Y.Lang || (Y.Lang = {}),
var L = YUILang,

STRING_PROTO = String.prototype,
TOSTRING     = Object.prototype.toString,
 
TYPES = {
    'undefined'        : 'undefined',
    'number'           : 'number',
    'boolean'          : 'boolean',
    'string'           : 'string',
    '[object Function]': 'function',
    '[object RegExp]'  : 'regexp',
    '[object Array]'   : 'array',
    '[object Date]'    : 'date',
    '[object Error]'   : 'error'
},
 
SUBREGEX        = /\{\s*([^|}]+?)\s*(?:\|([^}]*))?\s*\}/g,
TRIMREGEX       = /^\s+|\s+$/g,
NATIVE_FN_REGEX = /\{\s*\[(?:native code|function)\]\s*\}/i;
 
// -- Protected Methods --------------------------------------------------------
 
/**
Returns `true` if the given function appears to be implemented in native code,
`false` otherwise. Will always return `false` -- even in ES5-capable browsers --
if the `useNativeES5` YUI config option is set to `false`.
 
This isn't guaranteed to be 100% accurate and won't work for anything other than
functions, but it can be useful for determining whether a function like
`Array.prototype.forEach` is native or a JS shim provided by another library.
 
There's a great article by @kangax discussing certain flaws with this technique:
<http://perfectionkills.com/detecting-built-in-host-methods/>
 
While his points are valid, it's still possible to benefit from this function
as long as it's used carefully and sparingly, and in such a way that false
negatives have minimal consequences. It's used internally to avoid using
potentially broken non-native ES5 shims that have been added to the page by
other libraries.
 
@method _isNative
@param {Function} fn Function to test.
@return {Boolean} `true` if _fn_ appears to be native, `false` otherwise.
@static
@protected
@since 3.5.0
**/
L._isNative = function (fn) {
    // [Adjust namespace.]
    //return !!(Y.config.useNativeES5 && fn && NATIVE_FN_REGEX.test(fn));
    return !!(YUILang.config.useNativeES5 && fn && NATIVE_FN_REGEX.test(fn));
};
 
// -- Public Methods -----------------------------------------------------------
 
/**
 * Determines whether or not the provided item is an array.
 *
 * Returns `false` for array-like collections such as the function `arguments`
 * collection or `HTMLElement` collections. Use `Y.Array.test()` if you want to
 * test for an array-like collection.
 *
 * @method isArray
 * @param o The object to test.
 * @return {boolean} true if o is an array.
 * @static
 */
L.isArray = L._isNative(Array.isArray) ? Array.isArray : function (o) {
    return L.type(o) === 'array';
};
 
/**
 * Determines whether or not the provided item is a boolean.
 * @method isBoolean
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a boolean.
 */
L.isBoolean = function(o) {
    return typeof o === 'boolean';
};
 
/**
 * Determines whether or not the supplied item is a date instance.
 * @method isDate
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a date.
 */
L.isDate = function(o) {
    return L.type(o) === 'date' && o.toString() !== 'Invalid Date' && !isNaN(o);
};
 
/**
 * <p>
 * Determines whether or not the provided item is a function.
 * Note: Internet Explorer thinks certain functions are objects:
 * </p>
 *
 * <pre>
 * var obj = document.createElement("object");
 * Y.Lang.isFunction(obj.getAttribute) // reports false in IE
 * &nbsp;
 * var input = document.createElement("input"); // append to body
 * Y.Lang.isFunction(input.focus) // reports false in IE
 * </pre>
 *
 * <p>
 * You will have to implement additional tests if these functions
 * matter to you.
 * </p>
 *
 * @method isFunction
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a function.
 */
L.isFunction = function(o) {
    return L.type(o) === 'function';
};
 
/**
 * Determines whether or not the provided item is null.
 * @method isNull
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is null.
 */
L.isNull = function(o) {
    return o === null;
};
 
/**
 * Determines whether or not the provided item is a legal number.
 * @method isNumber
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a number.
 */
L.isNumber = function(o) {
    return typeof o === 'number' && isFinite(o);
};
 
/**
 * Determines whether or not the provided item is of type object
 * or function. Note that arrays are also objects, so
 * <code>Y.Lang.isObject([]) === true</code>.
 * @method isObject
 * @static
 * @param o The object to test.
 * @param failfn {boolean} fail if the input is a function.
 * @return {boolean} true if o is an object.
 * @see isPlainObject
 */
L.isObject = function(o, failfn) {
    var t = typeof o;
    return (o && (t === 'object' ||
        (!failfn && (t === 'function' || L.isFunction(o))))) || false;
};
 
/**
 * Determines whether or not the provided item is a string.
 * @method isString
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is a string.
 */
L.isString = function(o) {
    return typeof o === 'string';
};
 
/**
 * Determines whether or not the provided item is undefined.
 * @method isUndefined
 * @static
 * @param o The object to test.
 * @return {boolean} true if o is undefined.
 */
L.isUndefined = function(o) {
    return typeof o === 'undefined';
};
 
/**
 * A convenience method for detecting a legitimate non-null value.
 * Returns false for null/undefined/NaN, true for other values,
 * including 0/false/''
 * @method isValue
 * @static
 * @param o The item to test.
 * @return {boolean} true if it is not null/undefined/NaN || false.
 */
L.isValue = function(o) {
    var t = L.type(o);
 
    switch (t) {
        case 'number':
            return isFinite(o);
 
        case 'null': // fallthru
        case 'undefined':
            return false;
 
        default:
            return !!t;
    }
};
 
/**
 * Returns the current time in milliseconds.
 *
 * @method now
 * @return {Number} Current time in milliseconds.
 * @static
 * @since 3.3.0
 */
L.now = Date.now || function () {
    return new Date().getTime();
};
 
/**
 * Lightweight version of <code>Y.substitute</code>. Uses the same template
 * structure as <code>Y.substitute</code>, but doesn't support recursion,
 * auto-object coersion, or formats.
 * @method sub
 * @param {string} s String to be modified.
 * @param {object} o Object containing replacement values.
 * @return {string} the substitute result.
 * @static
 * @since 3.2.0
 */
L.sub = function(s, o) {
    return s.replace ? s.replace(SUBREGEX, function (match, key) {
        return L.isUndefined(o[key]) ? match : o[key];
    }) : s;
};
 
/**
 * Returns a string without any leading or trailing whitespace.  If
 * the input is not a string, the input will be returned untouched.
 * @method trim
 * @static
 * @param s {string} the string to trim.
 * @return {string} the trimmed string.
 */
L.trim = STRING_PROTO.trim ? function(s) {
    return s && s.trim ? s.trim() : s;
} : function (s) {
    try {
        return s.replace(TRIMREGEX, '');
    } catch (e) {
        return s;
    }
};
 
/**
 * Returns a string without any leading whitespace.
 * @method trimLeft
 * @static
 * @param s {string} the string to trim.
 * @return {string} the trimmed string.
 */
L.trimLeft = STRING_PROTO.trimLeft ? function (s) {
    return s.trimLeft();
} : function (s) {
    return s.replace(/^\s+/, '');
};
 
/**
 * Returns a string without any trailing whitespace.
 * @method trimRight
 * @static
 * @param s {string} the string to trim.
 * @return {string} the trimmed string.
 */
L.trimRight = STRING_PROTO.trimRight ? function (s) {
    return s.trimRight();
} : function (s) {
    return s.replace(/\s+$/, '');
};
 
/**
Returns one of the following strings, representing the type of the item passed
in:
 
 * "array"
 * "boolean"
 * "date"
 * "error"
 * "function"
 * "null"
 * "number"
 * "object"
 * "regexp"
 * "string"
 * "undefined"
 
Known issues:
 
 * `typeof HTMLElementCollection` returns function in Safari, but
    `Y.Lang.type()` reports "object", which could be a good thing --
    but it actually caused the logic in <code>Y.Lang.isObject</code> to fail.
 
@method type
@param o the item to test.
@return {string} the detected type.
@static
**/
L.type = function(o) {
    return TYPES[typeof o] || TYPES[TOSTRING.call(o)] || (o ? 'object' : 'null');
};

})();
// [Close of module style namespace.  #yp ]
