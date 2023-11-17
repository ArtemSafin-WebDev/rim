export default function redtagIntro() {
  const button = document.querySelector(".redtag-intro__arrow-button");
  const element = document.querySelector(".redtag-ads")
  
  if(!button || !element) {
    return
  }
  
  button.addEventListener("click", () => {
    element?.scrollIntoView({behavior: "smooth", block: "center"})
  })
}