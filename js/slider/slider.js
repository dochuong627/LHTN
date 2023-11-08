/*scrolling banner*/
(function ($) {
    "use strict";
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      nav: true,
      dots: true,

      mouseDrag: true,
      responsiveClass: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      navText: ['<a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev"><img src="img/vectorBtnPrev.svg" alt="Prev" /></a>', '<a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next"><img src="img/vectorBtnNext.svg" alt="Next" /></a>'],
      responsive: {
        0: {
          items: 1,
          nav: true
        },
        600: {
          items: 1,
          nav: true
        },
        768: {
          items: 2,
          nav: true,
          loop: true,
          margin: 20
        }
      }
    })
  })(jQuery);