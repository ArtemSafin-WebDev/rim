import gsap from "gsap";

export default function geographyMapAnimation() {
  const map = document.querySelector(".js-redtag-geography-map")
  const trigger = document.querySelector(".js-geo-map-trigger")
  const mapItems = document.querySelectorAll(".map-item")
  
  if(!map) return
  
  gsap.set(map, {y: 50, opacity: 0})
  
  mapItems?.forEach((item, index) => {
    gsap.set(item, {y: 10, opacity: 0})
  })
  
  function setItemsAnimation(items) {
    items?.forEach((item, index) => {
      gsap.to(item, {
        y: 0,
        duration: 1,
        opacity: 1,
        delay: index * 0.05
      })
    })
  }
  
  function initCardAnimation(map) {
    gsap.to(map, {
      y: 0,
      opacity: 1,
      delay: .2,
      ease: "power1.out",
      duration: 1.2,
      scrollTrigger: {
        trigger: trigger,
        start: "top 55%",
        onEnter: () => {
          setTimeout(() => setItemsAnimation(mapItems), 1000)
        }
      }
    })
  }
  
  initCardAnimation(map)
}