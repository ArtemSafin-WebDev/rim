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

    const leaders = Array.from(document.querySelectorAll('.leaders'));

    leaders.forEach(block => {
        const container = block.querySelector('.swiper');
        if (!container) return;
        const wrapper = block.querySelector('.swiper-wrapper');

        const slides = Array.from(block.querySelectorAll('.swiper-slide'));

        const pagination = block.querySelector('.leaders__slider-pagination');

        slides.forEach(slide => wrapper.append(slide.cloneNode(true)));

        const bullets = slides.map(() => {
            const item = document.createElement('div');
            item.classList.add('leaders__slider-pagination-bullet');
            return item;
        });

        const setActiveBullet = index => {
            const activeIndex = index;
            bullets.forEach(bullet => bullet.classList.remove('active'));
            const activeBulletIndex = index > slides.length - 1 ? index - slides.length : activeIndex;
            bullets[activeBulletIndex]?.classList.add('active');
        };

        const instance = new Swiper(container, {
            slidesPerView: 1,
            loop: true,
            speed: 600,
            spaceBetween: 30,
            centeredSlides: false,
            navigation: {
                prevEl: block.querySelector('.leaders__slider-arrow--prev'),
                nextEl: block.querySelector('.leaders__slider-arrow--next')
            },
            autoheight: window.matchMedia('(max-width: 640px)').matches ? true : false,
            breakpoints: {
                641: {
                    spaceBetween: 170,
                    centeredSlides: true
                }
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

        let options = {
            modules: [b],
            centeredSlides: true,
            slidesPerView: 'auto',
            slidesPerGroup: 1,
            effect: 'panorama',
            spaceBetween: 5,
            panoramaEffect: { depth: 250, rotate: 20 },
            loop: true,
            breakpoints: {
                641: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 20
                }
            },
            autoplay: {
                delay: 0,
                disableOnInteraction: true
            },
            speed: 8000,
            allowTouchMove: false
        };

        /*if (!window.matchMedia('(max-width: 640px)').matches) {
            options = {
                ...options,

            };
        }*/

        new Swiper(container, options);
    });

    const tickers = Array.from(document.querySelectorAll('.js-ticker'));

    tickers.forEach(element => {
        const mainTrack = element.querySelector('.js-ticker-track');
        const innerTrack = element.querySelector('.js-ticker-inner-track');
        if (!innerTrack || !mainTrack) return;
        const items = Array.from(innerTrack.children);
        const REPEAT_COUNT = 4;

        for (let i = 0; i < REPEAT_COUNT; i++) {
            items.forEach(item => {
                innerTrack.appendChild(item.cloneNode(true));
            });
        }

        mainTrack.appendChild(innerTrack.cloneNode(true));
        mainTrack.appendChild(innerTrack.cloneNode(true));

        const innerTracks = Array.from(document.querySelectorAll('.js-ticker-inner-track'));

        function setTickerAnimation(item, reverse = false) {
            gsap.to(item, {
                ease: 'none',
                xPercent: reverse ? 100 : -100,
                duration: 300,
                repeat: -1
            });
        }

        innerTracks.forEach(innerTrack => {
            const even = innerTrack.closest('.exclusive__list-item:nth-child(even)');
            setTickerAnimation(innerTrack, !!even);
        });
    });

    const contactsTabs = Array.from(document.querySelectorAll('.new-contacts'));

    contactsTabs.forEach(tab => {
        const links = Array.from(tab.querySelectorAll('.new-contacts__tabs-nav-link'));
        const items = Array.from(tab.querySelectorAll('.new-contacts__tabs-item'));

        const setActiveTab = index => {
            links.forEach(link => link.classList.remove('active'));
            items.forEach(item => item.classList.remove('active'));
            links[index]?.classList.add('active');
            items[index]?.classList.add('active');
        };

        setActiveTab(0);

        links.forEach((link, linkIndex) => {
            link.addEventListener('click', event => {
                event.preventDefault();
                setActiveTab(linkIndex);
            });
        });
    });
    const interBubble = document.querySelector('.interactive');

    if (interBubble) {
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        function move() {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(() => {
                move();
            });
        }

        window.addEventListener('mousemove', event => {
            tgX = event.clientX;
            tgY = event.clientY;
        });

        move();
    }

    const constructionImageSliders = Array.from(document.querySelectorAll('.constr__images-slider'));

    constructionImageSliders.forEach(block => {
        const container = block.querySelector('.swiper');
        if (!container) return;

        new Swiper(container, {
            slidesPerView: 1,
            speed: 600,
            navigation: {
                prevEl: block.querySelector('.constr__images-slider-arrow--prev'),
                nextEl: block.querySelector('.constr__images-slider-arrow--next')
            },
            pagination: {
                el: block.querySelector('.constr__images-slider-wrapper-pagination'),
                type: 'bullets',
                clickable: true
            }
        });
    });

    const constructionBlocks = Array.from(document.querySelectorAll('.constr'));
    constructionBlocks.forEach(block => {
        const firstLevelRadios = Array.from(block.querySelectorAll('.constr__block:nth-child(1) .constr__radio-input'));
        const secondLevelTabs = Array.from(block.querySelectorAll('.constr__block:nth-child(2) .constr__tabs-item'));
        const outerSlidersTabs = Array.from(block.querySelectorAll('.constr__left-col .constr__tabs-item'));
        const outerTextTabs = Array.from(block.querySelectorAll('.constr__block:nth-child(1) .constr__tabs-item'));
        const setActiveOuterTab = index => {
            outerSlidersTabs.forEach(tab => tab.classList.remove('active'));
            outerSlidersTabs[index]?.classList.add('active');
            outerTextTabs.forEach(tab => tab.classList.remove('active'));
            outerTextTabs[index]?.classList.add('active');
            secondLevelTabs.forEach(tab => tab.classList.remove('active'));
            secondLevelTabs[index]?.classList.add('active');

            console.log('Setting active tab', index);

            const correspondingRadios = Array.from(secondLevelTabs[index] ? secondLevelTabs[index].querySelectorAll('.constr__radio-input') : []);

            const innerSliderTabs = Array.from(outerSlidersTabs[index] ? outerSlidersTabs[index].querySelectorAll('.constr__tabs-inner-item') : []);
            const innerTextTabs = Array.from(secondLevelTabs[index] ? secondLevelTabs[index].querySelectorAll('.constr__tabs-inner-item') : []);

            if (correspondingRadios.length) {
                const activeIndex = correspondingRadios.findIndex(radio => radio.checked);

                const setActiveInnerTabs = index => {
                    innerSliderTabs.forEach(tab => tab.classList.remove('active'));
                    innerSliderTabs[index]?.classList.add('active');
                    innerTextTabs.forEach(tab => tab.classList.remove('active'));
                    innerTextTabs[index]?.classList.add('active');
                };

                setActiveInnerTabs(activeIndex);

                correspondingRadios.forEach(radio => {
                    radio.addEventListener('change', () => {
                        const activeIndex = correspondingRadios.findIndex(radio => radio.checked);
                        setActiveInnerTabs(activeIndex);
                    });
                });
            } else {
                innerSliderTabs.forEach(tab => tab.classList.remove('active'));
                innerSliderTabs[0]?.classList.add('active');
            }
        };

        firstLevelRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                const activeIndex = firstLevelRadios.findIndex(radio => radio.checked);
                setActiveOuterTab(activeIndex);
            });
        });

        const activeIndex = firstLevelRadios.findIndex(radio => radio.checked);
        setActiveOuterTab(activeIndex);
    });

    document.addEventListener('click', event => {
        if (event.target.matches('a') || event.target.closest('a')) {
            const link = event.target.matches('a') ? event.target : event.target.closest('a');
            const hash = link.hash;

            if (hash && hash.startsWith('#to-')) {
                event.preventDefault();

                const elementToScroll = document.getElementById(hash.replace(/^#to\-/, ''));
                if (elementToScroll) {
                    if (window.menuOpen) {
                        window.closeMenu();
                    } else {
                        console.log('menu not open');
                    }

                    const yCoord = elementToScroll.getBoundingClientRect().top;

                    window.scrollTo({
                        top: yCoord,
                        left: 0,
                        behavior: 'smooth'
                      })
                }
            }
        }
    });

});
