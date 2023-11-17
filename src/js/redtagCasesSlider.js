import { Swiper, Navigation, Pagination, EffectFade, Parallax } from 'swiper';

Swiper.use([Navigation, Pagination, EffectFade, Parallax]);

export default function redtagCasesSlider() {
  const slider = document.querySelector(".js-redtag-cases-slider");
  const speed = Number(slider?.dataset?.speed)
  
  if(!slider) return
  
  function initSwiper(slider) {
    new Swiper(slider, {
      parallax: true,
      speed: speed || 1000,
      slideToClickedSlide: true,
      spaceBetween: 50,
      breakpoints: {
        1920: {
          spaceBetween: 200
        },
        1680: {
          spaceBetween: 50
        },
        1440: {
          spaceBetween: 50
        }
      },
      navigation: {
        prevEl: ".redtag-cases__button-left",
        nextEl: ".redtag-cases__button-right"
      },
      pagination: {
        el: ".redtag-cases__pagination",
        type: "fraction"
      }
    })
  }
  
  initSwiper(slider)
}