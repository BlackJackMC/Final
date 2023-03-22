
$(window).on("load", function () {
    let element = $("#main");
    let original = element.offset().top;

    $(window).scroll(function () {
        let img = $("#logo");
        let scrollTop = $(window).scrollTop();
        if (scrollTop > original) {
            img.css("inset", "auto 0 auto 0");
        } else {
            img.css("inset", "-25px 0 auto 0");
        }
    });
});