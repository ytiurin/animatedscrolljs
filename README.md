AnimatedScroll.js
================
Smooth, animated document scroll to a specific element, supporting native jQuery UI easings.

Demonstration
-------------
Check it in action on [demo page](https://yevhentiurin.github.com/animatedscrolljs).

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

Documentation
-----------
```javascript 
.animatedScroll([animateOptions][, offsetFromTarget])
```

- ```animateOptions``` parameter dublicates the ```options``` parameter from jQuery native [```.animate()```](http://api.jquery.com/animate/#animate-properties-options) method.
- ```offsetFromTarget``` is an object with ```left``` and ```top``` properties, representing the offset of viewport center to target element left and top edge in the end of animation. ```left``` and ```top``` properties may be absolute values like ```100``` or ```"100px"```, giving the number of pixels for offset, or it may carry percentage values like ```"50%"```, so that the offset would be calculated, depending on target element size. The **default** ```offsetFromTarget``` value is ```{left: "50%", top: "50%"}```.

Dependency
----------
Requires [jQuery](http://jquery.com/) 1.3 or newer. Optional [jQuery Easing Plugin](http://gsgd.co.uk/sandbox/jquery/easing/) to give advanced easing options.

Compatibility
-------------
Works with all versions of browsers that support jQuery 1.3, including IE7.

Download
--------
Get latest [development version](https://raw.github.com/yevhentiurin/animatedscrolljs/master/releases/jquery.animatedscroll-1.1.5.js) ~3.5KB or [minified version](https://raw.github.com/yevhentiurin/animatedscrolljs/master/releases/jquery.animatedscroll-1.1.5.min.js) only ~2KB