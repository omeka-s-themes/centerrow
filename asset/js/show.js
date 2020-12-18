(function($) {
  $(document).ready(function() {

    if ($.isFunction($.fn.lightSlider)) {
      
      var galleryState = ($('#itemfiles li').length > 1) ? true : false;
            
      $('#itemfiles, .item-with-metadata .lightgallery').lightSlider({
          mode: 'fade',
          autoWidth: true,
          adaptiveHeight:false,
          gallery: galleryState,
          pager: galleryState,
          item:1,
          loop:true,
          thumbItem:15,
          slideMargin:0,
          enableDrag: false,
          currentPagerPosition:'middle',
          onSliderLoad: function(el) {
              el.lightGallery({
                  selector: '#itemfiles .media, .item-with-metadata .lightgallery .media',
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