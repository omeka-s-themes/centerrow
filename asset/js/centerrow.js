(function($) {
    $(document).ready(function() {
        $('.search-toggle').click(function() {
            $('#search-form').toggleClass('closed').toggleClass('open');
            if ($('#search-form').hasClass('open')) {
                $('#query').focus();
            }
        });
    });
})(jQuery)