import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function initAnimation() {
  const triggers = document.querySelectorAll(".js-animation-trigger")
  function initAnimation(items, trigger) {
    const tl = gsap.set(items, { y: 40, opacity: 0 })
    
    items?.forEach((item, index) => {
      gsap.to(item, {
        y: 0,
        duration: 1,
        opacity: 1,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: trigger,
          start: "top 40%"
        }
      })
    })
  }

  triggers?.forEach((trigger, index) => {
    const items = trigger.querySelectorAll(".js-animation-animate")

    initAnimation(items, trigger)
  })
}