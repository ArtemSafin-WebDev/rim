export default function redtagIntro() {
  const button = document.querySelector(".redtag-intro__arrow-button");
  const element = document.querySelector(".js-scroll-intro-trigger")
  const newHeader = document.querySelector(".new-header")
  const redtagHeader = document.querySelector(".redtag-header")
  
  if(!button || !element) return
  
  const yOffsetHeader = -(redtagHeader?.clientHeight + newHeader?.clientHeight)
  const yPos = element.getBoundingClientRect().top + window.scrollY + yOffsetHeader
  
  button.addEventListener("click", () => {
    window.scrollTo({ top: yPos, behavior: "smooth" })
  })
}