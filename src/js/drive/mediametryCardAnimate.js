import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin([ScrollTrigger])

export default function initCarMediametryAnimation() {
  const mediametryContainer = document.querySelector(".js-mediametry-trigger");
  const itemAnimate = document.querySelector(".js-mediametry-car-animate")
  
  if(!mediametryContainer || !itemAnimate) return
  
  gsap.set(itemAnimate, { xPercent: 50 })
  
  function initAnimation(mediametryContainer, itemAnimate) {
    const tl = gsap.to(itemAnimate, {
      xPercent: 0,
      ease: "power1.out",
      duration: 1.5,
      scrollTrigger: {
        trigger: mediametryContainer,
        start: "top 60%"
      }
    })
  }
  
  initAnimation(mediametryContainer, itemAnimate)
}