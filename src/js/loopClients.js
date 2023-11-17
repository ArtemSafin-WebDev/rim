import horizontalLoop from "./utils/horizontalLoop";
import gsap from "gsap";

export default function loopClients() {
  const speed = Number(document.querySelector(".js-clients-line")?.dataset?.speed)
  
  const loopClientsLine = document?.querySelector(".js-clients-line")?.children
  
  if(!loopClientsLine) return
  const tl = horizontalLoop(loopClientsLine, {
    repeat: -1,
    speed: speed,
    paddingRight: parseFloat(gsap.getProperty(loopClientsLine[0], "marginRight", "px"))
  })
  
  loopClientsLine?.forEach((tape) => {
    tape.addEventListener("mouseenter", () => gsap.to(tl, {timeScale: 0, overwrite: true}));
    tape.addEventListener("mouseleave", () => gsap.to(tl, {timeScale: speed, overwrite: true}));
  });
}