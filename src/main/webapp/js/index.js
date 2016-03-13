$(document).ready( function() { 
    (function($) {

        var $container = $(".parallax");
        var $divs = $container.find("div.parallax-background");
        var thingBeingScrolled = document.body;
        var liHeight = $divs.eq(0).closest("li").height();
        var diffHeight = $divs.eq(0).height() - liHeight;
            
        var i, len, div, li, offset, scroll, top;

        var render = function() {
            // Thing we are scrolling
            top = thingBeingScrolled.scrollTop;
                
            // Loop through the divs
            for(i=0, len=$divs.length; i < len ; i++) {
                // Get one DIV
                div = $divs[i];

                // Get the parent LI
                li = div.parentNode;

                // Calculate the offsetTOP of div
                offset = $(div).offset().top;

                // Calculate the amount to scroll
                scroll = Math.round(((top - offset) / liHeight) * diffHeight);

                // Apply the scroll amount
                div.style.webkitTransform = "translate3d(0px,"+scroll+"px,0px)";
            }
        };
        (function loop() {
            requestAnimationFrame(loop);
            render();
        })();
    })(jQuery);
});
