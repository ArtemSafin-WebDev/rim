export default function redtagIntro() {
  const button = document.querySelector(".redtag-intro__arrow-button");
  const element = document.querySelector(".js-scroll-intro-trigger")
  
  if(!button || !element) {
    return
  }
  
  button.addEventListener("click", () => {
    element?.scrollIntoView({behavior: "smooth", block: "center"})
  })
}