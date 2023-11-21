import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function redtagIntroAnimation() {
  const redtagIntro = document.querySelector(".redtag-intro")
  const arrayText = redtagIntro?.querySelectorAll(".js-intro-text")
  const direction = redtagIntro?.dataset?.direction
  
  const directionMap = {
    "left": {x: -20},
    "bottom": {y: 20}
  }
  
  if(!redtagIntro) return
  
  function initAnimation(element, index) {
    if(!element) return
    
    gsap.to(element, {
      x: 0,
      y: 0,
      delay: 0.1 * index,
      ease: "power1.out",
      opacity: 1,
      scrollTrigger: {
        trigger: redtagIntro,
      }
    })
  }
  
  console.log(directionMap[direction])
  
  arrayText?.forEach((text, index) => {
    gsap.set(text, {...directionMap[direction], opacity: 0})
    initAnimation(text, index)
  })
}