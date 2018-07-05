(function($) {
    $(document).ready(function() {

        $('#search-form').addClass('closed');

        $('.search-toggle').click(function() {
            $('#search-form').toggleClass('closed').toggleClass('open');
            if ($('#search-form').hasClass('open')) {
                $('#query').focus();
            }
        });

        if ($.isFunction($.fn.lightSlider)) {
            $('#itemfiles').lightSlider({
                mode: 'fade',
                autoWidth: true,
                adaptiveHeight:false,
                gallery:true,
                item:1,
                loop:true,
                thumbItem:15,
                slideMargin:0,
                enableDrag: false,
                currentPagerPosition:'middle',
                onSliderLoad: function(el) {
                    el.lightGallery({
                        selector: '#itemfiles .media',
                        download: false,
                        zoom: true,
                        youtubePlayerParams: {
                            modestbranding: 1,
                            showinfo: 0,
                            rel: 0,
                            controls: 1
                        },
                        vimeoPlayerParams: {
                            byline : 0,
                            portrait : 0,
                            color : 'A90707'
                        },
                    });
                }
            });
        }

    });
})(jQuery)