import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function initAdvantagesOccurAnimation() {
  const itemsAnimate = document.querySelector(".js-advantages-occur")?.children
  
  function initAnimation(itemsAnimate) {
    gsap.set(itemsAnimate, {y: 40, opacity: 0})
    itemsAnimate?.forEach((item, index) => {
      const tl = gsap.to(item,{
        y: 0,
        opacity: 1,
        duration: 1.75,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: ".js-advantages-occur",
          start: "top 80%"
        }
      })
    })
  }
  initAnimation(itemsAnimate)
}