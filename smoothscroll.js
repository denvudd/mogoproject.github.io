$(function() {
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        console.log(elementOffset);
        
        $("html, body").animate({
            scrollTop: elementOffset -70
        }, 1000);
    });
});

