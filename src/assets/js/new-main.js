document.addEventListener('DOMContentLoaded', () => {
    const aboutUsBlocks = Array.from(document.querySelectorAll('.new-main-about-us__slider'));
    aboutUsBlocks.forEach(block => {
        const container = block.querySelector('.swiper');
        if (!container) return;
        const wrapper = block.querySelector('.swiper-wrapper');

        const slides = Array.from(block.querySelectorAll('.swiper-slide'));

        const pagination = block.querySelector('.new-main-about-us__slider-pagination');

        slides.forEach(slide => wrapper.append(slide.cloneNode(true)));

        const bullets = slides.map(() => {
            const item = document.createElement('div');
            item.classList.add('new-main-about-us__slider-pagination-bullet');
            return item;
        });

        const setActiveBullet = index => {
            const activeIndex = index;
            bullets.forEach(bullet => bullet.classList.remove('active'));
            const activeBulletIndex = index > slides.length - 1 ? index - slides.length : activeIndex;
            bullets[activeBulletIndex]?.classList.add('active');
        };

        const instance = new Swiper(container, {
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,

            speed: 600,
            navigation: {
                prevEl: block.querySelector('.new-main-about-us__slider-arrow--prev'),
                nextEl: block.querySelector('.new-main-about-us__slider-arrow--next')
            },
            on: {
                init: swiper => {
                    setActiveBullet(swiper.realIndex);
                },
                slideChange: swiper => {
                    setActiveBullet(swiper.realIndex);
                }
            }
        });

        bullets.forEach((bullet, bulletIndex) => {
            pagination.append(bullet);
            bullet.addEventListener('click', event => {
                event.preventDefault();
                instance.slideToLoop(bulletIndex);
            });
        });
    });

    const aboutUsMobile = Array.from(document.querySelectorAll('.new-main-about-us__mobile-slider'));

    aboutUsMobile.forEach(block => {
        const container = block.querySelector('.swiper');
        if (!container) return;
        const wrapper = block.querySelector('.swiper-wrapper');

        const slides = Array.from(block.querySelectorAll('.swiper-slide'));

        const pagination = block.querySelector('.new-main-about-us__mobile-slider-pagination');

        slides.forEach(slide => wrapper.append(slide.cloneNode(true)));

        const bullets = slides.map(() => {
            const item = document.createElement('div');
            item.classList.add('new-main-about-us__slider-pagination-bullet');
            return item;
        });

        const setActiveBullet = index => {
            const activeIndex = index;
            bullets.forEach(bullet => bullet.classList.remove('active'));
            const activeBulletIndex = index > slides.length - 1 ? index - slides.length : activeIndex;
            bullets[activeBulletIndex]?.classList.add('active');
        };

        const instance = new Swiper(container, {
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            speed: 600,
            navigation: {
                prevEl: block.querySelector('.new-main-about-us__mobile-slider-arrow--prev'),
                nextEl: block.querySelector('.new-main-about-us__mobile-slider-arrow--next')
            },
            on: {
                init: swiper => {
                    setActiveBullet(swiper.realIndex);
                },
                slideChange: swiper => {
                    setActiveBullet(swiper.realIndex);
                }
            }
        });

        bullets.forEach((bullet, bulletIndex) => {
            pagination.append(bullet);
            bullet.addEventListener('click', event => {
                event.preventDefault();
                instance.slideToLoop(bulletIndex);
            });
        });
    });

    const reviewsBlocks = Array.from(document.querySelectorAll('.new-main-reviews__slider'));

    reviewsBlocks.forEach(block => {
        const container = block.querySelector('.swiper');
        if (!container) return;
        const wrapper = block.querySelector('.swiper-wrapper');

        const slides = Array.from(block.querySelectorAll('.swiper-slide'));

        const pagination = block.querySelector('.new-main-reviews__slider-pagination');

        slides.forEach(slide => wrapper.append(slide.cloneNode(true)));

        const bullets = slides.map(() => {
            const item = document.createElement('div');
            item.classList.add('new-main-reviews__slider-pagination-bullet');
            return item;
        });

        const setActiveBullet = index => {
            const activeIndex = index;
            bullets.forEach(bullet => bullet.classList.remove('active'));
            const activeBulletIndex = index > slides.length - 1 ? index - slides.length : activeIndex;
            bullets[activeBulletIndex]?.classList.add('active');
        };

        const instance = new Swiper(container, {
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            speed: 600,
            navigation: {
                prevEl: block.querySelector('.new-main-reviews__slider-arrow--prev'),
                nextEl: block.querySelector('.new-main-reviews__slider-arrow--next')
            },
            on: {
                init: swiper => {
                    setActiveBullet(swiper.realIndex);
                },
                slideChange: swiper => {
                    setActiveBullet(swiper.realIndex);
                }
            }
        });

        bullets.forEach((bullet, bulletIndex) => {
            pagination.append(bullet);
            bullet.addEventListener('click', event => {
                event.preventDefault();
                instance.slideToLoop(bulletIndex);
            });
        });
    });

    const reviewsBlocksMobile = Array.from(document.querySelectorAll('.new-main-reviews__slider-mobile'));

    reviewsBlocksMobile.forEach(block => {
        const container = block.querySelector('.swiper');
        if (!container) return;
        const wrapper = block.querySelector('.swiper-wrapper');

        const slides = Array.from(block.querySelectorAll('.swiper-slide'));

        const pagination = block.querySelector('.new-main-reviews__slider-mobile-pagination');

        slides.forEach(slide => wrapper.append(slide.cloneNode(true)));

        const bullets = slides.map(() => {
            const item = document.createElement('div');
            item.classList.add('new-main-reviews__slider-pagination-bullet');
            return item;
        });

        const setActiveBullet = index => {
            const activeIndex = index;
            bullets.forEach(bullet => bullet.classList.remove('active'));
            const activeBulletIndex = index > slides.length - 1 ? index - slides.length : activeIndex;
            bullets[activeBulletIndex]?.classList.add('active');
        };

        const instance = new Swiper(container, {
            centeredSlides: true,
            slidesPerView: 'auto',
            loop: true,
            speed: 600,
            navigation: {
                prevEl: block.querySelector('.new-main-reviews__slider-mobile-arrow--prev'),
                nextEl: block.querySelector('.new-main-reviews__slider-mobile-arrow--next')
            },
            on: {
                init: swiper => {
                    setActiveBullet(swiper.realIndex);
                },
                slideChange: swiper => {
                    setActiveBullet(swiper.realIndex);
                }
            }
        });

        bullets.forEach((bullet, bulletIndex) => {
            pagination.append(bullet);
            bullet.addEventListener('click', event => {
                event.preventDefault();
                instance.slideToLoop(bulletIndex);
            });
        });
    });

    const newMainNews = Array.from(document.querySelectorAll('.new-main-news'));

    newMainNews.forEach(block => {
        const btns = Array.from(block.querySelectorAll('.new-main-news__toggle-btn'));
        const items = Array.from(block.querySelectorAll('.new-main-news__tabs-item'));
        const sliders = Array.from(block.querySelectorAll('.new-main-news__slider'));

        const setActiveTab = index => {
            btns.forEach(btn => btn.classList.remove('active'));
            items.forEach(item => item.classList.remove('active'));
            btns[index]?.classList.add('active');
            items[index]?.classList.add('active');
        };

        setActiveTab(0);

        btns.forEach((btn, btnIndex) => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                setActiveTab(btnIndex);
            });
        });

        sliders.forEach(slider => {
            const container = slider.querySelector('.swiper');
            const wrapper = slider.querySelector('.swiper-wrapper');

            const slides = Array.from(slider.querySelectorAll('.swiper-slide'));
            slides.forEach(slide => wrapper.append(slide.cloneNode(true)));
            const instance = new Swiper(container, {
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                spaceBetween: 0,
                centeredSlides: true,
                loop: true,
                speed: 600,
                navigation: {
                    prevEl: slider.querySelector('.new-main-news__slider-arrow:nth-child(1)'),
                    nextEl: slider.querySelector('.new-main-news__slider-arrow:nth-child(2)')
                },
                breakpoints: {
                    641: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 20,
                        centeredSlides: false
                    }
                }
            });

            instance.slideTo(2);
        });
    });

    const intro = Array.from(document.querySelectorAll('.new-main-intro__slider'));

    function b({ swiper: a, extendParams: s, on: o }) {
        s({
            panoramaEffect: {
                depth: 550,
                rotate: 445
            }
        }),
            o('beforeInit', () => {
                if (a.params.effect !== 'panorama') return;
                a.classNames.push(`${a.params.containerModifierClass}panorama`), a.classNames.push(`${a.params.containerModifierClass}3d`);
                const r = {
                    watchSlidesProgress: !0
                };
                Object.assign(a.params, r), Object.assign(a.originalParams, r);
            }),
            o('progress', () => {
                if (a.params.effect !== 'panorama') return;
                const r = a.slidesSizesGrid,
                    { depth: e = 200, rotate: t = 30 } = a.params.panoramaEffect,
                    g = (t * Math.PI) / 180 / 2,
                    h = 1 / (180 / t);
                for (let i = 0; i < a.slides.length; i += 1) {
                    const d = a.slides[i],
                        P = d.progress,
                        c = r[i],
                        y = a.params.centeredSlides ? 0 : (a.params.slidesPerView - 1) * 0.5,
                        l = P + y,
                        f = 1 - Math.cos(l * h * Math.PI),
                        m = `${l * (c / 3) * f}px`,
                        p = l * t,
                        u = `${((c * 0.5) / Math.sin(g)) * f - e}px`;
                    d.style.transform =
                        a.params.direction === 'horizontal'
                            ? `translateX(${m}) translateZ(${u}) rotateY(${p}deg)`
                            : `translateY(${m}) translateZ(${u}) rotateX(${-p}deg)`;
                }
            }),
            o('setTransition', (r, e) => {
                a.params.effect === 'panorama' &&
                    a.slides.forEach(t => {
                        t.style.transitionDuration = `${e}ms`;
                    });
            });
    }

    intro.forEach(intro => {
        const container = intro.querySelector('.swiper');
        const wrapper = intro.querySelector('.swiper-wrapper');

        const slides = Array.from(intro.querySelectorAll('.swiper-slide'));

        slides.forEach(slide => wrapper.append(slide.cloneNode(true)));

        new Swiper(container, {
            modules: [b],
            centeredSlides: true,
            slidesPerView: 'auto',
            effect: 'panorama',
            spaceBetween: 20,
            panoramaEffect: { depth: 150, rotate: 25 },
            loop: true
        });
    });
});
