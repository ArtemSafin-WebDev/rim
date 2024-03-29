import horizontalLoop from "../helpers/horizontalLoop";
import gsap from "gsap";

export default function initLoopFeedback() {
  const loopLine = document.querySelector(".js-feedback-line")?.children
  
  if(!loopLine) return
  
  const loopSpeed = document.querySelector(".js-feedback-line")?.dataset.speed
  
  const tl = horizontalLoop(loopLine, {
    repeat: -1,
    speed: loopSpeed,
    paddingRight: parseFloat(gsap.getProperty(loopLine[0], "marginRight", "px"))
  })
}