import { Swiper, Parallax } from 'swiper';

Swiper.use([Parallax]);

export default function initAdvantagesSlider() {
  const slider = document.querySelector(".js-advantages-slider");
  
  if(!slider) return
  
  function initSwiper(slider) {
    new Swiper(slider, {
      slidesPerView: "auto",
      parallax: true,
      slideToClickedSlide: true,
      spaceBetween: 20,
      speed: 900,
    })
  }
  
  initSwiper(slider)
}

