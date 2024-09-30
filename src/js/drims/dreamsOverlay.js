import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DrawSVGPlugin from '../helpers/DrawSVGPlugin';
import { Swiper, Navigation, Pagination, EffectFade } from 'swiper';

Swiper.use([Navigation, Pagination, EffectFade]);

gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

function initDreamsOverlayAnimation() {
    const caseSection = document.querySelector('.dreams-case');

    if (!caseSection) return;

    const overlay = caseSection.querySelector('.js-dream-case-svg');
    const overlayPath = [...overlay.getElementsByTagName('path')];

    const title = caseSection.querySelector('.js-dream-case-title');

    gsap.set(title, { x: -10, opacity: 0 });

    gsap.set(overlayPath, {
        drawSVG: 0
    });

    overlayPath.forEach((item, index) => {
        gsap.to(item, {
            drawSVG: '100%',
            duration: 0.75,
            delay: (index + 1) * 0.25,
            scrollTrigger: {
                trigger: overlay,
                start: 'top 70%'
            }
        });
    });

    gsap.to(title, {
        opacity: 1,
        x: 0,
        scrollTrigger: {
            trigger: caseSection,
            start: 'top 60%'
        }
    });
}

function initDreamsSwiper() {
    const swiperContainer = document.querySelector('.dreams-case__swiper');
    const mobileRemove = swiperContainer.querySelectorAll('.mobile-remove');
    mobileRemove.forEach(item => {
        item.remove();
    });
    const swiper = new Swiper(swiperContainer, {
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            1000: {
                slidesPerView: 3
            },
            600: {
                slidesPerView: 2
            },
            0: {
                slidesPerView: 1
            }
        },
        pagination: {
            el: '.dreams-case__pagination'
        }
    });
}

export default function initCasesAnimation() {
    if (window.matchMedia('(min-width: 1400px)').matches) {
        initDreamsOverlayAnimation();
    }

    if (window.matchMedia('(max-width: 1399px)').matches) {
        initDreamsSwiper();
    }
}
