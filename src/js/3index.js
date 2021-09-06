// SLICK

$('.billboard-caption').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: false,
  cssEase: 'linear',
  autoplay: true,
});

$('.slick-three').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  centerMode: true,
  centerPadding: '0',
  autoplay: true,
  dots: true,
   responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        dots:false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
      }
    }
  ]
});

// Testimonial Slide
$('.testimonial-slide').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: false,
  cssEase: 'linear',
  autoplay: true,
});