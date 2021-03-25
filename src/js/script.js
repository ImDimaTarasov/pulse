$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/carouselArrow/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/carouselArrow/right.png"></button>',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                dots: true,
                arrows: false,
              }
            },
          ]
      });
  });