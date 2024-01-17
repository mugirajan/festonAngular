(function ($) {
    "use strict";
  
    $(window).on("load", function () {
      /*--------------------- PRELOADER --------------------*/
      $("body").addClass("animated-page page-loaded");
  
      /*----------------------- WOW ------------------------*/
      if ($(".wow")[0]) {
        new WOW({
          mobile: false,
        }).init();
      }
  
      /* ----------------- SLIDER HOME ONE ---------------- */
      if ($(".main-slider")[0]) {
        $(".main-slider").slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: true,
          speed: 1000,
          fade: true,
          cssEase: "ease-in-out",
          cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
          touchThreshold: 100,
          nextArrow:
            '<span class="slick-arrow-next"><i class="fa fa-angle-down" aria-hidden="true"></i></span>',
          prevArrow:
            '<span class="slick-arrow-prev"><i class="fa fa-angle-up" aria-hidden="true"></i></span>',
          appendArrows: $(".main-slide-navigation"),
          appendDots: $(".main-slide-navigation"),
          autoplay: false,
          autoplaySpeed: 4500,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: false,
                arrows: false,
              },
            },
          ],
        });
      }
    });
  })(jQuery);
  

 