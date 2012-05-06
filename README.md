
##Overview

This project meets a need for lightweight standalone cross platform Javascript 
assert and logging tools. 
Both of these techniques can be used to reduce 
the necessity to use a debugger and hence saving time in developing applications
 (e.g., typically, routinely checking 
the validity of arguments passed to functions).

The functions themselves have been ported across from Yahoo's [YUI framework](http://yuilibrary.com/), 
with as minimal changes to the original code as has been possible
(all modifications have been documented in square brackets and flagged with a `#yp` tag).

Please note when using these functions:

* the results of passing non-valid arguments are (largely) undefined
* the project is currently at release candidate status -- while all functions 
have received some testing, this was by no means a comprehensive 
testing of every fork in the code, bugs conceivably could have been 
introduced during the porting process (YUI code has also been known 
to have the occassional albeit extremely rare bug)

##Currently Available Libraries and Functions

###Assert functions

[**YUIAssert.js**](./YUIPort/blob/master/YUIAssert.js) (ported from [Assert.js](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html), [AssertionError.js](http://yuilibrary.com/yui/docs/api/classes/Test.AssertionError.html), [ComparisonFailure.js](http://yuilibrary.com/yui/docs/api/classes/Test.ComparisonFailure.html), [UnexpectedValue.js](http://yuilibrary.com/yui/docs/api/classes/Test.UnexpectedValue.html))

Equality:

- [`YUIAssert.areEqual`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_areEqual)
- [`YUIAssert.areNotEqual`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_areNotEqual)
- [`YUIAssert.areSame`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_areSame)
- [`YUIAssert.areNotSame`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_areNotSame)

Boolean:

- [`YUIAssert.isFalse`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isFalse)
- [`YUIAssert.isTrue`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isTrue)

Special value:

- [`YUIAssert.isNaN`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isNaN)
- [`YUIAssert.isNotNaN`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isNotNaN)
- [`YUIAssert.isNull`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isNull)
- [`YUIAssert.isNotNull`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isNotNull)
- [`YUIAssert.isUndefined`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isUndefined)
- [`YUIAssert.isNotUndefined`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isNotUndefined)

Instance:

- [`YUIAssert.isArray`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isArray)
- [`YUIAssert.isBoolean`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isBoolean)
- [`YUIAssert.isFunction`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isFunction)
- [`YUIAssert.isInstanceOf`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isInstanceOf)
- [`YUIAssert.isNumber`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isNumber)
- [`YUIAssert.isObject`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isObject)
- [`YUIAssert.isString`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isString)
- [`YUIAssert.isTypeOf`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isTypeOf)

Error:

- [`YUIAssert.throwsError`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_throwsError)

[**YUIArrayAssert.js**](./YUIPort/blob/master/YUIArrayAssert.js) (requires [YUIAssert.js](https://github.com/gso/YUIPort/tree/master/source), ported from [ArrayAssert.js](http://yuilibrary.com/yui/docs/api/classes/Test.ArrayAssert.html))

- [`YUIArrayAssert.contains`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_contains)
- [`YUIArrayAssert.doesNotContain`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_doesNotContain)
- [`YUIArrayAssert.containsItems`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_containsItems)
- [`YUIArrayAssert.doesNotContainItems`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_doesNotContainItems)
- [`YUIArrayAssert.containsMatch`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_containsMatch)
- [`YUIArrayAssert.doesNotContainMatch`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_doesNotContainMatch)
- [`YUIArrayAssert.indexOf`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_indexOf)
- [`YUIArrayAssert.lastIndexOf`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_lastIndexOf)
- [`YUIArrayAssert.itemsAreEqual`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_itemsAreEqual)
- [`YUIArrayAssert.itemsAreSame`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_itemsAreSame)
- [`YUIArrayAssert.itemsAreEquivalent`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_itemsAreEquivalent)
- [`YUIArrayAssert.isEmpty`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isEmpty)
- [`YUIArrayAssert.isNotEmpty`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_isNotEmpty)

[**YUIDateAssert.js**](./YUIPort/blob/master/YUIDateAssert.js) (requires [YUIAssert.js](https://github.com/gso/YUIPort/tree/master/source), ported from [DateAssert.js](http://yuilibrary.com/yui/docs/api/classes/Test.DateAssert.html))

- [`YUIDateAssert.datesAreEqual`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_datesAreEqual)
- [`YUIDateAssert.timesAreEqual`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_timesAreEqual)

[**YUIObjectAssert.js**](./YUIPort/blob/master/YUIObjectAssert.js) (requires [YUIAssert.js](https://github.com/gso/YUIPort/tree/master/source) and [YUIObject.js](https://github.com/gso/YUIPort/tree/master/source), ported from [ObjectAssert.js](http://yuilibrary.com/yui/docs/api/classes/Test.ObjectAssert.html))

- [`YUIObjectAssert.areEqual`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_areEqual)
- [`YUIObjectAssert.hasKey`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_hasKey)
- [`YUIObjectAssert.inheritsKey`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_inheritsKey)
- [`YUIObjectAssert.inheritsKeys`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_inheritsKeys)
- [`YUIObjectAssert.ownsKey`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_ownsKey)
- [`YUIObjectAssert.ownsKeys`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_ownsKeys)
- [`YUIObjectAssert.ownsNoKeys`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_ownsNoKeys)
- [`YUIObjectAssert.ownsOrInheritsKey`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_ownsOrInheritsKey)
- [`YUIObjectAssert.ownsOrInheritsKeys`](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html#method_ownsOrInheritsKeys)

###Log functions

[**YUILog.js**](./YUIPort/blob/master/YUILog.js) (requires [YUILang.js](https://github.com/gso/YUIPort/tree/master) and [YUILog_config.js](https://github.com/gso/YUIPort/tree/master) \[[src](./YUIPort/blob/master/YUILog_config.js)\], ported from [yui.js](http://yuilibrary.com/yui/docs/api/classes/YUI.html))
 
- [`YUILog.log`](http://yuilibrary.com/yui/docs/api/classes/YUI.html#method_log)
- [`YUILog.message`](http://yuilibrary.com/yui/docs/api/classes/YUI.html#method_message)

(Ref. below for notes on using the YUI logging functions.)

###Type testing functions

[**YUILang.js**](./YUIPort/blob/master/YUILang.js) (requires [YUILang_config.js](https://github.com/gso/YUIPort/tree/master/source) \[[src](./YUIPort/blob/master/YUILang_config.js)\] for the `.isArray` method, ported from [yui-lang.js](http://yuilibrary.com/yui/docs/api/classes/Lang.html))

- [`YUILang.isArray`](http://yuilibrary.com/yui/docs/api/classes/Lang.html#method_isArray)
- [`YUILang.isBoolean`](http://yuilibrary.com/yui/docs/api/classes/Lang.html#method_isBoolean)
- [`YUILang.isDate`](http://yuilibrary.com/yui/docs/api/classes/Lang.html#method_isDate)
- [`YUILang.isFunction`](http://yuilibrary.com/yui/docs/api/classes/Lang.html#method_isFunction)
- [`YUILang.isNull`](http://yuilibrary.com/yui/docs/api/classes/Lang.html#method_isNull)
- [`YUILang.isNumber`](http://yuilibrary.com/yui/docs/api/classes/Lang.html#method_isNumber)
- [`YUILang.isObject`](http://yuilibrary.com/yui/docs/api/classes/Lang.html#method_isObject)
- [`YUILang.isString`](http://yuilibrary.com/yui/docs/api/classes/Lang.html#method_isString)
- [`YUILang.isValue`](http://yuilibrary.com/yui/docs/api/classes/Lang.html#method_isValue)

###Array functions

[**YUIArray.js**](./YUIPort/blob/master/YUIArray.js) (requires [YUILang.js](https://github.com/gso/YUIPort/tree/master/source), ported from [yui-array.js](http://yuilibrary.com/yui/docs/api/classes/Array.html))

- [`YUIArray.dedupe`](http://yuilibrary.com/yui/docs/api/classes/Array.html#method_dedupe)
- [`YUIArray.each`](http://yuilibrary.com/yui/docs/api/classes/Array.html#method_each)
- [`YUIArray.hash`](http://yuilibrary.com/yui/docs/api/classes/Array.html#method_hash)
- [`YUIArray.indexOf`](http://yuilibrary.com/yui/docs/api/classes/Array.html#method_indexOf)
- [`YUIArray.numericSort`](http://yuilibrary.com/yui/docs/api/classes/Array.html#method_numericSort)
- [`YUIArray.some`](http://yuilibrary.com/yui/docs/api/classes/Array.html#method_some)
- [`YUIArray.test`](http://yuilibrary.com/yui/docs/api/classes/Array.html#method_test)

###Date functions

[**YUILangX.js**](./YUIPort/blob/master/YUILangX.js)

- [`YUILangX.datesAreEqual`](./YUIPort/blob/master/YUILangX.js)
- [`YUILangX.timesAreEqual`](./YUIPort/blob/master/YUILangX.js)

###Hash functions

[**YUIObject.js**](./YUIPort/blob/master/YUIObject.js) (requires [YUILang.js](https://github.com/gso/YUIPort/tree/master/source) and [YUIArray.js](https://github.com/gso/YUIPort/tree/master/source) for the `.hasValue` method, ported from [yui-object.js](http://yuilibrary.com/yui/docs/api/classes/Object.html))

- [`YUIObject.owns`](http://yuilibrary.com/yui/docs/api/classes/Object.html#method_owns)
- [`YUIObject.hasKey`](http://yuilibrary.com/yui/docs/api/classes/Object.html#method_hasKey)
- [`YUIObject.hasValue`](http://yuilibrary.com/yui/docs/api/classes/Object.html#method_hasValue)
- [`YUIObject.keys`](http://yuilibrary.com/yui/docs/api/classes/Object.html#method_keys)
- [`YUIObject.values`](http://yuilibrary.com/yui/docs/api/classes/Object.html#method_values)
- [`YUIObject.size`](http://yuilibrary.com/yui/docs/api/classes/Object.html#method_size)
- [`YUIObject.each`](http://yuilibrary.com/yui/docs/api/classes/Object.html#method_each)
- [`YUIObject.some`](http://yuilibrary.com/yui/docs/api/classes/Object.html#method_some)
- [`YUIObject.getValue`](http://yuilibrary.com/yui/docs/api/classes/Object.html#method_getValue)
- [`YUIObject.setValue`](http://yuilibrary.com/yui/docs/api/classes/Object.html#method_setValue)
- [`YUIObject.isEmpty`](http://yuilibrary.com/yui/docs/api/classes/Object.html#method_isEmpty)

##YUILog Usage

`.log()` log messages can be disabled with the boolean
[YUILog_config.js](./YUIPort/blob/master/YUILang_config.js)`debug` option - however 
if a message is displayed using the `.message()` function instead of `.log()`,
then the message is logged to the console irrespective of the `debug` setting.

The `logInclude` and `logExclude` config properties 
should be literal objects with `filename : [boolean]` values.

If the `src` source filename argument is given as an argument to a log function
then if `logInclude` is not empty, `src` will have to be a `true` property of 
`logInclude`for the log message to be displayed.  If `src` is a `true` property of 
`logExclude`, then if it is not included as a `logInclude` file, the log 
message will be suppressed.

Additional config options include for a custom logging function (the current 
code should support `console.log` and Opera's browser console).

##Copyright

BSD License, as per the [YUI Software License Agreement](http://yuilibrary.com/license/).

##Developers

Changelogs for the YUI3 source base from which the project is ported 
can be found on the [YUI3 github repository](https://github.com/yui/yui3):
- for the the **assert** functions listed above
(ported from 
[/src/test/**Assert.js**](http://yuilibrary.com/yui/docs/api/classes/Test.Assert.html), 
[/src/test/**AssertionError.js**](http://yuilibrary.com/yui/docs/api/classes/Test.AssertionError.html), 
[/src/test/**ComparisonFailure.js**](http://yuilibrary.com/yui/docs/api/classes/Test.ComparisonFailure.html), 
[/src/test/**UnexpectedValue.js**](http://yuilibrary.com/yui/docs/api/classes/Test.UnexpectedValue.html),
[/src/test/**ArrayAssert.js**](http://yuilibrary.com/yui/docs/api/classes/Test.ArrayAssert.html),
[/src/test/**DateAssert.js**](http://yuilibrary.com/yui/docs/api/classes/Test.DateAssert.html),
[/src/test/**ObjectAssert.js**](http://yuilibrary.com/yui/docs/api/classes/Test.ObjectAssert.html)) - 
changelog [**/src/test/README**](https://github.com/yui/yui3/tree/master/src/test)
- for the the **log**, **type test**, **array** and **hash** functions
(ported from 
[/src/yui/**yui.js**](http://yuilibrary.com/yui/docs/api/classes/YUI.html),
[/src/yui/**yui-lang.js**](http://yuilibrary.com/yui/docs/api/classes/Lang.html),
[/src/yui/**yui-array.js**](http://yuilibrary.com/yui/docs/api/classes/Array.html),
[/src/yui/**yui-object.js**](http://yuilibrary.com/yui/docs/api/classes/Object.html)) -
changelog [**/src/yui/HISTORY.md**](https://github.com/yui/yui3/blob/master/src/yui/HISTORY.md).

As of 19 May 2012 the ported code is consistent with the producton release at that 
point, YUI 3.5.1.

##Alternative Libraries

Assert libraries:

[assert.js](https://github.com/Jxck/assert) - standalone port of [node assert functions](http://nodejs.org/api/assert.html)  
[jShould](https://github.com/eliperelman/jShould) - QUnit extension  
[should.js](https://github.com/visionmedia/should.js) - node library  
[expect.js](https://github.com/LearnBoost/expect.js) - based on should.js, standalone  
[chai](https://github.com/chaijs/chai) - node and standalone, plugin architecture (inc. JQuery plugin)  
[expectThat](https://github.com/dmohl/expectThat) - CoffeeScript

Log libraries:

[log4javascript](http://log4javascript.org/) - based on log4j  
[log4js](http://log4js.berlios.de/) - API very similar to log4j  
[JavaScript Debug](http://benalman.com/projects/javascript-debug-console-log/) - wrapper for console.log  
[console.log-wrapper](https://github.com/cpatik/console.log-wrapper) - console.log wrapper

The concept of logging was popularized by Apache’s Log4J package for Java 
which has since become the common logging standard.

##Changelog

06 May 2012 - RC1 uploaded (minor code fixes may follow).
