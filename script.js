// == SLIDER ==
document.addEventListener('DOMContentLoaded', function () {
    const splides = document.querySelectorAll('.splide');

    splides.forEach(function (splideElement) {
        new Splide(splideElement, {
        perPage: 1,
        pagination: false,
        arrows: true,
        }).mount();
    });
});

// == EFFECT ==
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