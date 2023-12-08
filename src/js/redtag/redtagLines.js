export default function redtagLines() {
  const mainTag = document.querySelector("main")
  
  if(!mainTag) {
    return
  }
  const lines = mainTag?.querySelector(".redtag-lines")
  
  if(!lines) {
    return
  }
  
  const website_HEIGHT = mainTag.offsetHeight
  lines.style.height = `${website_HEIGHT.toString()}px`;
}