AnimatedScroll.js
================
Smooth, animated document scroll to a specific element, supporting native jQuery UI easings.

Usage
-----
```javascript
$("#footer").animatedScroll(
  {
    duration: 'normal', 
    easing: 'easeOutExpo'
  }
);
```
.animatedScroll() method's first parameter dublicates the "options" parameter from jQuery native [.animate()](http://api.jquery.com/animate/#animate-properties-options) method.

Demonstration
-------------
Check it in action on [demo page](https://yevhentiurin.github.com/animatedscrolljs).

Dependency
----------
Requires [jQuery](http://jquery.com/) 1.3 or newer. 
Optional [jQuery Easing Plugin](http://gsgd.co.uk/sandbox/jquery/easing/) to give advanced easing options.

Compatibility
-------------
Works with all versions of browsers that support jQuery 1.3 including IE7.

Download
--------
Get [development version](https://raw.github.com/yevhentiurin/animatedscrolljs/master/releases/jquery.animatedscroll-1.0.1.js) ~2.5KB or [minified version](https://raw.github.com/yevhentiurin/animatedscrolljs/master/releases/jquery.animatedscroll-1.0.1.min.js) only ~1.5KB