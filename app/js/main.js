$(function working() {
  $('.header__slider').each(function () {
    $(this).slick({
      dots: false,
      autoplay: true,
      fade: true,
      prevArrow: '<button class="slick-prev" type="button"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7501 7.5C18.7507 7.79206 18.6489 8.0751 18.4626 8.29999L12.8626 15L18.2626 21.7125C18.3664 21.8404 18.444 21.9875 18.4907 22.1454C18.5375 22.3033 18.5527 22.4689 18.5352 22.6327C18.5178 22.7965 18.4682 22.9552 18.3892 23.0998C18.3102 23.2443 18.2035 23.3718 18.0751 23.475C17.9472 23.5788 17.8001 23.6564 17.6422 23.7032C17.4843 23.7499 17.3186 23.7651 17.1549 23.7476C16.9911 23.7302 16.8323 23.6806 16.6878 23.6016C16.5432 23.5227 16.4157 23.4159 16.3126 23.2875L10.2751 15.7875C10.0912 15.5638 9.99072 15.2833 9.99072 14.9937C9.99072 14.7042 10.0912 14.4237 10.2751 14.2L16.5251 6.7C16.63 6.57342 16.7589 6.46879 16.9043 6.39211C17.0498 6.31541 17.2089 6.26817 17.3726 6.25307C17.5363 6.23798 17.7014 6.25533 17.8584 6.30414C18.0154 6.35294 18.1613 6.43224 18.2876 6.53749C18.431 6.65381 18.5468 6.80045 18.6268 6.96687C18.7068 7.13329 18.7489 7.31536 18.7501 7.5Z" fill="#976464"/></svg></button>',
      nextArrow: '<button class="slick-next" type="button"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2499 22.5C11.2493 22.2079 11.3511 21.9249 11.5374 21.7L17.1374 15L11.7374 8.2875C11.6336 8.15964 11.556 8.01252 11.5093 7.8546C11.4625 7.69668 11.4473 7.53106 11.4648 7.36728C11.4822 7.20349 11.5318 7.04476 11.6108 6.90022C11.6898 6.75567 11.7965 6.62816 11.9249 6.525C12.0528 6.42117 12.1999 6.34363 12.3578 6.29684C12.5157 6.25005 12.6814 6.23494 12.8451 6.25236C13.0089 6.26978 13.1677 6.31941 13.3122 6.39837C13.4568 6.47734 13.5843 6.5841 13.6874 6.7125L19.7249 14.2125C19.9088 14.4362 20.0093 14.7167 20.0093 15.0063C20.0093 15.2958 19.9088 15.5763 19.7249 15.8L13.4749 23.3C13.37 23.4266 13.2411 23.5312 13.0957 23.6079C12.9502 23.6846 12.7911 23.7318 12.6274 23.7469C12.4637 23.762 12.2986 23.7447 12.1416 23.6959C11.9846 23.6471 11.8387 23.5678 11.7124 23.4625C11.569 23.3462 11.4532 23.1995 11.3732 23.0331C11.2932 22.8667 11.2511 22.6846 11.2499 22.5Z" fill="#976464"/></svg>',
    });
    $(".header__slider").on('afterChange', function (event, slick, currentSlide) {
      $(".slider__counter").text(currentSlide + 1);
    });
  });

  // Products slider

  $('.products__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    prevArrow: '<button class="slick-prev" type="button"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.7501 7.5C18.7507 7.79206 18.6489 8.0751 18.4626 8.29999L12.8626 15L18.2626 21.7125C18.3664 21.8404 18.444 21.9875 18.4907 22.1454C18.5375 22.3033 18.5527 22.4689 18.5352 22.6327C18.5178 22.7965 18.4682 22.9552 18.3892 23.0998C18.3102 23.2443 18.2035 23.3718 18.0751 23.475C17.9472 23.5788 17.8001 23.6564 17.6422 23.7032C17.4843 23.7499 17.3186 23.7651 17.1549 23.7476C16.9911 23.7302 16.8323 23.6806 16.6878 23.6016C16.5432 23.5227 16.4157 23.4159 16.3126 23.2875L10.2751 15.7875C10.0912 15.5638 9.99072 15.2833 9.99072 14.9937C9.99072 14.7042 10.0912 14.4237 10.2751 14.2L16.5251 6.7C16.63 6.57342 16.7589 6.46879 16.9043 6.39211C17.0498 6.31541 17.2089 6.26817 17.3726 6.25307C17.5363 6.23798 17.7014 6.25533 17.8584 6.30414C18.0154 6.35294 18.1613 6.43224 18.2876 6.53749C18.431 6.65381 18.5468 6.80045 18.6268 6.96687C18.7068 7.13329 18.7489 7.31536 18.7501 7.5Z" fill="#976464"/></svg></button>',
    nextArrow: '<button class="slick-next" type="button"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2499 22.5C11.2493 22.2079 11.3511 21.9249 11.5374 21.7L17.1374 15L11.7374 8.2875C11.6336 8.15964 11.556 8.01252 11.5093 7.8546C11.4625 7.69668 11.4473 7.53106 11.4648 7.36728C11.4822 7.20349 11.5318 7.04476 11.6108 6.90022C11.6898 6.75567 11.7965 6.62816 11.9249 6.525C12.0528 6.42117 12.1999 6.34363 12.3578 6.29684C12.5157 6.25005 12.6814 6.23494 12.8451 6.25236C13.0089 6.26978 13.1677 6.31941 13.3122 6.39837C13.4568 6.47734 13.5843 6.5841 13.6874 6.7125L19.7249 14.2125C19.9088 14.4362 20.0093 14.7167 20.0093 15.0063C20.0093 15.2958 19.9088 15.5763 19.7249 15.8L13.4749 23.3C13.37 23.4266 13.2411 23.5312 13.0957 23.6079C12.9502 23.6846 12.7911 23.7318 12.6274 23.7469C12.4637 23.762 12.2986 23.7447 12.1416 23.6959C11.9846 23.6471 11.8387 23.5678 11.7124 23.4625C11.569 23.3462 11.4532 23.1995 11.3732 23.0331C11.2932 22.8667 11.2511 22.6846 11.2499 22.5Z" fill="#976464"/></svg>',
    responsive: [{
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
          infinite: true,
        }
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          dots: true,
          arrows: false,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1028,
        settings: {
          slidesToShow: 3,
          // dots: true,
          arrows: false,
          // slidesToScroll: 2,
        }
      },
      {
        breakpoint: 821,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      },

    ]
  });

  $('.header__search-form').on('click', function () {
    $('.search-btn').addClass('active');
    $('.menu').addClass('hide-item');
    $('.cross-btn').addClass('active');
    $('.header__search-form').addClass('on');
  });

  $('.cross-btn').on('click', function () {
    $('.search-btn').removeClass('active');
    $('.menu').removeClass('hide-item');
    $('.cross-btn').removeClass('active');
    $('.header__search-form').removeClass('on');
  });

  // hamburger button

  // $.fn.check = function () {
  //   if ($('.header__menu').hasClass('scroll')) {
  //     $('.header__menu').removeClass('scroll');
  //   } else {
  //     $('.header__menu').addClass('scroll');
  //   }
  // };
  //tried to draw header__menu's background at the start position, 
  //but header-wrapper has position: absolute ._. check it later

  $('.menu-btn').on('click', function () {
    $('.hamburger').toggleClass('on');
    $('.menu').toggleClass('active');
    $('.body').toggleClass('lock');
    
    
    // $('header__menu').addClass('scroll');
  });

  $('.menu__link').on('click', function () {
    $('.hamburger').removeClass('on');
    $('.menu').removeClass('active');
    $('.body').removeClass('lock');
  });

  // Products__slider filter

  var filtered = false;

  $('#agree').on('click', function () {
    $('.checkbox__text-2').toggleClass('active');
    $('.checkbox__text').toggleClass('active');

    if (filtered === false) {
      $('.products__slider').slick('slickFilter', ':even');
      filtered = true;
    } else {
      $('.products__slider').slick('slickUnfilter');
      filtered = false;
    }
  });

  // Sticky scroll
  $(window).scroll(function () {
    $scrollPosition = $(window).scrollTop();
    // console.log($scrollPosition);
    if ($scrollPosition > 62) {
      $('.header__menu').addClass('scroll');
    } else {
      $('.header__menu').removeClass('scroll');
    }
  });

  // Scroll reveal
  // window.sr = ScrollReveal();

  // sr.reveal('.animate-left', {
  // origin: 'left',
  // duration: 1500,
  // distance: "25rem",
  // delay: 600,
  // });

  // sr.reveal('.animate-right', {
  // origin: 'right',
  // duration: 1500,
  // distance: "25rem",
  // delay: 600,
  // });

  // sr.reveal('.animate-top', {
  // origin: 'top',
  // duration: 1000,
  // distance: "25rem",
  // delay: 600,
  // });

  // sr.reveal('.animate-bottom', {
  // origin: 'bottom',
  // duration: 1000,
  // distance: "25rem",
  // delay: 600,
  // });

});