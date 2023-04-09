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
    let scale = $(this).attr("data-hover-scale");
    if (scale === undefined) {
        scale = 1;
    }
    $(this).children(".banner-background").css("transform", `scale(${scale})`);
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


$("#about-game .banner .wrap").on("mouseenter", function () {
    $(this).children(".about-icon").css("border", "3px solid var(--bs-primary)");
});
$("#about-game .banner .wrap").on("mouseleave", function () {
    $(this).children(".about-icon").css("border", "3px solid #555555");
});

$("#home-center #image").on("mouseenter", function () {
    $(this).children(".owl-carousel").children(".owl-nav").css("opacity", "1");
    console.log("Enter");
})
$("#home-center #image").on("mouseleave", function () {
    $(this).children(".owl-carousel").children(".owl-nav").css("opacity", "0");
    console.log("Leave");
})

$("#blog .blog-item").on("mouseenter", function () {
    $(this).children(".thumbnail").children("img").css({
        "transform": "scale(1.1)"
    })
    $(this).children(".thumbnail").children(".overlay").css({
        "transform": "scale(1)",
        "opacity": "1",
        "z-index": "2"
    });
})
$("#blog .blog-item").on("mouseleave", function () {
    $(this).children(".thumbnail").children("img").css({
        "transform": "scale(1)"
    })
    $(this).children(".thumbnail").children(".overlay").css({
        "transform": "scale(1.2)",
        "opacity": "0",
        "z-index": "-1"
    });
})