export default function anchorNavigation() {
  const menu = document.querySelector(".js-anchor-nav")?.children
  const sections = document.getElementsByTagName("section")
  const newHeader = document.querySelector(".new-header")
  const redtagHeader = document.querySelector(".redtag-header")
  const redtagFooter = document.querySelector(".redtag-footer")
  
  if(!redtagHeader && !redtagFooter) return
  
  const yOffsetHeader = -(redtagHeader.clientHeight + newHeader?.clientHeight - 20)
  
  function slide(element, yPos) {
    window.scrollTo({top: yPos, behavior: 'smooth'});
  }
  
  menu?.forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const anchorAttr = event.currentTarget?.dataset?.anchor
      let yPos = null
      
      if(redtagFooter?.id === anchorAttr) {
        yPos = redtagFooter?.getBoundingClientRect().top + window.scrollY + yOffsetHeader;
        slide(anchor, yPos)
      }
      
      sections?.forEach((section) => {
        const ID = section?.id
        yPos = section.getBoundingClientRect().top + window.scrollY + yOffsetHeader;
        
        if(ID === anchorAttr) {
          slide(anchor, yPos)
        }
      })
    })
  })
}