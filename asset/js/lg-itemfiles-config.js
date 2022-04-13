(function($) {
    $(document).ready(function() {        
        var galleryState = ($('#itemfiles li').length > 1) ? true : false;

        var lgContainer = document.getElementById('itemfiles');
        var inlineGallery = lightGallery(lgContainer, {
            container: lgContainer,
            dynamic: false,
            hash: false,
            closable: false,
            thumbnail: true,
            selector: '.media.resource',
            exThumbImage: 'data-thumb',
            showMaximizeIcon: true,
            autoplayFirstVideo: false,
            zoom: 1,
            showZoomInOutIcons: true,
            actualSizeIcons: {
                zoomIn: 'hidden', 
                zoomOut: 'o-icon-undo',
            },
            plugins: [
                lgThumbnail,lgZoom,lgVideo,
            ],
        });

        inlineGallery.openGallery();
    });
})(jQuery)

