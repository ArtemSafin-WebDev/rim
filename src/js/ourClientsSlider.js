import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function ourClientsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-our-clients-slider'));
    if (document.body.classList.contains('is-admin')) return;

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            speed: 500,
            watchOverflow: true,
            spaceBetween: 100,
            loop: true,
            navigation: {
                nextEl: element.querySelector('.clients__our-clients-block-slider-arrow--next'),
                prevEl: element.querySelector('.clients__our-clients-block-slider-arrow--prev')
            },
            breakpoints: {
                641: {
                    slidesPerView: 3,
                },
                1025: {
                    slidesPerView: 4,
                }
            }
        });
    });
}
