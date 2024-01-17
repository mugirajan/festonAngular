

  if (jQuery(".h-2-product-active").length > 0) {
    let swiper2 = new Swiper('.h-2-product-active', {
      slidesPerView: 5,
      spaceBetween: 30,
      loop: false,
  
  
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        700: {
          slidesPerView: 2,
          spaceBetween: 40
          },
        1040: {
          slidesPerView: 3,
          spaceBetween: 40
          },
          1200: {
          slidesPerView: 3,
          spaceBetween: 40
          },
          1600: {
          slidesPerView: 5,
          spaceBetween: 40
          },
        }
    })
    
  }
  