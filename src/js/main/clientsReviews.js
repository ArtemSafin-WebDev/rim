import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function clientsReviews() {
    const elements = Array.from(document.querySelectorAll('.js-clients-reviews'));
    if (document.body.classList.contains('is-admin')) return;

    console.log('Clients reviews', elements);

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 1,
            spaceBetween: 40,
            watchOverflow: true,
            speed: 700,
            autoHeight: true,
            loop: true,
            pagination: {
                el: element.querySelector('.clients__reviews-slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: element.querySelector('.clients__our-clients-block-slider-arrow--next'),
                prevEl: element.querySelector('.clients__our-clients-block-slider-arrow--prev')
            },
            breakpoints: {
                641: {
                    slidesPerView: 2,
                    spaceBetween: 60
                }
            }
        });
    });
}
