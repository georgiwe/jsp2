var divs = document.getElementsByClassName('circle');
var ln = divs.length;
var radius = 50;
var cnt = 0;
var spacing = 360 / 5;

(function spreadOutDivs() {
    var currRadius = 0;

    for (var i = 0; i < ln; i++) {
        var left = 450 + Math.cos(currRadius + Math.PI / i * 5) * 80;
        var top = 200 +  Math.sin(currRadius + Math.PI / i * 5) * 80;

        divs[i].style.left = left + 'px';
        divs[i].style.top = top + 'px';
        currRadius += spacing;
    }
})()

var rotationAngle = 0;

function rotateDivs() {

    for (var i = 0; i < ln; i++) {
        var left = 450  + Math.cos(rotationAngle + Math.PI / (i + 1) * 5) * 100;
        var top  = 250  + Math.sin(rotationAngle + Math.PI / (i + 1) * 5) * 100;

        divs[i].style.left = left + 'px';
        divs[i].style.top = top + 'px';
        rotationAngle += 5;
    }
}

setInterval(rotateDivs, 100);