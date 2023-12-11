import gsap from "gsap";

export default function initMediametryTabs() {
  const buttonsTab = document.querySelector(".js-mediametry-tabs")?.children;
  const contentTab = document.querySelectorAll(".js-mediametry-tabs-content");
  
  const mediametryBottomItem = document.querySelector(".js-mediametry-top");
  
  function initMarginToBottom(mediametryBottomItem) {
    if(!mediametryBottomItem) return
    mediametryBottomItem.style.marginTop = `${(contentTab[0]?.clientHeight / 10) * 2}rem`
    gsap.set([contentTab], {opacity: 0, y: 50})
  }
  
  function initButtonActiveClass(button) {
    button?.classList.add("mediametry__button--active")
  }
  
  function removeButtonActiveClass(buttonsTab) {
    buttonsTab?.forEach((button) => {
      button?.classList.remove("mediametry__button--active")
    })
  }
  
  function initActiveTabState(tab) {
    gsap.to(tab, {
      opacity: 1,
      y: 0,
      delay: .45
    })
  }
  
  function initDisableTabState(tab) {
    gsap.to(tab, {
      opacity: 0,
      y: 50
    })
  }
  
  buttonsTab?.forEach((button, buttonIndex) => {
    initButtonActiveClass(buttonsTab[0])
    initActiveTabState(contentTab[0])
    contentTab.forEach((tab, tabIndex) => {
      button?.addEventListener("click", (event) => {
        const currentButton = event.currentTarget
        initDisableTabState(tab)
        removeButtonActiveClass(buttonsTab)
        
        if(buttonIndex === tabIndex) {
          initActiveTabState(tab)
        }
        
        if(button === currentButton) {
          initButtonActiveClass(currentButton)
        }
      })
    })
  })
  
  initMarginToBottom(mediametryBottomItem)
}