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