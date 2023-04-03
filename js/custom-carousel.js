$("#category .owl-carousel.slider").owlCarousel({
    nav: true,
    rewind: true,
    margin: 0,
    navText: ["<div class=\"circle nav-prev\"><i class=\"fa-solid fa-angle-left\"></i></div>", "<div class=\"circle nav-next\"><i class=\"fa-solid fa-angle-right\"></i></div>"],
    responsive: {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        1200: {
            items: 3
        }
    }
})