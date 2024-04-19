import { Swiper, Navigation, Pagination, EffectFade, Controller } from 'swiper';

Swiper.use([Navigation, Pagination, EffectFade, Controller]);

export default function geographyInnerSliders() {
    const elements = Array.from(document.querySelectorAll('.js-geography-leaders-inner-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            threshold: 5,
            speed: 600,
            // effect: 'fade',
            nested: true,
            navigation: {
                nextEl: element.querySelector('.geography__leaders-slider-card-slider-arrow--next'),
                prevEl: element.querySelector('.geography__leaders-slider-card-slider-arrow--prev')
            },
            fadeEffect: {
                crossFade: false
            }
        });
    });
}
