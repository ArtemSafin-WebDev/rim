export default function removeMapOnMobile() {
  const map = document.querySelector(".js-about-map")
  
  if(!map) return
  
  if(window.matchMedia("(max-width: 768px)").matches) {
    map.remove()
  }
}