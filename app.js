$(document).ready(function() {
 
    $(".caruselsite #owl-demo").owlCarousel({
        nav: false, 
        singleItem:true,
        autoplay:true,
        autoplayTimeout:6000,
        resonsive:true,
        dots:false,
        items : 1, 
        animateOut: 'fadeOut',
        loop:true

    });

    $(".carusel-natural-style #owl-natural ").owlCarousel({
        nav: false, 
        singleItem:true,
        autoplay:true,
        autoplayTimeout:6000,
        resonsive:true,
        dots:false,
        items : 3, 
        animateOut: 'fadeOut',
        loop:true
  
    });
    
    $('.instagram .main-carousel').flickity({
        autoplay:true,
        autoPlay: 6000,
        wrapAround: true,
        imagesLoaded: true,      
        pageDots: false,
        cellAlign: 'left',
        contain: true,
    });
    $('.flickity-button-icon ,.flickity-button').on('mouseenter', function (e) {
        $('.flickity-button').css('background', 'black');
    });
    $('.flickity-button-icon ,.flickity-button').on('mouseout', function(e){
       $('.flickity-button').css('background','transparent');
    });

});

