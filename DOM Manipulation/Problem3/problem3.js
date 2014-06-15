var textArea = document.getElementById('text-area');
var allInputsAsNodeList = document.body.querySelectorAll('input');
var allInputsAsArray = Array.prototype.slice.call(allInputsAsNodeList, 0);

allInputsAsArray.forEach(function (currInput) {
    currInput.addEventListener('change', function () {
        var currAttr = this.getAttribute('data-id');
        if (currAttr === '0') {
            textArea.style.color = this.value;
        } else {
            textArea.style.backgroundColor = this.value;
        }
    }, true)
});