export default function anchorNavigation() {
  const menu = document.querySelector(".js-anchor-nav")?.children
  const sections = document.getElementsByTagName("section")
  
  function slide(element) {
    element?.scrollIntoView({behavior: "smooth", block: "center"})
  }
  
  menu?.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const anchorAttr = event.currentTarget?.dataset?.anchor
      
      sections?.forEach((section) => {
        const ID = section?.id
        
        if(ID === anchorAttr) {
          slide(section)
        }
      })
    })
  })
}