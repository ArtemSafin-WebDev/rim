export default function headerAnimation() {
  const header = document.querySelector(".redtag-header");
  let currentPos
  
  if(!header) return
  
  window.addEventListener("scroll", () => {
    currentPos = window.scrollY;
    
    if(currentPos >= 80) {
      header.classList.add('redtag-header--active')
    } else {
      header.classList.remove('redtag-header--active')
    }
  })
}