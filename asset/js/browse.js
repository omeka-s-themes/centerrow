(function($) {
    $(document).ready(function() {
        // Get parameter from current URL. Source: https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript

        function findGetParameter(parameterName) {
            let result = null,
                tmp = [];
            location.search
                .substr(1)
                .split("&")
                .forEach(function (item) {
                tmp = item.split("=");
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
                });
            return result;
        }

        // Replace parameter within a given URL. Source: https://stackoverflow.com/questions/7171099/how-to-replace-url-parameter-with-javascript-jquery

        function replaceUrlParam(url, paramName, paramValue)
        {
            if (paramValue == null) {
                paramValue = '';
            }
            const pattern = new RegExp('\\b('+paramName+'=).*?(&|#|$)');
            if (url.search(pattern)>=0) {
                return url.replace(pattern,'$1' + paramValue + '$2');
            }
            url = url.replace(/[?#]$/,'');
            return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
        }

        const layoutSetting = findGetParameter('browse_layout');
        const layoutHiddenInput = $('<input type="hidden" name="browse_layout">');

        if (layoutSetting) {
            $('.layout-toggle button').attr('disabled', false);
            const currentLayoutButton = $('.layout-toggle button.' + layoutSetting);
            currentLayoutButton.attr('disabled', true);            
        }

        $('.layout-toggle').on('click', 'button', function() {
            const targetButton = $(this);
            const browseControls = targetButton.parents('.browse-controls');
            const newLayoutName = targetButton.attr('aria-label').toLowerCase();
            browseControls.find('.layout-toggle button:disabled').removeAttr('disabled').focus();
            targetButton.attr('disabled', 'disabled');
            browseControls.next('.resource-list').toggleClass('list').toggleClass('grid');

            // Update URLs.
            const queryParams = new URLSearchParams(window.location.search);
            queryParams.set('browse_layout', newLayoutName);
            history.replaceState('', '', "?"+queryParams.toString());
            browseControls.find('.pagination-buttons a').each(function() {
                const paginationLink = $(this);
                const currentUrl = paginationLink.attr('href');
                const newUrl = replaceUrlParam(currentUrl, 'browse_layout', newLayoutName);
                paginationLink.attr('href', newUrl);
            });
            if (browseControls.find('.pagination-buttons [name="browse_layout"]').length > 0) {
                browseControls.find('.pagination-buttons [name="browse_layout"]').each(function() {
                    $(this).val(newLayoutName);
                });
            } else {
                browseControls.find('.pagination form').each(function() {
                    const newLayoutHiddenInput = layoutHiddenInput.clone();
                    newLayoutHiddenInput.val(newLayoutName);
                    $(this).prepend(newLayoutHiddenInput);
                });
            }
            browseControls.find('.sorting [name="browse_layout"]').val(newLayoutName);
        });
    });
})(jQuery)