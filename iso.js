(function ($) {
    'use strict';

    var $filter_tabs = $('.filter-button-group li');
    var $grid = $('.iso-element-group').isotope({
        itemSelector: '.element-item'
    });

    $filter_tabs.find('a').click(function () {

        $filter_tabs.removeClass('is-active');

        $grid.isotope({
            filter: $(this).attr('data-filter')
        });

        $(this).parent().addClass('is-active');
    });
})(jQuery);