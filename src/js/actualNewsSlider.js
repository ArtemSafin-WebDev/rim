import { Swiper, Navigation, Pagination, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, EffectFade]);

export default function actualNewsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-actual-news-slider'));
    if (document.body.classList.contains('is-admin')) return;

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: element.querySelector('.actual-news__slider-arrow--next'),
                prevEl: element.querySelector('.actual-news__slider-arrow--prev')
            }
        });
    });
}
