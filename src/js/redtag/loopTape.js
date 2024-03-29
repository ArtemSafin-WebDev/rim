import horizontalLoop from "../helpers/horizontalLoop";
import gsap from "gsap";

export default function loopTape() {
  const speed = Number(document.querySelector(".js-tape-loop")?.dataset?.speed)
  
  const loopTapes = document?.querySelector(".js-tape-loop")?.children
  
  if(!loopTapes) return
  const tl = horizontalLoop(loopTapes, {
    repeat: -1,
    speed: speed,
    paddingRight: parseFloat(gsap.getProperty(loopTapes[0], "marginRight", "px"))
  })
}