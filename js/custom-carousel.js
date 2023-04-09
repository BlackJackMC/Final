$("#category .owl-carousel.slider").owlCarousel({
    nav: true,
    dots: false,
    rewind: true,
    margin: 16,
    navText: ["<div class=\"circle nav-prev\"><i class=\"fa-solid fa-angle-left\"></i></div>", "<div class=\"circle nav-next\"><i class=\"fa-solid fa-angle-right\"></i></div>"],
    responsive: {
        0: {
            items: 1
        },
        280 : {
            items: 1
        },
        500: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})
$(".owl-carousel.product-list").owlCarousel({
    nav: true,
    dots: false,
    rewind: true,
    margin: 10,
    navText: ["<div class=\"circle nav-prev\"><i class=\"fa-solid fa-angle-left\"></i></div>", "<div class=\"circle nav-next\"><i class=\"fa-solid fa-angle-right\"></i></div>"],
    responsive: {
        0: {
            items: 1
        },
        500: {
            items: 2
        },
        800 : {
            items: 3
        },
        1100: {
            items: 4
        }
    }
})
$("#home-center #image .owl-carousel").owlCarousel({
    nav: true,
    dots: false,
    rewind: true,
    margin: 0,
    navText: ["<div class=\"circle nav-prev\"><i class=\"fa-solid fa-angle-left\"></i></div>", "<div class=\"circle nav-next\"><i class=\"fa-solid fa-angle-right\"></i></div>"],
    items: 2
})

$("#home-center #feedback .owl-carousel").owlCarousel({
    nav: true,
    dots: false,
    rewind: true,
    margin: 0,
    navText: ["<div class=\"circle nav-prev\"><i class=\"fa-solid fa-angle-left\"></i></div>", "<div class=\"circle nav-next\"><i class=\"fa-solid fa-angle-right\"></i></div>"],
    responsive: {
        0: {
            items: 1
        },
        700: {
            items: 2
        },
        1460: {
            items: 1
        }
    }
})
$("#blog .owl-carousel").owlCarousel({
    nav: true,
    dots: false,
    rewind: true,
    margin: 16,
    navText: ["<div class=\"circle nav-prev\"><i class=\"fa-solid fa-angle-left\"></i></div>", "<div class=\"circle nav-next\"><i class=\"fa-solid fa-angle-right\"></i></div>"],
    responsive: {
        0: {
            items: 1
        },
        800 : {
            items: 3
        }
    }
})
$("#brand .owl-carousel").owlCarousel({
    nav: false,
    dots: false,
    rewind: true,
    margin: 16,
    responsive: {
        0: {
            items: 1
        },
        600 : {
            items: 2
        },
        800 : {
            items: 3
        },
        1000 : {
            items: 4
        },
        1200 : {
            items: 5
        }
    }
})
$("#brand .custom-nav .nav-prev").on("click", function(){
    $("#brand .owl-carousel").trigger("prev.owl.carousel");
})
$("#brand .custom-nav .nav-next").on("click", function(){
    $("#brand .owl-carousel").trigger("next.owl.carousel");
})