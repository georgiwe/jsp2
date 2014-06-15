(function () {
    var $sliderNavBar = $('.slider-nav');
    $sliderNavBar.show();
    $('.slider').css('overflow', 'hidden');

    var slider = new Slider('.slider', '.slider-nav');

    var slideshowIsOn = false;
    var slideshowIntervalId;
    var $slideshowButton = $('button[data-id=slideshow]');
    var slideShowOnText = 'Slideshow (ON)';
    var slideShowOffText = 'Slideshow (OFF)';
    var slideshowInterval = 1000;

    $sliderNavBar.on('click', '.slider-nav-button', function () {
        var clickedButtId = $(this).attr('data-id');

        if (clickedButtId !== 'slideshow') {
            slider.transition(clickedButtId);
        } else {
            toggleSlideshow();
        }
    });

    function toggleSlideshow() {
        slideshowIsOn = !slideshowIsOn;

        if (slideshowIsOn) {
            $slideshowButton.text(slideShowOnText);
            slideshowIntervalId = setInterval(function () {
                slider.transition('next');
            }, slideshowInterval);
        } else {
            $slideshowButton.text(slideShowOffText);
            clearInterval(slideshowIntervalId);
        }
    }
})()