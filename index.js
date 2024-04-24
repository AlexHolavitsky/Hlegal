
//slick-slider

const settingSlider = {
    dots: true,
    arrows: true,
    infinite: true,
    lazyLoad: 'ondemand',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    focusOnSelect: true,
    autoplaySpeed: 3000,
    mobileFirst: true,
    responsive: [
      // {
      //   breakpoint:1024,
      //   settings:'unslick'
      // }
    ]
  }
  
  
  $(document).ready(function () {
    $('.slider').slick(settingSlider);
  })
  
  
  $(window).on('resize', function () {
    const width = $(window).width()
    console.log(width, '==> screen width')
  
    // if (width > 320 && !$('.slider').hasClass('slick-initialized')) {
    //   $('.slider').slick(settingSlider);
    // }
    // if (width >= 1025 && $('.slider').hasClass('slick-initialized')) {
    //   $('.slider').slick('unslick');
    // }
  });

  //jQuerry-menu

  $(document).ready(function () {
    $(".arrow").on("click", function (event) {
      event.preventDefault();
      const id = $(this).attr('href'),
        top = $(id).offset().top;
      $('body,html').animate({ scrollTop: top }, 800);
    });
  
  })