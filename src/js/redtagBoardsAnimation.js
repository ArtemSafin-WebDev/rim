import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function redtagBoardsAnimation() {
  const boardOne = document.querySelector(".redtag-place__billboard-one");
  const boardTwo = document.querySelector(".redtag-place__billboard-two");
  
  if(!boardOne || !boardTwo) return
  
  gsap.set(boardOne, {y: 150, rotate: -5, opacity: 0})
  gsap.set(boardTwo, {y: 150, rotate: 5, opacity: 0})
  
  function initAnimation() {
    gsap.to(boardOne, {
      y: 0,
      duration: 1,
      opacity: 1,
      delay: .2,
      rotate: 0,
      scrollTrigger: {
        trigger: ".redtag-place__line",
        start: "bottom 100%",
        once: true,
      }
    })
    
    gsap.to(boardTwo, {
      y: 0,
      duration: 1,
      delay: .4,
      opacity: 1,
      rotate: 0,
      scrollTrigger: {
        trigger: ".redtag-place__line",
        start: "bottom 100%",
        once: true,
      }
    })
  }
  
  initAnimation()
}