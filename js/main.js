$(document).ready(function () {

    "use strict";

    // Show Navbar background on scroll
    $(window).scroll(function () {

        var top = $(window).scrollTop();
        if (top >= 100) {
            
            
            $('.navbar').css(
                'background',
                'linear-gradient(135deg, rgba(22, 37, 43, 1) 0%, rgba(22, 37, 43, 1) 100%)'
            );
            $('.navbar').css('padding', '25px 0');
            $('.navbar').css('background', '#fff');
            $('.navbar .nav-link').css('color', '#444');
            $('.navbar').css('box-shadow', '0px 5px 20px rgba(0, 0, 0, 0.1)');
        } else {
            $('.navbar').css(
                'background',
                'linear-gradient(135deg, rgba(22, 37, 43, 0) 0%, rgba(22, 37, 43, 0) 100%)'
            );
            $('.navbar').css('padding', '25px 0');
            $('.navbar .nav-link').css('color', '#daeaec');
            $('.navbar').css('box-shadow', '0px 5px 20px rgba(0, 0, 0, 0)');
        }
        
            if ($(this).scrollTop() > 100) { 
            $('.navbar .navbar-brand img').attr('src','img/logo-dark.png');
        }
            if ($(this).scrollTop() < 100) { 
            $('.navbar .navbar-brand img').attr('src','img/logo-light.png');
        }
    });

/*-------------------------------------------------------------------------------
    PRE LOADER
  -------------------------------------------------------------------------------*/
    
    $('.preloader').fadeOut(2000); // set duration in brackets    
 
/*-------------------------------------------------------------------------------
    SMOOTH SCROLLING
  -------------------------------------------------------------------------------*/
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll The optional number
            // (800) specifies the number of milliseconds it takes to scroll to the
            // specified area
            $('html, body').animate({
                scrollTop: $(hash)
                    .offset()
                    .top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

/*-------------------------------------------------------------------------------
    PORTFOLIO
  -------------------------------------------------------------------------------*/
    
    $('#container').imagesLoaded(function () {

        // filter items on button click
        $('.filter-button-group').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({filter: filterValue});

        });

        var $grid = $('.grid').isotope({
            // options options
            itemSelector: '.grid-item',
            layoutMode: 'fitRows'
        });

        // images have loaded

    });

    //Image Light Box Popup
    $('.image-link').magnificPopup({type: 'image'});
    $('.video-popup').magnificPopup({type: 'iframe'});

    //Counter Up
    $('.counter').counterUp({delay: 10, time: 3000});
    
    
/*-------------------------------------------------------------------------------
    WOW ANIMATION
  -------------------------------------------------------------------------------*/
    
    new WOW().init();

});





    