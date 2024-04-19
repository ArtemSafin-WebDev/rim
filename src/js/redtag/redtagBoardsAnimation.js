import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function redtagBoardsAnimation() {
  const boardOne = document.querySelector(".redtag-place__billboard-one");
  const boardTwo = document.querySelector(".redtag-place__billboard-two");
  
  if(!boardOne || !boardTwo) return
  
  gsap.set(boardOne, {y: 150, rotate: -5})
  gsap.set(boardTwo, {y: 150, rotate: 5,})
  
  function initAnimation() {
    gsap.to(boardOne, {
      y: 0,
      duration: 1,
      opacity: 1,
      rotate: 0,
      scrollTrigger: {
        trigger: ".redtag-place__line",
        once: true,
      }
    })
    
    gsap.to(boardTwo, {
      y: 0,
      duration: 1,
      opacity: 1,
      rotate: 0,
      scrollTrigger: {
        trigger: ".redtag-place__line",
        once: true,
      }
    })
  }
  
  initAnimation()
}