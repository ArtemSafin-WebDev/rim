import horizontalLoop from "./utils/horizontalLoop";
import gsap from "gsap";

export default function marketLoopAnimation() {
  const speed = Number(document.querySelector(".js-market-line")?.dataset?.speed)
  
  const marketLoopTapes = document?.querySelector(".js-market-line")?.children
  
  if(!marketLoopTapes) return
  const tl = horizontalLoop(marketLoopTapes, {
    repeat: -1,
    speed: speed || 1,
    paddingRight: parseFloat(gsap.getProperty(marketLoopTapes[0], "marginRight", "px"))
  })
  
  marketLoopTapes?.forEach((tape) => {
    tape.addEventListener("mouseenter", () => gsap.to(tl, {timeScale: 0, overwrite: true}));
    tape.addEventListener("mouseleave", () => gsap.to(tl, {timeScale: speed, overwrite: true}));
  });
}