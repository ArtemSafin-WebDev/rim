import { Swiper, Parallax, Navigation } from 'swiper';

Swiper.use([Parallax, Navigation]);

export default function initEntrySlider() {
  const slider = document.querySelector(".js-entry-slider");
  const navigation = document.querySelector(".js-entry-navigation")
  const lineIcon = document.querySelector(".js-entry-line-icon")
  
  if(!slider) return
  
  const buttonPrev = navigation.querySelector(".js-button-prev")
  const buttonNext = navigation.querySelector(".js-button-next")
  
  function setLineXPosition(slider) {
    lineIcon.style.transform = `translateX(${slider.translate * 0.78}px)`
  }
  
  function initSwiper(slider, options) {
    return new Swiper(slider, {
      slidesPerView: 3,
      parallax: true,
      slideToClickedSlide: true,
      spaceBetween: 20,
      speed: 900,
      // allowTouchMove: (window.matchMedia("(max-width: 600px)").matches ? true : false),
      on: {
        slideChange() {
          const slider = this
          setLineXPosition(slider)
        }
      },
      navigation: {
        prevEl: options?.buttonPrev,
        nextEl: options?.buttonNext,
      },
      breakpoints: {
        1200: {
          slidesPerView: "auto"
        },
        1024: {
          slidesPerView: "auto"
        },
        768: {
          slidesPerView: "auto"
        },
        640: {
          slidesPerView: "auto"
        },
        320: {
          slidesPerView: "auto"
        }
      }
    })
  }
  
  initSwiper(slider, {
    buttonPrev,
    buttonNext,
  })
}

