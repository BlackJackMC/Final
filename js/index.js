$(window).on('scroll', function () {
    if ($(window).scrollTop() > 170) {
        $('header').addClass("fixed-top");
    } else {
        $('header').removeClass("fixed-top");
    }
})
$(window).off('scroll', function () {
    if ($(document).width() >= 992) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 230) {
                $('header').addClass("fixed-top");
            } else {
                $('header').removeClass("fixed-top");
            }
        })
    }
});

$(".banner").on("mouseenter", function () {
    $(this).children(".banner-background").css("transform", "scale(1.2)");
});
$(".banner").on("mouseleave", function () {
    $(this).children(".banner-background").css("transform", "scale(1)");
});

$(".product").on("mouseenter", function () {
    $(this).children(".item-image").children(".second").css("opacity", "1");
    $(this).children(".interact").css("right", "0.5rem");
    $(this).children(".flag").children(".new").css("opacity", "1");
});
$(".product").on("mouseleave", function () {
    $(this).children(".item-image").children(".second").css("opacity", "0");
    $(this).children(".interact").css("right", "-4.5rem");
    $(this).children(".flag").children(".new").css("opacity", "0");
});
