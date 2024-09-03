"use strict";
//khowlage
function HomePageSlider() {
  // Initialize slick slider for .slider-nav
  $('.slider-nav').slick({
    slidesToShow: 1,
    pauseOnHover: false,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    fade:true,
    autoplay: true,
    autoplaySpeed: 6000,
    focusOnSelect: true,
    pauseOnHover:false,
    dotsClass: 'slider-dots',
    appendDots: $('.slider-dots-box'), // Ensure this is applied correctly
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Handle before slide change event
  $('.slider-nav, .slider-nav_detail').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.slider-dots-box button').html('');
  }).trigger('beforeChange');

  // Handle after slide change event
  $('.slider-nav , .slider-nav_detail').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-dots-box button').html('');
    $('.slider-dots-box .slick-active button').html(`
      <svg class="progress-svg" width="14" height="14">
        <g transform="translate(7,7)">
          <circle class="circle-go" r="6" cx="0" cy="0"></circle>
        </g>
      </svg>
    `);
  }).trigger('afterChange');
}


//vertical HomePageSlidertow
function HomePageSlidertow() {
  const $arrowWrapper = $('.carousel-timeline__pager');
  $('.project-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: false,
    pauseOnHover: false,
    autoplaySpeed: 6000,
    variableHeight: true,
    verticalSwiping: true,
    asNavFor: '.slider-nav_detail', // Ensure this matches the class of the related slider
    arrows: true,
    infinite: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding:'36px',
    appendArrows: $arrowWrapper,
    vertical: true,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 5,
          vertical: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          vertical: false
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
          vertical: false
        }
      }
    ],
  });
}


//Projectdetail
function Projectdetail(){
  $('.slider-nav_detail').slick({
    slidesToShow: 1,
    pauseOnHover:false,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 6000,
    focusOnSelect: true,
    fade: true,
    infinite: false,
    adaptiveHeight:false,
    dotsClass: 'slider-dots',
    appendDots: $('.slider-dots-box'), 
    asNavFor: '.project-slider',
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

}

function LeftContent() {
  $(".menu__header-btn").on('click mouseenter', function () {
    $(this).toggleClass("toggle_btn");
    $("body").addClass("active");
    $(".offcanvas__area-pop-up").addClass("offcanvas-opened");
    $(".bg-pop-up").addClass("openeds");
  });
}

//Offcanvas
function Offcanvas() {
  $(".close-btn,.bg-pop-up").on('click', function () {
    $("body").removeClass("active")
    $(".offcanvas__area-pop-up").removeClass("offcanvas-opened");
    $(".bg-pop-up").removeClass("openeds");
  })


  $(".offcanvas__area-pop-up").on('mouseleave', function () {
    $("body").removeClass("active");
    $(".offcanvas__area-pop-up").removeClass("offcanvas-opened");
    $(".bg-pop-up").removeClass("openeds");
  });
}
//adjustBoxPosition
function adjustBoxPosition() {
  var box = $('.js_project_banner');
  var tabContent = $('.home_banner_img');
    if (tabContent.height() <= $(window).height()) {
      box.css('position', 'absolute');
      tabContent.css('position', 'relative');
    } else {  
      if ($(window).scrollTop() >= 100) {
        box.css('position', 'absolute');
        box.css('transition', '.3s ease');
      } else {
        box.css({
          'position': 'fixed',
          'bottom': '0',
          'left': '0',
          'transition': '.3s ease'
        });
      }
    }
   
}


$(window).on('resize scroll load', adjustBoxPosition);


$(document).ready(function () {
  HomePageSlider(),
    LeftContent(),
    Offcanvas(),
    adjustBoxPosition(),
    HomePageSlidertow(),
    Projectdetail()
  
});



$(window).on('scroll resize', function() {
  const initialWindowHeight = $(window).outerHeight();
  const header = $('.header'); // Select .header element
  const banner = $('.custom__banner');
  let bannerHeight = 0;

  if (banner.length > 0) {
    bannerHeight = banner.outerHeight() - 400;
  }

  const windowHeight = $(window).height();
  const scrollPosition = $(window).scrollTop();
  
  // Determine if the class should be added
  let shouldAddClass = windowHeight < initialWindowHeight;
  
  // If bannerHeight is greater than zero, include it in the condition
  if (bannerHeight > 0) {
    shouldAddClass = shouldAddClass || scrollPosition >= bannerHeight;
  }

  if (shouldAddClass) {
    header.addClass('scrolled');
  } else {
    header.removeClass('scrolled');
  }
});
