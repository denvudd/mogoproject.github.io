$(function() {
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
        
        $('#nav a').removeClass("active");
        $this.addClass("active")
        
        $("html, body").animate({
            scrollTop: elementOffset -70
        }, 1000);
    });
});
