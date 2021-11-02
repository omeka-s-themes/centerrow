if (!CenterRow) {
    var CenterRow = {};
}

(function($) {

    CenterRow.megaMenu = function (menuSelector, customMenuOptions) {
        if (typeof menuSelector === 'undefined') {
            menuSelector = 'header nav';
        }

        var menuOptions = {
            /* prefix for generated unique id attributes, which are required
             to indicate aria-owns, aria-controls and aria-labelledby */
            uuidPrefix: "accessible-megamenu",

            /* css class used to define the megamenu styling */
            menuClass: "nav-menu",

            /* css class for a top-level navigation item in the megamenu */
            topNavItemClass: "nav-item",

            /* css class for a megamenu panel */
            panelClass: "sub-nav",

            /* css class for a group of items within a megamenu panel */
            panelGroupClass: "sub-nav-group",

            /* css class for the hover state */
            hoverClass: "hover",

            /* css class for the focus state */
            focusClass: "focus",

            /* css class for the open state */
            openClass: "open",

            openOnMouseover: true,
        };

        $.extend(menuOptions, customMenuOptions);

        $(menuSelector).accessibleMegaMenu(menuOptions);
    };

    CenterRow.mobileMenu = function() {
        $('.menu-button').click( function(e) {
            e.preventDefault();
            $('header nav > ul').toggleClass('open');
        });
    };

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