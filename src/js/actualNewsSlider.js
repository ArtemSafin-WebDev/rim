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

            new Swiper(container, {
                slidesPerView: 1,
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                },
                navigation: {
                    nextEl: btnTabs[tabIndex].querySelector('.actual-news__slider-arrow--next'),
                    prevEl: btnTabs[tabIndex].querySelector('.actual-news__slider-arrow--prev')
                }
            });
        });
    });
}
