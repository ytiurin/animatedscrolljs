/**
* AnimatedScroll.js - Developer version
* Smooth, animated document scroll to a specific element, supporting native jQuery UI easings.
* https://github.com/yevhentiurin/animatedscrolljs
*
* By Yevhen Tiurin <yevhentiurin@gmail.com>, Mikhail Semakhin <mike.semakhin@gmail.com>, Carlo Alberto Ferraris <cafxx@cafxx.strayorange.com>
* Licensed under the LGPL Version 3 license.
* http://www.gnu.org/licenses/lgpl.txt
*
**/

(function($) 
{
  //***************************
  $.animatedScroll = 
  {
    animateOptions: {},
    offsetFromTarget: 
    {
      left: "50%",
      top: "50%"
    }
  };

  //***************************
  $.fn.animatedScroll = function(animateOptions, offsetFromTarget) 
  {
    animateOptions = $.extend({}, $.animatedScroll.animateOptions, animateOptions);
    offsetFromTarget = $.extend({}, $.animatedScroll.offsetFromTarget, offsetFromTarget);

    AnimatedScroll(this.get(0), animateOptions, offsetFromTarget);

    return this;
  };

  //***************************
  function AnimatedScroll(element, animateOptions, offsetFromTarget)
  {
    var $window, $body, $element, 
      viewportWidth, viewportHeight, viewportLeft, viewportTop,
      targetWidth, targetHeight, targetLeft, targetTop,
      bodyWidth, bodyHeight, 
      offsetLeft, offsetTop,
      animateLeft, animateTop, animateStep, animateComplete;

    function parseOffsetValue(targetValue, offsetValue)
    {
      var parsedOffsetValue = parseInt(offsetValue);

      if (isNaN(parsedOffsetValue))
        return 0;

      if (offsetValue.indexOf !== undefined)
      {
          if (offsetValue.indexOf("%") > -1)
          {
            return (targetValue * parsedOffsetValue / 100);
          }
      };

      return parsedOffsetValue; 
    };

    $window = $(window);
    $body = $(document.body);
    $element = $(element);

    viewportWidth = window.innerWidth - 20;
    viewportHeight = window.innerHeight - 20;
    viewportLeft = $window.scrollLeft();
    viewportTop = $window.scrollTop();

    targetWidth = $element.outerWidth();
    targetHeight = $element.outerHeight();
    targetLeft = $element.offset().left;
    targetTop = $element.offset().top;

    bodyWidth = $body.outerWidth();
    bodyHeight = $body.outerHeight();
    offsetLeft = parseOffsetValue(targetWidth, offsetFromTarget.left);
    offsetTop = parseOffsetValue(targetHeight, offsetFromTarget.top);
    
    animateLeft = targetLeft + offsetLeft - (viewportWidth / 2);
    animateLeft = animateLeft < 0 ? 0 : (animateLeft + viewportWidth > bodyWidth ? bodyWidth - viewportWidth : animateLeft);
    animateTop = targetTop + offsetTop - (viewportHeight / 2);
    animateTop = animateTop < 0 ? 0 : (animateTop + viewportHeight > bodyHeight ? bodyHeight - viewportHeight : animateTop);

    animateStep = animateOptions.step;
    animateComplete = animateOptions.complete;

    animateOptions = $.extend({}, animateOptions, 
      {
        step: function(now, tween)
        {
          tween.elem.scrollIntoView(true);
          
          if (typeof animateStep == "function")
          {
            animateStep.apply(this, arguments);
          };
        },
        complete: function()
        {
          this.scrollIntoView(true);
          $(this).remove();

          if (typeof animateComplete == "function")
          {
            animateComplete.apply(this, arguments);
          };
        }
      }
    );

    $("<div/>")
      .css(
        {
          visibility: 'hidden',
          position: "absolute", 
          width: viewportWidth, 
          height: viewportHeight, 
          left: viewportLeft,
          top: viewportTop
        }
      )
      .appendTo(document.body)
      .animate({left: animateLeft, top: animateTop}, animateOptions);
  };

})(jQuery);
