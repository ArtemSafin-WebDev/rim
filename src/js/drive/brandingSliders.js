import {Swiper, Parallax, Navigation, Pagination} from "swiper"

Swiper.use([Parallax, Navigation, Pagination])

export default function initBrandingSliders() {
  const sliders = document.querySelectorAll(".js-branding-slider");
  const list = document.querySelector(".js-branding-list")?.children
  
  list[0].classList.add("branding__tab-info--active")
  function initSliders(slider) {
    new Swiper(slider, {
      on: {
        slideChange() {
          const slideIdx = this?.activeIndex
          
          list.forEach((li, index) => {
            li.classList.remove("branding__tab-info--active")
            if(index === slideIdx) {
              list[slideIdx].classList.add("branding__tab-info--active")
            }
          })
        }
      },
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
      },
    })
  }
  sliders.forEach((slider) => {
    initSliders(slider)
  })
}