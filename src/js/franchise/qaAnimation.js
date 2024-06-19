import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function initQaAnimation() {
  const trigger = document.querySelector(".js-qa-trigger")
  const lists = document.querySelectorAll(".js-qa-animate")
  
  if(!trigger) return
  
  function initAnimation(lists, trigger) {
    const tl = gsap.set(lists, { y: 40, opacity: 0 })
    
    lists?.forEach((list, index) => {
      gsap.to(list, {
        y: 0,
        duration: 1,
        opacity: 1,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: trigger
        }
      })
    })
  }
  
  initAnimation(lists, trigger)
}