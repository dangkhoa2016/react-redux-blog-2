/*global $*/

var contentWayPoint = function () {
    $('.ftco-animate').waypoint(function (direction) {
        if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {
            $(this.element).addClass('item-animate');
            setTimeout(function () {

                $('body .ftco-animate.item-animate').each(function (k) {
                    var el = $(this);
                    setTimeout(function () {
                        var effect = el.data('animate-effect');
                        if (effect === 'fadeIn') {
                            el.addClass('fadeIn ftco-animated');
                        } else if (effect === 'fadeInLeft') {
                            el.addClass('fadeInLeft ftco-animated');
                        } else if (effect === 'fadeInRight') {
                            el.addClass('fadeInRight ftco-animated');
                        } else {
                            el.addClass('fadeInUp ftco-animated');
                        }
                        el.removeClass('item-animate');
                    }, k * 50, 'easeInOutExpo');
                });

            }, 100);

        }
    }, { offset: '95%' });
};

var scrollTop = function (el) {
    var elem = el ? $(el) : [];
    var pos = elem.length > 0 ? elem.offset().top : 0;
    document.body.scrollTop = pos; // For Safari
    document.documentElement.scrollTop = pos; // For Chrome, Firefox, IE and Opera
};

var scrollToElement = function (el) {
    var elem = el ? $(el) : []
    $('html, body').animate({
        scrollTop: elem.length > 0 ? elem.offset().top : 0
    }, 500);
};

var fullHeight = function () {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
    });
};

var carousel = function () {
    $('.home-slider').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: false,
        autoplayHoverPause: false,
        items: 1,
        navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
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
    });
};

var burgerMenu = function () {
    $('.js-colorlib-nav-toggle').on('click', function (event) {
        event.preventDefault();
        var $this = $(this);

        if ($('body').hasClass('offcanvas')) {
            $this.removeClass('active');
            $('body').removeClass('offcanvas');
        } else {
            $this.addClass('active');
            $('body').addClass('offcanvas');
        }
    });
};

// Click outside of offcanvas
var mobileMenuOutsideClick = function () {
    $(document).click(function (e) {
        var container = $("#colorlib-aside, .js-colorlib-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {

            if ($('body').hasClass('offcanvas')) {

                $('body').removeClass('offcanvas');
                $('.js-colorlib-nav-toggle').removeClass('active');
            }
        }
    });

    $(window).scroll(function () {
        if ($('body').hasClass('offcanvas')) {

            $('body').removeClass('offcanvas');
            $('.js-colorlib-nav-toggle').removeClass('active');
        }
    });
};

var magnificPopup = function () {
    // magnific popup
    $('.image-popup').magnificPopup({
        type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.find('h3').text() + '<br/><small>' + item.el.find('span').text() + '</small>';
			}
		}
    });
};

export { contentWayPoint, scrollTop, scrollToElement, fullHeight, carousel, burgerMenu, mobileMenuOutsideClick, magnificPopup }
