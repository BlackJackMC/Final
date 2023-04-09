$("#category .owl-carousel.slider").owlCarousel({
    nav: true,
    dots: false,
    rewind: true,
    margin: 10,
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
        900 : {
            items: 3
        },
        1200: {
            items: 4
        }
    }
})