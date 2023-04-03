
$(window).on("load", function () {
    let element = $("header");
    let original = element.offset().top;

    $(window).on("scroll", function () {
        let img = $("#logo");
        let scrollTop = $(window).scrollTop();
        // console.log(original, scrollTop);
        if (scrollTop > original) {
            img.css("inset", "0");
        } else {
            img.css("inset", "-25px 0 auto 0");
        }
    });
});