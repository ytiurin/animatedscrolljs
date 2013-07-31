/**
* AnimatedScroll.js v1.0.0
* Smooth, animated document scroll to a specific element, supporting native jQuery UI easings.
* https://github.com/yevhentiurin/animatedscrolljs
*
* Copyright (c) 2013 Yevhen Tiurin
* Licensed under the LGPL Version 3 license.
* http://www.gnu.org/licenses/lgpl.txt
*
* Date: July 31, 2013
**/

(function($) 
{
  //***************************
  $.fn.animatedScroll = function(options) 
  {
    AnimatedScroll(this.get(0), options);

    return this;
  };

  //***************************
  function AnimatedScroll(element, options)
  {
    var viewportWidth, viewportHeight, targetWidth, targetHeight, 
      documentWidth, documentHeight, targetLeft, targetTop,
      animateLeft, animateTop, animateParameters;

    viewportWidth = $(window).width();
    viewportHeight = $(window).height();
    targetWidth = $(element).width();
    targetHeight = $(element).height();
    documentWidth = $(document).width();
    documentHeight = $(document).height();
    targetLeft = $(element).offset().left;
    targetTop = $(element).offset().top;

    animateLeft = targetLeft - ((viewportWidth - targetWidth) / 2);
    animateLeft = animateLeft < 0 ? 0 : (animateLeft + viewportWidth > documentWidth ? documentWidth - viewportWidth : animateLeft);
    animateTop = targetTop - ((viewportHeight - targetHeight) / 2);
    animateTop = animateTop < 0 ? 0 : (animateTop + viewportHeight > documentHeight ? documentHeight - viewportHeight : animateTop);

    animateParameters = $.extend({}, options, 
      {
        step: function(now, tween)
        {
          tween.elem.scrollIntoView(true);
          
          if (typeof options.step == "function")
          {
            options.step.apply(this, arguments);
          };
        },
        always: function()
        {
          this.scrollIntoView(true);
          $(this).detach();

          if (typeof options.always == "function")
          {
            options.always.apply(this, arguments);
          };
        }
      }
    );

    $("<div/>")
      .css(
        {
          visibility: 'hidden',
          //background: 'red', 
          position: "absolute", 
          width: viewportWidth, 
          height: viewportHeight, 
          left: $(window).scrollLeft(),
          top: $(window).scrollTop()
        }
      )
      .appendTo(document.body)
      .animate({left: animateLeft, top: animateTop}, animateParameters);
  };

})(jQuery);
