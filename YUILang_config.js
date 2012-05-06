
// Defines a custom '.config', these options are declared by YUI in yui.js, 
// http://yuilibrary.com/yui/docs/api/classes/YUI.html

if (typeof YUILang === 'undefined') 
    var YUILang = {};
if (!YUILang.config) 
    YUILang.config = {};

// ref. the '_isNative' method in YUILang.js for notes on this property
YUILang.config.useNativeES5 = undefined;
