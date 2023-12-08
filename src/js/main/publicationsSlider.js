import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function publicationsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-publications-slider'));
    if (document.body.classList.contains('is-admin')) return;

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            spaceBetween: 38,
            slidesPerView: 'auto',
            centeredSlides: true,
            slideToClickedSlide: true,
            loop: true,
            pagination: {
                el: element.querySelector('.publications__slider-pagination'),
                type: 'bullets',
                clickable: true
            }
        });
    });
}
