$(document).ready(function () {
     $('#sld1').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          dots: false,
          responsive: {
               0: {
                    items: 1
               },
               600: {
                    items: 1
               },
               1000: {
                    items: 1
               }
          }
     })

     $(window).scroll(function () {
          var sticky = $('.sticky'),
               scroll = $(window).scrollTop();

          if (scroll >= 100) sticky.addClass('fixed');
          else sticky.removeClass('fixed');
     });

     $('#sld2').owlCarousel({
          loop:false,
          margin:20,
          dots:false,
          // nav:true,
          responsive:{
              0:{
                  items:1
              },
               700:{
                  items:2                              
              },
              1000:{
                  items:3
              }
          }
      })

     $('#sld3').owlCarousel({
          loop:false,
          margin:30,
          dots:false,
          // nav:true,
          responsive:{
              0:{
                  items:1
              },
               700:{
                  items:2                              
              },
              1000:{
                  items:3
              }
          }
      })

      var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Listen to owl events:
    owl.on('changed.owl.carousel', function (event) {
        new WOW().init();
    })
    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();
})