import {Swiper, Navigation, Parallax} from "swiper";

Swiper.use([Navigation, Parallax])

export default function initPartnerSlider() {
  const slider = document.querySelector(".js-partner-slider");
  
  if(!slider) return
  
  const prevButton = slider.querySelector(".js-prev-button")
  const nextButton = slider.querySelector(".js-next-button")
  
  function initSwiper(slider, options) {
    new Swiper(slider, {
      slidesPerView: "auto",
      parallax: true,
      slideToClickedSlide: true,
      spaceBetween: 70,
      speed: 900,
      navigation: {
        prevEl: options?.prevButton,
        nextEl: options?.nextButton
      }
    })
  }
  
  if(window.matchMedia("(min-width: 1024px)").matches) {
    initSwiper(slider, {
      prevButton,
      nextButton,
    })
  }
}