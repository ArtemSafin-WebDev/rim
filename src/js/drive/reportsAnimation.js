import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DrawSVGPlugin from "../helpers/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger)

export default function initReportsAnimation() {
  const svgItem = document.querySelector(".js-reports-svg");
  const lists = document.querySelectorAll(".js-reports-animation-list")
  const trigger = document.querySelector(".js-reports-trigger")
  
  if(!trigger) return
  
  gsap.set(svgItem, { drawSVG: "0" })
  
  function drawSVGAnimation(svgItem) {
    gsap.to(svgItem, {
      duration: 4,
      drawSVG: "100%",
      ease: "power1.out"
    })
  }
  
  function initAnimationOccurrence(lists, trigger) {
    gsap.set(lists, { y: 50, duration: 3, opacity: 0 })
    
    lists?.forEach((list, index) => {
      gsap.to(list, {
        y: 0,
        opacity: 1,
        delay: index * 0.2,
        ease: "power1.out",
        onComplete: () => drawSVGAnimation(svgItem),
        scrollTrigger: {
          trigger: trigger,
          start: "top 60%",
        }
      })
    })
  }
  
  initAnimationOccurrence(lists, trigger)
}