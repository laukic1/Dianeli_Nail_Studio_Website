(function ($) {
    "use strict";
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.navbar').addClass('nav-sticky');
        } else {
            $('.navbar').removeClass('nav-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    

//Tečaji page user experiance functionality
    $(document).ready(function() {
        if ('ontouchstart' in window) {
            // For touch devices (mobile and tablet)
            var isDropdownVisible = false;
            var activeTeamItem = null;
    
            $(".team-item").on("click", function() {
                $(".contact1").css("opacity", "0");
                $(".contact1").css("transition", "opacity 0.3s, visibility 0s");
    
                var clickedTeamItem = $(this);
                var icons = clickedTeamItem.find(".fa-caret-down, .fa-circle-xmark");
    
                if (activeTeamItem === null) {
                    // No active team item, show dropdown and hide others
                    clickedTeamItem.find(".dropdown-text").css("visibility", "visible");

                    icons.eq(0).hide();
                    icons.eq(1).show();
                    activeTeamItem = clickedTeamItem;
                    $(".team-item").not(clickedTeamItem).css("opacity", "0");
                } else if (activeTeamItem[0] === clickedTeamItem[0]) {
                    // Clicking on the same team item again, restore everything
                    clickedTeamItem.find(".dropdown-text").css("visibility", "hidden");
                    icons.eq(0).show();
                    icons.eq(1).hide();
                    $(".team-item").css("opacity", "1");
                    $(".contact1").css("opacity", "1");
                    $(".contact1").css("transition", "opacity 0s");
                    activeTeamItem = null;
                }
            });
        } else {
            // Only apply the hover effect on non-touch devices (desktop)
            $(".team-item").hover(
                function() {
                    $(".contact1").css("opacity", "0");
                    $(".contact1").css("transition", "opacity 0.3s");
                },
                function() {
                    $(".contact1").css("opacity", "1");
                }
            );
        }
    });


    // Section reveal and other elements animation on scroll

    window.addEventListener('scroll', reveal);

    function reveal() {
        var reveals = document.querySelectorAll('.reveal');

        for(var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var revealTop = reveals[i].getBoundingClientRect().top;
            var revealPoint = 150;

            if(revealTop < windowHeight - revealPoint) {
                reveals[i].classList.add('active');
            } else {
                reveals[i].classList.remove('active');
            }
        }

    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        animateIn: 'slideInDown',
        animateOut: 'slideOutDown',
        items: 1,
        smartSpeed: 450,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });
    
    
    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    
    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

