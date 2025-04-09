(function($) {
    "use strict";
    
        // Hide Mobile menu
        function mobileMenuHide() {
            var windowWidth = $(window).width();
            if (windowWidth < 1024) {
                $('#site_header').addClass('mobile-menu-hide');
            }
        }
        // /Hide Mobile menu
        
        // Custom scroll
        function customScroll() {
            var windowWidth = $(window).width();
            if (windowWidth > 991) {
                // Custom Subpage Scroll
                $(".pt-page").mCustomScrollbar({
                    scrollInertia: 8
                });
    
                // Custom Header Scroll
                $("#site_header").mCustomScrollbar({
                    scrollInertia: 8
                });
            } else {
                $(".pt-page").mCustomScrollbar('destroy');
    
                $("#site_header").mCustomScrollbar('destroy');
            }
        }
        // /Custom scroll
    
        //On Window load & Resize
        $(window)
            .on('load', function() { //Load
                // Animation on Page Loading
                $(".preloader").fadeOut("slow");
    
                // initializing page transition.
                var ptPage = $('.subpages');
                if (ptPage[0]) {
                    PageTransitions.init({
                        menu: 'ul.site-main-menu',
                    });
                }
    
                customScroll();
            })
            .on('resize', function() { //Resize
                mobileMenuHide();
                 
                customScroll();
            });
    
    
        // On Document Load
        $(document).on('ready', function() {
    
            // Mobile menu
            $('.menu-toggle').on("click", function (event) {
                $('#site_header').toggleClass('mobile-menu-hide');
            });
    
            // Mobile menu hide on main menu item click
            $('.site-main-menu').on("click", "a", function (e) {
                mobileMenuHide();
            });
    
            // Testimonials Slider
            $(".testimonials.owl-carousel").owlCarousel({
                nav: true, // Show next/prev buttons.
                items: 3, // The number of items you want to see on the screen.
                loop: false, // Infinity loop. Duplicate last and first items to get loop illusion.
                navText: false,
                margin: 10,
                responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items: 1,
                    },
                    // breakpoint from 480 up
                    480 : {
                        items: 1,
                    },
                    // breakpoint from 768 up
                    768 : {
                        items: 2,
                    },
                    1200 : {
                        items: 3,
                    }
                }
            });
    
            // Text rotation
            $('.text-rotation').owlCarousel({
                loop: true,
                dots: false,
                nav: false,
                margin: 10,
                items: 1,
                autoplay: true,
                autoplayHoverPause: false,
                autoplayTimeout: 3800,
                animateOut: 'zoomOut',
                animateIn: 'zoomIn'
            });
    
            // Lightbox init
            $('.lightbox').magnificPopup({
                type: 'image',
                removalDelay: 300,
    
                // Class that is added to popup wrapper and background
                // make it unique to apply your CSS animations just to this exact popup
                mainClass: 'mfp-fade',
                image: {
                    // options for image content type
                    titleSrc: 'title',
                    gallery: {
                        enabled: true
                    },
                },
    
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">'+
                            '<div class="mfp-close"></div>'+
                            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                            '<div class="mfp-title mfp-bottom-iframe-title"></div>'+
                          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
    
                    patterns: {
                        youtube: {
                          index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
    
                          id: 'v=', // String that splits URL in a two parts, second part should be %id%
                          // Or null - full URL will be returned
                          // Or a function that should return %id%, for example:
                          // id: function(url) { return 'parsed id'; }
    
                          src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                        },
                        vimeo: {
                          index: 'vimeo.com/',
                          id: '/',
                          src: '//player.vimeo.com/video/%id%?autoplay=1'
                        },
                        gmaps: {
                          index: '//maps.google.',
                          src: '%id%&output=embed'
                        }
                    },
    
                    srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
                },
    
                callbacks: {
                    markupParse: function(template, values, item) {
                     values.title = item.el.attr('title');
                    }
                },
            });
    
            $('.ajax-page-load-link').magnificPopup({
                type: 'ajax',
                removalDelay: 300,
                mainClass: 'mfp-fade',
                gallery: {
                    enabled: true
                },
            });
    
            $('.tilt-effect').tilt({
    
            });
    
        });
    
    })(jQuery);


// from: http://www.robots.ox.ac.uk/~vedaldi/assets/hidebib.js
function hideallbibs()
{
    var el = document.getElementsByTagName("div") ;
    for (var i = 0 ; i < el.length ; ++i) {
        if (el[i].className == "paper") {
            var bib = el[i].getElementsByTagName("pre") ;
            if (bib.length > 0) {
                bib [0] .style.display = 'none' ;
            }
        }
    }
}

function togglebib(paperid)
{
    var paper = document.getElementById(paperid) ;
    var bib = paper.getElementsByTagName('pre') ;
    if (bib.length > 0) {
        if (bib [0] .style.display == 'none') {
            bib [0] .style.display = 'block' ;
        } else {
            bib [0] .style.display = 'none' ;
        }
    }
}

function toggleblock(blockId)
{
   var block = document.getElementById(blockId);
   if (block.style.display == 'none') {
    block.style.display = 'block' ;
   } else {
    block.style.display = 'none' ;
   }
}

function hideblock(blockId)
{
   var block = document.getElementById(blockId);
   block.style.display = 'none' ;
}