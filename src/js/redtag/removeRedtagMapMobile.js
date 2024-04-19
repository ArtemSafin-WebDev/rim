export default function removeRedtagMapMobile() {
  const map = document.querySelector(".js-map")
  
  if(!map) return
  
  if(window.matchMedia("(max-width: 641px)").matches) {
    map.remove()
  }
}