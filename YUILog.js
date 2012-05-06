// [Keep Lint happy.  #yp ]
"use strict";

// [Requires YUILang.js, YUILog_config.js.  #yp ]

// [Namespace may (should) have been created in config file, if not...  #yp ]
if (typeof YUILog === 'undefined') 
    var YUILog = {};

// [Create a module style namespace.  #yp ]
(function() {

/**
 * 
 * [Ported from yui/js/yui.js as a light weight cross platform logger.]
 * 
 * Provides console log capability and exposes a custom event for
 * console implementations. This module is a `core` YUI module, <a href="../classes/YUI.html#method_log">it's documentation is located under the YUI class</a>.
 *
 * [- Custom event removed from code.]
 * 
 * @module yui
 * @submodule yui-log
 */

// [Replace the YUI 'Y' global with 'YP'.]
//var YP = YP || {};
//var INSTANCE = Y,
//    LOGEVENT = 'yui:log',
//    UNDEFINED = 'undefined',
//    LEVELS = { debug: 1,
//               info: 1,
//               warn: 1,
//               error: 1 };
// [Namespace.  #yp ]
//var INSTANCE = YP,
var INSTANCE = YUILog,
    UNDEFINED = 'undefined',
    LEVELS = { debug: 1,
               info: 1,
               warn: 1,
               error: 1 };

 
/**
 * If the 'debug' config is true, a 'yui:log' event will be
 * dispatched, which the Console widget and anything else
 * can consume.  If the 'useBrowserConsole' config is true, it will
 * write to the browser console if available.  YUI-specific log
 * messages will only be present in the -debug versions of the
 * JS files.  The build system is supposed to remove log statements
 * from the raw and minified versions of the files.
 *
 * [- Note if 'debug' is true and 'src' is given then if 'src' matches 
 * matches a file name in either config properties 'logExclude' and/ or 
 * 'logInclude' ('{filename: bool, ...}' pairs) then if the file is
 * not explicitely included or is excluded the log entry is not made.]
 * 
 * [- The 'silent' parameter would ordinarily slience the custom event,
 * hence now not a parameter.]
 * 
 * @method log
 * @for YUI
 * @param  {String}  msg  The message to log.
 * @param  {String}  cat  The log category for the message.  Default
 *                        categories are "info", "warn", "error", time".
 *                        Custom categories can be used as well. (opt).
 * @param  {String}  src  The source of the the message (opt).
 * // [Now not a parameter.  #yp ]
 * //@param  {boolean} silent If true, the log event won't fire.
 * @return {YUI}      YUI instance.
 */
// [Remove 'silent' from parameter (refers to custom events).] 
//INSTANCE.log = function(msg, cat, src, silent) {
INSTANCE.log = function(msg, cat, src) {
//[Custom event publisher code]
//    var bail, excl, incl, m, f,
//        Y = INSTANCE,
//        c = Y.config,
//        publisher = (Y.fire) ? Y : YUI.Env.globalEvents;
    var bail, excl, incl, m, f,
        Y = INSTANCE,
        c = Y.config;
    // suppress log message if the config is off or the event stack
    // or the event call stack contains a consumer of the yui:log event
    if (c.debug) {
        // apply source filters
        if (src) {
            excl = c.logExclude;
            incl = c.logInclude;
            if (incl && !(src in incl)) {
                bail = 1;
            } else if (incl && (src in incl)) {
                bail = !incl[src];
            } else if (excl && (src in excl)) {
                bail = excl[src];
            }
        }
        if (!bail) {
            if (c.useBrowserConsole) {
                m = (src) ? src + ': ' + msg : msg;
// [Adjust the namespace and 'logFn' call if used.]
//                if (Y.Lang.isFunction(c.logFn)) {
//                    c.logFn.call(Y, msg, cat, src);
                if (YUILang.isFunction(c.logFn)) {
                    c.logFn.call(Y, msg, cat);
                } else if (typeof console != UNDEFINED && console.log) {
                    f = (cat && console[cat] && (cat in LEVELS)) ? cat : 'log';
                    console[f](m);
                } else if (typeof opera != UNDEFINED) {
                    opera.postError(m);
                }
            }
 
// [Remove the code to fire the custome event.]
//            if (publisher && !silent) {
// 
//                if (publisher == Y && (!publisher.getEvent(LOGEVENT))) {
//                    publisher.publish(LOGEVENT, {
//                        broadcast: 2
//                    });
//                }
// 
//                publisher.fire(LOGEVENT, {
//                    msg: msg,
//                    cat: cat,
//                    src: src
//                });
//            }
        }
    }
 
    return Y;
};
 
/**
 * [Although minified and raw versions are a feature of YUI, this function
 * is left intact to enable a system message function if, e.g., 
 * log calls were commented out prior to release.  #yp ]
 * 
 * Write a system message.  This message will be preserved in the
 * minified and raw versions of the YUI files, unlike log statements.
 * @method message
 * @for YUI
 * @param  {String}  msg  The message to log.
 * @param  {String}  cat  The log category for the message.  Default
 *                        categories are "info", "warn", "error", time".
 *                        Custom categories can be used as well. (opt).
 * @param  {String}  src  The source of the the message (opt).
 * // [Now not a parameter.  #yp ]
 * //@param  {boolean} silent If true, the log event won't fire.
 * @return {YUI}      YUI instance.
 * 
 * [- Note 'silent' removed from parameters as applies to removed custom 
 * events.]
 */
INSTANCE.message = function() {
    return INSTANCE.log.apply(INSTANCE, arguments);
};

})();
// [Close of module style namespace.  #yp ]
