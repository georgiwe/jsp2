$.fn.tabs = function () {
    var $tabsContainer = $('#tabs-container').addClass('tabs-container');
    var $tabItems = $tabsContainer.find('.tab-item')
    var $allContentDivs = $tabsContainer.find('.tab-item-content').hide();
    var $lastVisible = $allContentDivs.first().show();
    
    $tabsContainer.on('click', '.tab-item-title', function () {
        $lastVisible.hide();
        $lastVisible = $(this).siblings('.tab-item-content').show();
    });
};