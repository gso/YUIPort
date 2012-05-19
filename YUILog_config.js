
// [YUIPort, porting Yahoo's YUI code to a standalone base:
// https://github.com/gso/YUIPort  #yp ]

// Defines Y.config options originally declared by YUI in yui.js, 
// http://yuilibrary.com/yui/docs/api/classes/YUI.html

if (typeof YUILog === 'undefined') 
    var YUILog = {};
if (!YUILog.config) 
    YUILog.config = {};
    
// YUILog.js configuration options.
// Defaults that can be set include a file include/exclude scheme,
// a custom logging function to use, or whether to use a console if 
// available or not (falling back to an alert box if not).
YUILog.config.debug = true;  // toggle output
YUILog.config.logExclude = null;  // - literal obj., '{filename: bool, ...}'
YUILog.config.logInclude = null;  // - ditto ]
YUILog.config.logFn = undefined;  // - ref. yui.js, alternaive logging function
YUILog.config.useBrowserConsole = true;  // currently there isn't an alternative programmed
