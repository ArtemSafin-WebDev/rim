export default function initNavigation() {
  const driveNavigation = document.querySelector(".js-drive-nav-links")?.children
  const sections = document.getElementsByTagName("section")
  
  driveNavigation?.forEach((link) => {
    const linkAttr = link?.dataset?.anchor
    sections?.forEach((section) => {
      const ID = section?.id
      link?.addEventListener("click", () => {
        if(linkAttr === ID) {
          section?.scrollIntoView({behavior: "smooth", block: "start"})
        }
      })
    })
  })
}