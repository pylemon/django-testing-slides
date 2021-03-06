$(function() {
    var no = $('<div class="no"></div>').hide(),
    body = $("body");

    body.append(no);

    $("#preso").bind("showoff:loaded", function(event) {
        $(".content").bind("showoff:next", function(event) {
            var slide = $(currentSlide).find(".content");
            no.hide();
            if(slide.hasClass("antipattern") && (incrCurr >= incrSteps)) {
                if(!slide.data("overlaid")) {
                    no.show();
                    slide.data("overlaid", true);
                    event.preventDefault();
                } else {
                    slide.data("overlaid", false);
                }
            }
        });
        $(".content").bind("showoff:prev", function(event) {
            var slide = $(currentSlide).find(".content");
            no.hide();
            if(slide.hasClass("antipattern")) {
                slide.data("overlaid", false);
            }
        });
    });
});
