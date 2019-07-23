(function($) {
    $(document).ready(function() {
        $('.layout-toggle button').click(function() {
            $('.layout-toggle button:disabled').removeAttr('disabled');
            $(this).attr('disabled', true);
            $('.resource-list').toggleClass('list').toggleClass('grid');
        });
    });
})(jQuery)