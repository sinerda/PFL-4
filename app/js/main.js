$(function () {
  $('.menu__btn-open').on('click', function () {
    $('.menu__main').removeClass('menu__main--close');
  })
  $('.menu__btn-close').on('click', function () {
    $('.menu__main').addClass('menu__main--close');
  })

  $('.header-slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false
  });
})
