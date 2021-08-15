import { Swiper, Navigation, Pagination, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, EffectFade]);

export default function actualNewsSlider() {
    const elements = Array.from(document.querySelectorAll('.js-actual-news-slider'));
    if (document.body.classList.contains('is-admin')) return;

    elements.forEach(element => {
        const tabs = Array.from(document.querySelectorAll('.actual-news__slider-tab'));
        const btnTabs = Array.from(document.querySelectorAll('.actual-news__slider-arrows-tab'));
        const tabBtns = Array.from(document.querySelectorAll('.actual-news__slider-btn'));

        const setActiveTab = index => {
            tabs.forEach(tab => tab.classList.remove('active'));
            btnTabs.forEach(tab => tab.classList.remove('active'));
            tabBtns.forEach(btn => btn.classList.remove('active'));

            tabs[index].classList.add('active');
            btnTabs[index].classList.add('active');
            tabBtns[index].classList.add('active');
        };

        setActiveTab(0);

        tabBtns.forEach((btn, btnIndex) => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                setActiveTab(btnIndex);
            });
        });

        tabs.forEach((tab, tabIndex) => {
            const container = tab.querySelector('.swiper-container');

            let options = {
                slidesPerView: 1,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                navigation: {
                    nextEl: btnTabs[tabIndex].querySelector('.actual-news__slider-arrow--next'),
                    prevEl: btnTabs[tabIndex].querySelector('.actual-news__slider-arrow--prev')
                }
            }

            if (window.matchMedia('(max-width: 640px)').matches) {
                const sliderCards = Array.from(tab.querySelectorAll('.actual-news__slider-card'));
                const swiperWrapper = tab.querySelector('.swiper-wrapper');

                swiperWrapper.innerHTML = '';

                sliderCards.forEach(card => {
                    const swiperSlide = document.createElement('div');

                    swiperSlide.className = 'swiper-slide';

                    swiperSlide.appendChild(card);

                    swiperWrapper.appendChild(swiperSlide)
                });

                options = {
                    ...options,
                    slidesPerColumn: 2,
                    slidesPerColumnFill: 'row',
                    spaceBetween: 35,
                    effect: 'slide',
                    
                }

                console.log('new options', options)
            }

            new Swiper(container, options);
        });
    });
}
