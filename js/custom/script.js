/**
 * Custom Scripts.
 */
(function ($) {
  // Tabs.
  if ($('.content-tabs').length) {
    $('.content-tabs a').click(function(e) {
      $(this).tab('show');

      e.preventDefault();
    })
  }

  // Image Gallery.
  if ($('.image-gallery__slider').length) {
    $('.image-gallery-nav__slider').flexslider({
      animation: "slide",
      controlNav: false,
      prevText: "&#xf053;",
      nextText: "&#xf054;",
      animationLoop: false,
      slideshow: false,
      itemWidth: 90,
      itemMargin: 10,
      asNavFor: '.image-gallery__slider',
      keyboard: false,
      multipleKeyboard: true
    });

    $('.image-gallery__slider').flexslider({
      animation: "fade",
      controlNav: false,
      prevText: "&#xf053;",
      nextText: "&#xf054;",
      directionNav: false,
      animationLoop: false,
      slideshow: false,
      sync: ".image-gallery-nav__slider",
      keyboard: true,
      multipleKeyboard: true
    });

    // Image Gallery Hover.
    $(".image-gallery__slider").hover(function() {
      $(this).find('ul.flex-direction-nav').stop(true, true).fadeIn('fast');

      // Caption
      $(this).find('.image-gallery__caption').stop(true, true).fadeIn('fast');
    }, function() {
      $(this).find('ul.flex-direction-nav').stop(true, true).fadeOut('fast');

      // Caption
      $(this).find('.image-gallery__caption').fadeOut('fast');
    });
  }

  function attachAccordionClick() {
    $(".base-accordion__header").click(function(e) {
      var _this = $(this);
      var _parent = _this.parent();
      var _thisBody = _this.parent().find('.base-accordion__content');

      _parent.toggleClass('active');

      _this.parent().find('.base-accordion__content').toggle('fast');
      $('.base-accordion__content').not(_thisBody).hide('fast');
      $('.base-accordion__item').not(_parent).removeClass('active');

      e.preventDefault();
    });
  }

  attachAccordionClick();

  // Attach on Ajax complete for accordion returned by view.
  $(document).ajaxComplete(function() {
    attachAccordionClick();
  });
})(jQuery);
