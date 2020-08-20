
(function($) {

    /* NUMBER TICKER UPON VIEW */
    // IMPORTANT: Requires Waypoint.js and Counterup.js (Enqueued from JSDelivr)
    $(document).ready(function() {
        var numberTickers = $('.visceral-ticker');
        if ( numberTickers.length ) {
            numberTickers.counterUp({
                speed: 1000,
                formatter: function (value, options) {
                    return value.toFixed(options.decimals);
                }
            });
            numberTickers.addClass('tuck');
        }
    });
        
    /* END NUMBER TICKER UPON VIEW */
})(jQuery);
