import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function initScrollTrigger() {
  const containers = document.querySelectorAll(".js-scroll-container")
  
  function setScrollAnimation(item, index, container) {
    gsap.to(item, {
      opacity: 1,
      delay: .4 * (index * 0.4),
      duration: .6,
      y: 0,
      scrollTrigger: {
        trigger: container,
        start: "top 40%"
      }
    })
  }
  containers?.forEach((container) => {
    const items = container?.querySelectorAll(".js-scroll-item")
    gsap.set(items, { y: 20, opacity: 0 })
    
    items?.forEach((el, index) => setScrollAnimation(el, index, container))
  })
}