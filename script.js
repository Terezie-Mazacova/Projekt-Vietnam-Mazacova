// == SLIDER ==
document.addEventListener('DOMContentLoaded', function () {
    const splides = document.querySelectorAll('.splide');

    splides.forEach(function (splideElement) {
        new Splide(splideElement, {
        perPage: 1,
        pagination: false,
        arrows: true,
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


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));