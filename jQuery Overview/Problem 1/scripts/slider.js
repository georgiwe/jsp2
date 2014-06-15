function Slider(selector, nav) {
    var $slider = $(selector);
    this.$nav = $(nav);
    this.$container = $slider.find('.slides-container');
    this.$slides = $slider.find('.slide');
    this.slidesCount = this.$slides.length;
    this.slideWidth = this.$slides.first().width();
    this.currSlide = 0;
}

Slider.prototype.changeSlide = function (direction) {
    (direction === 'prev') ?
        this.currSlide-- :
            this.currSlide = ++this.currSlide % this.slidesCount;

    if (this.currSlide < 0) {
        this.currSlide = this.slidesCount - 1;
    }
}

Slider.prototype.animateChange = function () {
    this.$container.animate({
        'margin-left': -this.currSlide * this.slideWidth
    });
}

Slider.prototype.transition = function (direction) {
    this.changeSlide(direction);
    this.animateChange();
}