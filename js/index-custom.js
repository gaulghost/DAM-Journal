// CUSTOM JS


  /*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/

  $(window).load("../index.html",function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
  });
  $(window).load("index.html",function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
  });

  $(window).load("../coding.html",function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
  });
  $(window).load("coding.html",function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
  });

  $(window).load("../designing.html",function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
  });
  $(window).load("designing.html",function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
  });

  $(window).load("../blogging.html",function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
  });
  $(window).load("blogging.html",function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
  });

  /* HTML document is loaded. DOM is ready.
  -------------------------------------------*/

  $(document).ready(function() {


  /*-------------------------------------------------------------------------------
    Navigation - Hide mobile menu after clicking on a link
  -------------------------------------------------------------------------------*/

    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });



if($(window).width() < 768){
    $(".fixed-top").addClass("bg-dark");
} else {
    $(".fixed-top").removeClass("bg-dark");
    $(window).scroll(function() {
    if ($(".navbar").offset().top > 200) {
        $(".fixed-top").addClass("bg-dark");
    } else {
        $(".fixed-top").removeClass("bg-dark");
    }
  });
}

  /*-------------------------------------------------------------------------------
    jQuery Parallax
  -------------------------------------------------------------------------------*/

    function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    $('#service').parallax("100%", 0.2);
    $('#experience').parallax("100%", 0.3);
    $('#education').parallax("100%", 0.1);
    $('#quotes').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
    $('footer').parallax("100%", 0.2);

  }
  initParallax();



  /*-------------------------------------------------------------------------------
    smoothScroll js
  -------------------------------------------------------------------------------*/

    $(function() {
        $('.custom-navbar a, #home a, #fp-nav a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });



  /*-------------------------------------------------------------------------------
    wow js - Animation js
  -------------------------------------------------------------------------------*/

  new WOW({ mobile: false }).init();


  });
