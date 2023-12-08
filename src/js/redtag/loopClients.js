import horizontalLoop from "../helpers/horizontalLoop";
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
}