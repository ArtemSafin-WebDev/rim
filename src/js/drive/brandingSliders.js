import {Swiper, Parallax, Navigation, Pagination} from "swiper"

Swiper.use([Parallax, Navigation, Pagination])

export default function initBrandingSliders() {
  const slider = document.querySelector(".js-branding-slider");
  const buttons = document.querySelector(".js-branding-list")?.children
  
  buttons[0].classList.add("branding__tab-info--active")
  
  function initSlider(slider) {
    const brandingSlider = new Swiper(slider, {
      on: {
        slideChange() {
          const activeIndex = this.activeIndex
          
          buttons?.forEach((button, index) => {
            button.classList.remove("branding__tab-info--active")
            if(index === activeIndex) {
              button.classList.add("branding__tab-info--active")
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
    
    return brandingSlider
  }
  
  const currentSlider = initSlider(slider)
  
  function changeSlideByButton(indexToSlide) {
    currentSlider?.slideTo(indexToSlide)
  }
  
  function stylingSliderButton() {
    const slideIdx = currentSlider?.activeIndex
    
    buttons?.forEach((button, index) => {
      button.classList.remove("branding__tab-info--active")
      if(index === slideIdx) {
        button.classList.add("branding__tab-info--active")
      }
    })
  }
  buttons?.forEach((button, index) => {
    button.addEventListener("click", () => {
      changeSlideByButton(index)
      stylingSliderButton()
    })
  })
}

