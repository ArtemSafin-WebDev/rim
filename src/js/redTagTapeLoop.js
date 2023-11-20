import horizontalLoop from "./utils/horizontalLoop";
import gsap from "gsap";

export default function redTagTapeLoop() {
  const speed = Number(document.querySelector(".js-redtag-tape")?.dataset?.speed)
  
  const redtagTapes = document?.querySelector(".js-redtag-tape")?.children
  
  if(!redtagTapes) return
  const tl = horizontalLoop(redtagTapes, {
    repeat: -1,
    speed: speed,
    paddingLeft: parseFloat(gsap.getProperty(redtagTapes[0], "marginRight", "px"))
  })
}