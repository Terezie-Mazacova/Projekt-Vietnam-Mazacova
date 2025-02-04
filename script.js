// == SLIDER ==
document.addEventListener('DOMContentLoaded', function () {
    const splides = document.querySelectorAll('.splide');

    splides.forEach(function (splideElement) {
        new Splide(splideElement, {
        perPage: 1,
        gap: '16px',
        pagination: false,
        arrows: true,
        //type: 'loop',
        //autoplay: true,
        //interval: 1000,
        //speed: 500000,
        /*
        breakpoints: {
            1280: {
                perPage: 1,
            },
            
            1023: {
                perPage: 3,
            },

            767: {
                perPage: 2,
            },

            480: {
                perPage: 1
            }
        },
        */
        }).mount();
    });
});


