import {Swiper, Parallax, Navigation, Pagination} from "swiper"

Swiper.use([Parallax, Navigation, Pagination])

export default function initBrandingSliders() {
  const sliders = document.querySelectorAll(".js-branding-slider");
  function initSliders(slider) {
    new Swiper(slider, {
      watchOverflow: true,
      parallax: true,
      speed: 1000,
      slidesPerView: "auto",
      navigation: {
        prevEl: ".js-branding-prev",
        nextEl: ".js-branding-next"
      },
      pagination: {
        type: "bullets",
        el: ".js-branding-pagination"
      }
    })
  }
  sliders.forEach((slider) => {
    initSliders(slider)
  })
}