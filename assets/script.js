// (function($) {
//   $.fn.hasScrollBar = function() {
//       return this.get(0).scrollHeight > this.height();
//   }
// })(jQuery);



$(document).ready(function () {

  document.getElementById("video__1").play();
  var width = document.documentElement.clientWidth;
  if(width > 1000){
    var links = document.getElementById("menu").querySelectorAll("a"),
        hrefs = ['#block-1', '#block-2', '#block-3', '#block-4','#block-5','#block-6','#block-7','#footer'];
    for(var i = 0; i < links.length; i++){
      links[i].href = hrefs[i];
    }
    $("#fullpage").fullpage({
      menu:'#menu',
      // scrollOverflow:true,
      slidesNavigation: true,   
      sectionSelector: '.section',
      navigation: true,
      parallax: true,
      parallaxOptions: {
        type: 'reveal',
        percentage: 62,
        property: 'translate'
      },
      navigationPosition: 'right' ,
  //    navigationTooltips: ['Р“Р»Р°РІРЅР°СЏ', 'РўРµС…РЅРѕР»РѕРіРёРё','Р Р°Р·СЂР°Р±РѕС‚РєР°','РљР»РёРµРЅС‚С‹','РџРѕСЃС‚Р°РІРєР°', 'РљРѕРЅС‚Р°РєС‚С‹'],
      // scrollOverflow:true,
      anchors: ['main', 'block-1', 'block-2', 'block-3', 'block-4','block-5','block-6','block-7','footer'],
      css3: true,
      // responsiveWidth: 992,
      scrollingSpeed: 1000,
      normalScrollElements: "#home"
    })
  }

  // console.log(navLinkPadding);

  function adjustNavItemWidth() {
    
    var navLinkPadding = $('.nav-link').css('padding-left');
    var navLinkPadding = parseFloat(navLinkPadding.substring(0, navLinkPadding.length - 2));

    $('.nav-item').each(function() {
      if (window.matchMedia('(min-width: 992px)').matches) {
        // $('.nav-item').each(function() {
          $(this).width('auto');
        $(this).width($(this).children('.nav-link').width() + 2 * navLinkPadding + 1);
      // });
      } else {
        $(this).width('auto');
      }
    });
  

    
}




  // if($('.scrollable-content').hasScrollBar()) {
  //   $(this).css('background-color', 'red');
  // } else {
  //   $(this).css('background-color', 'green');
  // }

  $('.navbar-nav .nav-item').click(function () {
    $('.navbar-nav .nav-item').removeClass('active');
    $(this).addClass('active');
  });

  $('.navbar-toggler').on('click', function () {
    $(this).toggleClass('is-active');
    $('.navbar-collapse.show[id]').each(function () {
      $('.navbar-toggler.is-active[data-target="#' + $(this).attr('id') + '"]').click();
    });
  });

  // $('a[href^="#"]').click(function () {
  //   $('html, body').animate({
  //     scrollTop: $($(this).attr('href')).offset().top - 40
  //   }, 500);
  // });

  $(document).on('click', '.accordion .card-header button', function () {

    $('.accordion .card-header button').children('img').attr('src', 'assets/img/plus-icon.png');

    var ariaExpanded = $(this).attr('aria-expanded');
    if (ariaExpanded == 'true') {
      $(this).children('img').attr('src', 'assets/img/minus-icon.png');
    } 
    // else {
    //   $(this).children('img').attr('src', 'assets/img/plus-icon.png');
    // }
  });

  $('.nav-link').on('click', function () {
    $('.navbar-collapse').removeClass('show');
    $('.hamburger').removeClass('is-active');
    $('.hamburger').addClass('collapsed');
  });

  onLoad();
  function onLoad() {
    // makeFirstSmallerSecondBigger();
    adjustNavItemWidth();
    setPlatformContainerMarginRight();
    resizeCompanyBg();
    // resizePlatformWrapperRowHeight();
    adjustOwlInsideOwl();

  }
  

  $(window).on('resize', function () {
    onLoad();
    checkIfScrollable();
    // adjustNavItemWidth();

    

  });

  function adjustOwlInsideOwl() {
    $('.owl-inside-owl').height($('.solutions-slide-2').height());
  }

  $(window).on('load', function () {
    adjustOwlInsideOwl();
    checkIfScrollable();

    $('#videoContainer').html('<video id="video" autoplay muted><source src="assets/video/video2.mp4" type="video/mp4"></video>');
    
  });
  // $('#videoContainer').innerHTML = '123';
  // console.log($('.solutions-slide-2').height());

  function resizeCompanyBg() {
    // var companyBackgroundHeight = $('#company .col-md-5').css('height');
    var companyBackgroundHeight = $('#company .col-md-5').height();
    // companyBackgroundHeight = parseFloat(companyBackgroundHeight.substring(0, companyBackgroundHeight.length - 2));
    companyBackgroundHeight = companyBackgroundHeight + 250;
    // companyBackgroundHeight = companyBackgroundHeight + 'px';
    $('.company-bg-mobile').css('height', companyBackgroundHeight);
  }

  function adjustFaqTitleMarginTop() {
    var faqSectionHeight = $('#faq').height();
    var faqContainerHeight = $('#faq .container').height();
    var faqTitleMarginTop = ((faqSectionHeight - faqContainerHeight) / 2);
    $('#faq h2.section-title').css('margin-top', faqTitleMarginTop);
  }


  function absolutizeCompanyWrapper() {
    $('.company-wrapper').css('position', 'static');
    $('.company-main-row').css('margin', 'auto 0');
    var companyRowMarginTop = $('.company-main-row').css('margin-top');
    // companyRowMarginTop = parseFloat(companyRowMarginTop.substring(0, companyRowMarginTop.length - 2));
    // console.log(companyRowMarginTop);
    $('.company-wrapper').css('position', 'absolute');
    $('.company-main-row').css('margin-top', companyRowMarginTop);
  }

  function resizePlatformWrapperRowHeight() {
    $('.platform-wrapper .row').css('height', 'auto');
    var platformWrapperRowHeightBefore = $('.platform-wrapper .row').height();
    $('.platform-wrapper .row').css('height', platformWrapperRowHeightBefore + 15);
  }


  function setPlatformContainerMarginRight() {
    var platformContainerMarginRight = $('#platform .container').css('margin-right');
    $('#solutions .solutions-slide-1').css('padding-left', platformContainerMarginRight);
  }


  $('#whatIsUniqueBtn').on('click', function () {
    $('#whatIsUniqueModal').modal('show');
  });



  $('#productModal').on('shown.bs.modal', function (e) {
    // console.log($('.modal-body .col-md-5').width());
    var mbcml = $('.modal-body .container').css('margin-left');
    mbcml = parseFloat(mbcml.substring(0, mbcml.length - 2));
    $('.modal-bg').width($('.modal-body .col-md-5').width() + mbcml + 16 + 15);
  })




  $('.owl-carousel-solutions').owlCarousel({
    items: 2,
    dots: false,
    mouseDrag: false
  });

  $('.owl-carousel-news').owlCarousel({
    items: 3,
    dots: false,
    // mouseDrag: false
    responsive: {
      0:{
        items: 1,
      },
      600:{
        items: 2,
      },
      768:{
        items: 3,
      }
    },
  });

  $('.owl-inside-owl').owlCarousel({
    items: 1,
    dots: false,
    mouseDrag: false,
    nav: true,
    navSpeed: 1,
    navText: ['<img src="assets/img/carousel-left.png">', '<img src="assets/img/carousel-right.png">']
  });

  $('.how-it-works-carousel').owlCarousel({
    items: 3,
    dots: false,
    // mouseDrag: false,
    // nav: true,
    // navSpeed: 1,
    navText: ['<img src="assets/img/carousel-left.png">', '<img src="assets/img/carousel-right.png">']
  });

  $('.who-benefits-carousel').owlCarousel({
    items: 3,
    dots: false,
    // mouseDrag: false,
    // nav: true,
    // navSpeed: 1,
    navText: ['<img src="assets/img/carousel-left.png">', '<img src="assets/img/carousel-right.png">']
  });

  $('.integrate-carousel').owlCarousel({
    items: 1,
    dots: false,
    mouseDrag: false,
    // nav: true,
    navSpeed: 1,
    navText: ['<img src="assets/img/carousel-left.png">', '<img src="assets/img/carousel-right.png">']
  });



  $('.to-product').click(function () {
    $('.to-product img').addClass('product-img-inactive');
    $('.to-product img').removeClass('product-img-active');
    $('.adv-cloud').removeClass('adv-cloud-active');
    $(this).children('img').removeClass('product-img-inactive');
    $(this).children('img').addClass('product-img-active');
    // makeFirstBiggerSecondSmaller();
    // $('.owl-inside-owl').trigger('to.owl.carousel', 0);
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);



    //   var initSolutionsSlide1Width = $('.solutions-slide-1').parent().width();
    // var initSolutionsSlide2Width = $('.solutions-slide-2').parent().width();
    // var initSolutionsSlide3Width = $('.solutions-slide-3').parent().width();
    // $('.solutions-slide-1').parent().width(initSolutionsSlide1Width + 80);
    // $('.solutions-slide-2').parent().width(initSolutionsSlide2Width - 160);
    // $('.solutions-slide-3').parent().width(initSolutionsSlide3Width + 80);





  });



  $('.owl-inside-owl .owl-prev').on('click', function() {
    // if($('.owl-prev').hasClass('disabled')) {
    if($(this).hasClass('disabled')) {
      $(this).parent().css('display', 'none');
      $('.close-product-info').css('display', 'none');
    }
  });




  $('.adv-cloud').click(function () {
    $(this).addClass('adv-cloud-active');
    $('.owl-inside-owl').trigger('to.owl.carousel', [1, 1]);
    $('.close-product-info').css('display', 'flex');
    $('.owl-inside-owl .owl-nav').css('display', 'block');
    $('.to-product img').removeClass('product-img-active');
    $('.to-product img').addClass('product-img-inactive');
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);
  });
  $('.to-product-broadcast').click(function () {

    $('.owl-inside-owl').trigger('to.owl.carousel', [2, 1]);
    $('.close-product-info').css('display', 'flex');
    $('.owl-inside-owl .owl-nav').css('display', 'block');
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);
  });
  $('.to-product-digital').click(function () {
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);
    $('.owl-inside-owl').trigger('to.owl.carousel', [3, 1]);
    $('.close-product-info').css('display', 'flex');
    $('.owl-inside-owl .owl-nav').css('display', 'block');
  });
  $('.to-product-geo').click(function () {
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);
    $('.owl-inside-owl').trigger('to.owl.carousel', [4, 1]);
    $('.close-product-info').css('display', 'flex');
    $('.owl-inside-owl .owl-nav').css('display', 'block');
  });
  $('.to-product-image').click(function () {
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);
    $('.owl-inside-owl').trigger('to.owl.carousel', [5, 1]);
    $('.close-product-info').css('display', 'flex');
    $('.owl-inside-owl .owl-nav').css('display', 'block');
  });
  $('.to-product-survey').click(function () {
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);
    $('.owl-inside-owl').trigger('to.owl.carousel', [6, 1]);
    $('.close-product-info').css('display', 'flex');
    $('.owl-inside-owl .owl-nav').css('display', 'block');
  });
  $('.to-product-quiz').click(function () {
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);
    $('.owl-inside-owl').trigger('to.owl.carousel', [7, 1]);
    $('.close-product-info').css('display', 'flex');
    $('.owl-inside-owl .owl-nav').css('display', 'block');
  });
  $('.to-product-vote').click(function () {
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);
    $('.owl-inside-owl').trigger('to.owl.carousel', [8, 1]);
    $('.close-product-info').css('display', 'flex');
    $('.owl-inside-owl .owl-nav').css('display', 'block');
    // console.log('vote');
  });
  $('.to-product-show').click(function () {
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);
    $('.owl-inside-owl').trigger('to.owl.carousel', [9, 1]);
    $('.close-product-info').css('display', 'flex');
    $('.owl-inside-owl .owl-nav').css('display', 'block');
  });
  $('.to-product-tv').click(function () {
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);
    $('.owl-inside-owl').trigger('to.owl.carousel', [10, 1]);
    $('.close-product-info').css('display', 'flex');
    $('.owl-inside-owl .owl-nav').css('display', 'block');

  });
  $('.to-product-music').click(function () {
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);
    $('.owl-inside-owl').trigger('to.owl.carousel', [11, 1]);
    $('.close-product-info').css('display', 'flex');
    $('.owl-inside-owl .owl-nav').css('display', 'block');
  });
  $('.to-product-meter').click(function () {
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);
    $('.owl-inside-owl').trigger('to.owl.carousel', [12, 1]);
    $('.close-product-info').css('display', 'flex');
    $('.owl-inside-owl .owl-nav').css('display', 'block');
    // console.log('meter');
  });
  $('.to-product-data').click(function () {
    // $('.owl-carousel-solutions').trigger('to.owl.carousel', 1);
    $('.owl-inside-owl').trigger('to.owl.carousel', [13, 1]);
    $('.close-product-info').css('display', 'flex');
    $('.owl-inside-owl .owl-nav').css('display', 'block');
    // console.log('data');
  });











  $('.close-product-info').click(function () {
    // console.log('asdasd0');
    // var initSolutionsSlide1Width = $('.solutions-slide-1').parent().width();
    // var initSolutionsSlide2Width = $('.solutions-slide-2').parent().width();
    // $('.solutions-slide-1').parent().width(initSolutionsSlide1Width - 80);
    // $('.solutions-slide-2').parent().width(initSolutionsSlide2Width + 80);
    $(this).css('display', 'none');
    $('.owl-carousel-solutions').trigger('to.owl.carousel', 0);
    $('.to-product img').removeClass('product-img-active');
    $('.to-product img').removeClass('product-img-inactive');
    $('.owl-inside-owl').trigger('to.owl.carousel', [0, 3]);
    $('.owl-inside-owl .owl-nav').css('display', 'none');
  });

  $('.owl-carousel-news-navs-left').on('click', function () {
    $('.owl-carousel-news').trigger('prev.owl.carousel');
  });

  $('.owl-carousel-news-navs-right').on('click', function () {
    $('.owl-carousel-news').trigger('next.owl.carousel');
  });

  $('.owl-carousel-benefits-navs-left').on('click', function () {
    $('.who-benefits-carousel').trigger('prev.owl.carousel');
  });

  $('.owl-carousel-benefits-navs-right').on('click', function () {
    $('.who-benefits-carousel').trigger('next.owl.carousel');
  });

  $('.owl-carousel-how-navs-left').on('click', function () {
    $('.how-it-works-carousel').trigger('prev.owl.carousel');
  });

  $('.owl-carousel-how-navs-right').on('click', function () {
    $('.how-it-works-carousel').trigger('next.owl.carousel');
  });

  $('.owl-carousel-integrate-navs-left').on('click', function () {
    $('.integrate-carousel').trigger('prev.owl.carousel', 1);
    if($('#integrate .owl-item:nth-child(1)').hasClass('active')) {
      $('#integrate .owl-carousel-news-navs').addClass('integrate-navs');
      console.log('lalalal');
    }
  });

  $('.owl-carousel-integrate-navs-right').on('click', function () {
    $('.integrate-carousel').trigger('next.owl.carousel', 1);
    $('#integrate .owl-carousel-news-navs').removeClass('integrate-navs');
  });



  // function makeFirstSmallerSecondBigger() {
  // var initSolutionsSlide1Width = $('.solutions-slide-1').parent().width();
  // var initSolutionsSlide2Width = $('.solutions-slide-2').parent().width();
  // $('.solutions-slide-1').parent().width(initSolutionsSlide1Width - 80);
  // $('.solutions-slide-2').parent().width(initSolutionsSlide2Width + 80);
  // }

  // function makeFirstBiggerSecondSmaller() {
  //   var initSolutionsSlide1Width = $('.solutions-slide-1').parent().width();
  //   var initSolutionsSlide2Width = $('.solutions-slide-2').parent().width();
  //   $('.solutions-slide-1').parent().width(initSolutionsSlide1Width + 80);
  //   $('.solutions-slide-2').parent().width(initSolutionsSlide2Width - 80);
  // }

  $('#downloadApple').on({
    mouseenter: function () {
      $(this).children('img').attr('src', 'assets/img/appstore-icon-hover.png');
    },
    mouseleave: function () {
      $(this).children('img').attr('src', 'assets/img/appstore-icon.png');
    }
  });

  $('#downloadAndroid').on({
    mouseenter: function () {
      $(this).children('img').attr('src', 'assets/img/gplay-icon-hover.png');
    },
    mouseleave: function () {
      $(this).children('img').attr('src', 'assets/img/gplay-icon.png');
    }
  });

  function checkIfScrollable() {
  $('.scrollable-content-inner').each(function () {
    var thisHeight = $(this).height();
    var thisParentHeight = $(this).parent().height();


    if (thisHeight > thisParentHeight) {
      $(this).parent().css('overflow-y', 'scroll');
    } else {
      $(this).parent().css('overflow-y', 'hidden');
    }
  });
}

// $('.owl-inside-owl .owl-next').on('click', function() {
  $(document).on('click', '.owl-inside-owl .owl-next, .owl-inside-owl .owl-prev', function () {
    $('.adv-cloud').removeClass('adv-cloud-active');
  $('.to-product img').removeClass('product-img-active');
  $('.to-product img').addClass('product-img-inactive');
  toggleActiveProduct();
});


function toggleActiveProduct() {
  if($('.owl-inside-owl .owl-stage').children('.owl-item').eq(1).hasClass('active')) {
    $('.adv-cloud').addClass('adv-cloud-active');
  } else if($('.owl-inside-owl .owl-stage').children('.owl-item').eq(2).hasClass('active')) {
    $('.to-product-broadcast img').addClass('product-img-active');
  } else if($('.owl-inside-owl .owl-stage').children('.owl-item').eq(3).hasClass('active')) {
    $('.to-product-digital img').addClass('product-img-active');
  } else if($('.owl-inside-owl .owl-stage').children('.owl-item').eq(4).hasClass('active')) {
    $('.to-product-geo img').addClass('product-img-active');
  } else if($('.owl-inside-owl .owl-stage').children('.owl-item').eq(5).hasClass('active')) {
    $('.to-product-image img').addClass('product-img-active');
  } else if($('.owl-inside-owl .owl-stage').children('.owl-item').eq(6).hasClass('active')) {
    $('.to-product-survey img').addClass('product-img-active');
  } else if($('.owl-inside-owl .owl-stage').children('.owl-item').eq(7).hasClass('active')) {
    $('.to-product-quiz img').addClass('product-img-active');
  } else if($('.owl-inside-owl .owl-stage').children('.owl-item').eq(8).hasClass('active')) {
    $('.to-product-vote img').addClass('product-img-active');
  } else if($('.owl-inside-owl .owl-stage').children('.owl-item').eq(9).hasClass('active')) {
    $('.to-product-show img').addClass('product-img-active');
  } else if($('.owl-inside-owl .owl-stage').children('.owl-item').eq(10).hasClass('active')) {
    $('.to-product-tv img').addClass('product-img-active');
  } else if($('.owl-inside-owl .owl-stage').children('.owl-item').eq(11).hasClass('active')) {
    $('.to-product-music img').addClass('product-img-active');
  } else if($('.owl-inside-owl .owl-stage').children('.owl-item').eq(12).hasClass('active')) {
    $('.to-product-meter img').addClass('product-img-active');
  } else if($('.owl-inside-owl .owl-stage').children('.owl-item').eq(13).hasClass('active')) {
    $('.to-product-data img').addClass('product-img-active');
  }
}

$('#videoModal').on('hidden.bs.modal', function () {
  $('#videoModal iframe').attr('src', '');
  
});
$('#videoModal').on('hide.bs.modal', function () {
  $('.close-video-modal').css('display', 'none');
  
});
$('#videoModal').on('show.bs.modal', function () {
  $('#videoModal iframe').attr('src', 'https://www.youtube.com/embed/ALovSFqUqYE?autoplay=1');
  $('.close-video-modal').css('display', 'flex');
});

$('.close-video-modal').on('click', function() {
  $('#videoModal').modal('hide')

});

// $('.yellow-grid div').height($('.yellow-grid div').width());
});