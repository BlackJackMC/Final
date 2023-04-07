
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
    $(".banner").on("mouseenter", function () {
        $(this).children(".banner-background").css("transform", "scale(1.2)");
    });
    $(".banner").on("mouseleave", function () {
        $(this).children(".banner-background").css("transform", "scale(1)");
    });
    $(".product").on("mouseenter", function () {
        $(".product>.first").fadeOut("slow", function(){
            $(".product>.second").fadeIn("slow")
        });
    });
    $(".product").on("mouseleave", function () {
        
    });
});
