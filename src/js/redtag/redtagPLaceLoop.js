import horizontalLoop from "../helpers/horizontalLoop";
import gsap from "gsap";

export default function redtagPlaceLoop() {
  const speed = Number(document.querySelector(".js-place-line")?.dataset?.speed)
  
  const placeLoopTapes = document?.querySelector(".js-place-line")?.children
  
  if(!placeLoopTapes) return
  const tl = horizontalLoop(placeLoopTapes, {
    repeat: -1,
    speed: speed || 1,
    paddingRight: parseFloat(gsap.getProperty(placeLoopTapes[0], "marginRight", "px"))
  })
}