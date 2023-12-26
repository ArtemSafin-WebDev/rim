import {Swiper, Parallax, Navigation} from 'swiper';

Swiper.use([Parallax, Navigation]);

export default function initAdvantagesSlider() {
  const slider = document.querySelector(".js-advantages-slider");
  
  if(!slider) return
  
  const buttonPrev = slider.querySelector(".js-button-prev")
  const buttonNext = slider.querySelector(".js-button-next")
  
  function initSwiper(slider, options) {
    new Swiper(slider, {
      slidesPerView: "auto",
      parallax: true,
      slideToClickedSlide: true,
      spaceBetween: 20,
      speed: 900,
      navigation: {
        nextEl: options?.buttonNext,
        prevEl: options?.buttonPrev
      }
    })
  }
  
  initSwiper(slider, {
    buttonPrev,
    buttonNext
  })
}

