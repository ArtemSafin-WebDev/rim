import { Swiper, Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export default function qualitySlider() {
    const elements = Array.from(document.querySelectorAll('.js-quality-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        const links = Array.from(element.querySelectorAll('.quality__slider-controls-btn'));

        const setActiveLink = index => {
            links.forEach(link => link.classList.remove('active'));

            links[index].classList.add('active');
        };

        const instance = new Swiper(container, {
            slidesPerView: 1,
            watchOverflow: true,
            init: false,
            threshold: 5,
            pagination: {
                el: element.querySelector('.quality__slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            on: {
                init: swiper => {
                    setActiveLink(swiper.realIndex);
                },
                slideChange: swiper => {
                    setActiveLink(swiper.realIndex);
                }
            }
        });

        instance.init();

        links.forEach((link, linkIndex) => {
            link.addEventListener('click', event => {
                event.preventDefault();

                instance.slideTo(linkIndex);
            });
            instance.slideTo(linkIndex);
        });
    });
}
