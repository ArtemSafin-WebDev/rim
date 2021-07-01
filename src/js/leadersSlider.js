import { Swiper, Navigation, Pagination, EffectFade, Controller } from 'swiper';

Swiper.use([Navigation, Pagination, EffectFade, Controller]);

export default function leadersSlider() {
    const elements = Array.from(document.querySelectorAll('.js-leaders-slider'));
    if (document.body.classList.contains('is-admin')) return;

    elements.forEach(element => {
        const navContainer = element.querySelector('.geography__leaders-slider-nav .swiper-container');
        const mainContainer = element.querySelector('.geography__leaders-slider-main .swiper-container');
        const links = Array.from(element.querySelectorAll('.geography__leaders-slider-nav-card'));

        const setActiveLink = index => {
            links.forEach(link => link.classList.remove('active'));
            links[index].classList.add('active');
        };

        const navSlider = new Swiper(navContainer, {
            watchOverflow: true,
            slidesPerView: 'auto',
            spaceBetween: 15,
            threshold: 5,
            navigation: {
                nextEl: element.querySelector('.geography__leaders-slider-nav-arrow--next'),
                prevEl: element.querySelector('.geography__leaders-slider-nav-arrow--prev')
            }
        });

        const mainSlider = new Swiper(mainContainer, {
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: element.querySelector('.geography__leaders-slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            init: false,
            on: {
                init: swiper => {
                    setActiveLink(swiper.realIndex);
                },
                slideChange: swiper => {
                    setActiveLink(swiper.realIndex);
                }
            }
        });

        mainSlider.init();

        if (window.matchMedia('(max-width: 640px)').matches) {
            mainSlider.controller.control = navSlider;
            navSlider.controller.control = mainSlider;
        }

        links.forEach((link, linkIndex) => {
            link.addEventListener('click', event => {
                event.preventDefault();

                mainSlider.slideTo(linkIndex);
            });
        });
    });
}
