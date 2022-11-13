$(document).ready(function(){
    //deals carousel
    var dealsOwl = $('.deals__carousel').owlCarousel({
        loop: false,
        autoplay: false,
        slideTransition: 'linear',
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        nav: false,
        dots: false,
        items: 3,
        // responsive:{
        //   0:{
        //     items: 5
        //   },
        //   1150:{
        //     items: 5
        //   },
        //   1400:{
        //     items: 6,
        //   },
        //   1600:{
        //     items: 6,
        //   },
        //   1800:{
        //     items: 7,
        //   },
        //   2200:{
        //     items: 8,
        //   },
        // }
    });

    $('.deals__left-arrow').click(function() {
      dealsOwl.trigger('prev.owl.carousel');
    })
    $('.deals__right-arrow').click(function() {
      dealsOwl.trigger('next.owl.carousel');
    });


      //reviews carousel
      var reviewsOwl = $('.reviews__carousel').owlCarousel({
        loop: false,
        autoplay: false,
        slideTransition: 'linear',
        autoplayTimeout: 2000,
        autoplaySpeed: 2000,
        nav: false,
        dots: false,
        items: 3,
        // responsive:{
        //   0:{
        //     items: 5
        //   },
        //   1150:{
        //     items: 5
        //   },
        //   1400:{
        //     items: 6,
        //   },
        //   1600:{
        //     items: 6,
        //   },
        //   1800:{
        //     items: 7,
        //   },
        //   2200:{
        //     items: 8,
        //   },
        // }
    });

    $('.reviews__left-arrow').click(function() {
      reviewsOwl.trigger('prev.owl.carousel');
    })
    $('.reviews__right-arrow').click(function() {
      reviewsOwl.trigger('next.owl.carousel');
    })
});