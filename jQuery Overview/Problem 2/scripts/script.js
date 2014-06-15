function insBefore(elemToInsert, insertBefore) {
    $elemToInsert = $(elemToInsert);
    $insertBefore = $(insertBefore);

    $elemToInsert.insertBefore($insertBefore);
}

function insAfter(elemToInsert, insertAfter) {
    $elemToInsert = $(elemToInsert);
    $insertAfter = $(insertAfter);

    $elemToInsert.insertAfter($insertAfter);
}

var $divTemplate = $('<div />');
var $pivot = $('#pivot');
var marker = 'last-inserted';
var liveListClassInserted = document.getElementsByClassName(marker);

$('nav').on('click', 'button', function () {
    var attr = $(this).data('id');
    $(liveListClassInserted[0]).removeClass(marker);
    var $clone = $divTemplate.clone(true).addClass(marker);
    (attr === 'before') ?
        insBefore($clone, $pivot) :
            insAfter($clone, $pivot);
})