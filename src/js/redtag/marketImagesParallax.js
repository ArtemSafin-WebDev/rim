import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function marketImagesParallax() {
  const imageOne = document.querySelector(".redtag-market__item-image-one")
  const imageTwo = document.querySelector(".redtag-market__item-image-two")
  const triggerElement = document.querySelector(".js-market-trigger")
  
  if(!imageOne || !imageTwo) return
  
  gsap.set([imageOne], {y: 150})
  gsap.set([imageTwo], {y: -150})
  
  function initParallax(element, trigger, delay = 0.2) {
    gsap.to(element, {
      delay,
      y: 0,
      scrollTrigger: {
        scrub: 1,
        trigger,
      }
    })
  }
  
  initParallax(imageOne, triggerElement)
  initParallax(imageTwo, triggerElement)
}