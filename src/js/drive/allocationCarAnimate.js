import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function initAllocationCarAnimate() {
  const trigger = document.querySelector(".js-allocation-trigger")
  const endTrigger = document.querySelector(".js-allocation-endtrigger")
  const itemAnimate = document.querySelector(".js-allocation-car-animate")
  
  if(!trigger || !itemAnimate) return
  
  gsap.set(itemAnimate, { xPercent: 170 })
  
  function initAnimation(trigger, itemAnimate, endTrigger) {
    const tl = gsap.to(itemAnimate, {
      xPercent: -140,
      animationDuration: 100,
      scrollTrigger: {
        trigger: itemAnimate,
        start: "top 70%",
        end: "bottom 100%",
        scrub: true,
        endTrigger: endTrigger || null,
        once: true
      }
    })
  }
  
  initAnimation(trigger, itemAnimate, endTrigger)
}