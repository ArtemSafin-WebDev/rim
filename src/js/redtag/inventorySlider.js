import {Swiper, Parallax} from "swiper"

Swiper.use([Parallax])

export default function inventorySlider() {
  const slider = document.querySelector(".js-inventory-slider")
  
  if(!slider) return
  function initSwiper(slider) {
    const swiper = new Swiper(slider, {
      parallax: true,
      slidesPerView: "auto",
    })
  }
  
  if(window.matchMedia("(max-width: 900px)").matches) {
    initSwiper(slider)
  }
}