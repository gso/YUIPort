
// [YUIPort, porting Yahoo's YUI code to a standalone base:
// https://github.com/gso/YUIPort  #yp ]

// Defines a custom '.config', these options are declared by YUI in yui.js, 
// http://yuilibrary.com/yui/docs/api/classes/YUI.html

if (typeof YUILang === 'undefined') 
    var YUILang = {};
if (!YUILang.config) 
    YUILang.config = {};

// By default YUI will use native or where the browser does not 
// support a method its own functions in preference to those 
// provided by any other libraries that may be loaded.  Set false
// to allow other libraries to provide or override native functions.
// (Ref. also the '_isNative' method in YUILang.js.)
YUILang.config.useNativeES5 = true;
