$(function () {


  $(".slider__inner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider__navigator",
  });



  $(".slider__navigator").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: ".slider__inner",
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 330,
        settings: {
          slidesToShow: 1
        }
      }
     ]
  });

  $(".header__menu-btn").on("click", function () {
    $(".header__menu > ul").slideToggle();
  });
});
