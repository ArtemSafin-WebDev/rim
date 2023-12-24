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
      slidesPerView: "auto",
      parallax: true,
      slideToClickedSlide: true,
      spaceBetween: 20,
      speed: 900,
      on: {
        slideChange() {
          const slider = this
          setLineXPosition(slider)
        }
      },
      navigation: {
        prevEl: options?.buttonPrev,
        nextEl: options?.buttonNext,
      }
    })
  }
  
  initSwiper(slider, {
    buttonPrev,
    buttonNext,
  })
}

