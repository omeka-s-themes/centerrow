(function($) {
    $(document).ready(function() {
        $('#search-form').addClass('closed');

        $('.search-toggle').click(function() {
            $('#search-form').toggleClass('closed').toggleClass('open');
            if ($('#search-form').hasClass('open')) {
                $('#query').focus();
            }
        });
    });
})(jQuery)