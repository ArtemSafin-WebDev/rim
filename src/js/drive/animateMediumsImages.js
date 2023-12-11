import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function initMediumsImagesAnimation() {
  const images = document.querySelectorAll(".js-mediums-image")
  
  function initAnimationItem(item) {
    if(!item) return
    
    const tl = gsap.to(item,{
      x: 0,
      opacity: 1,
      duration: 1.75,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: item,
        start: "top 100%"
      }
    })
  }
  
  function initAnimation(images) {
    if(!images[0] && !images[1]) return
    
    gsap.set(images[0], {x: 200, opacity: 0})
    gsap.set(images[1], {x: -200, opacity: 0})
    
    initAnimationItem(images[0])
    initAnimationItem(images[1])
  }
  initAnimation(images)
}