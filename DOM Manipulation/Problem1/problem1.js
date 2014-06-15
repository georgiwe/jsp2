(function () {

    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 20; i++) {
        var rndDiv = createRandomDiv();
        fragment.appendChild(rndDiv);
    }

    document.body.appendChild(fragment);

    function getRandomPositiveNumBetween(min, max, decimalDigits) {
        if (arguments.length === 1) {
            max = arguments[0];
            decimalDigits = 16;
            min = 0;
        } else if (arguments.length === 2) {
            decimalDigits = arguments[1];
            max = arguments[0];
            min = 0;
        }

        if (max < min) {
            throw new Error('min cannot be bigger than max');
        }

        var result = min + Math.random() * (max - min);
        return +result.toFixed(decimalDigits);
    }

    function getRandomColorHex() {
        var digits = '0123456789ABCDEF'.split('');
        var result = '';
        for (var i = 0; i < 6; i++) {
            var ind = getRandomPositiveNumBetween(0, 15, 0);
            result += digits[ind];
        }
        return result;
    }

    function getStrongElement(divHeight, divWidth) {
        var strongElement = document.createElement('strong');
        strongElement.innerText = 'div';
        strongElement.style.width = '20px';
        strongElement.style.position = 'absolute';
        strongElement.style.top = (divHeight - 20) / 2 + 'px';
        strongElement.style.left = (divWidth - 20) / 2 + 'px';
        return strongElement;
    }

    function createRandomDiv() {
        var resDiv = document.createElement('DIV');
        resDiv.style.position = 'absolute';

        var borderWidth = getRandomPositiveNumBetween(1, 20, 0);
        resDiv.style.borderRadius = getRandomPositiveNumBetween(0, 100, 2) + '%';
        resDiv.style.borderColor = '#' + getRandomColorHex();
        resDiv.style.borderWidth = borderWidth + 'px';
        resDiv.style.borderStyle = 'outset';

        var divHeight = getRandomPositiveNumBetween(20, 100, 0);
        var divWidth = getRandomPositiveNumBetween(20, 100, 0);
        resDiv.style.height = divHeight + 'px';
        resDiv.style.width = divWidth + 'px';

        var bgCol = getRandomColorHex();
        resDiv.style.backgroundColor = '#' + bgCol;

        var fontCol = getRandomColorHex();
        resDiv.style.color = '#' + fontCol;

        var winHeight = window.innerHeight;
        var winWidth = window.innerWidth;
        resDiv.style.top = getRandomPositiveNumBetween(0, winHeight - divHeight - 2 * borderWidth, 0) + 'px';
        resDiv.style.left = getRandomPositiveNumBetween(0, winWidth - divWidth - 2 * borderWidth, 0) + 'px';

        var strongElement = getStrongElement(divHeight, divWidth);
        resDiv.appendChild(strongElement);

        return resDiv;
    }
})()