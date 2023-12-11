import gsap from "gsap";

export default function initBrandingTabs() {
  const buttonsTab = document.querySelector(".js-branding-tabs")?.children;
  const contentTab = document.querySelectorAll(".js-branding-tabs-content");
  
  function initButtonActiveClass(button) {
    button?.classList.add("branding__tab-button--active")
  }
  
  function removeButtonActiveClass(buttonsTab) {
    buttonsTab?.forEach((button) => {
      button?.classList.remove("branding__tab-button--active")
    })
  }
  
  function initActiveTabState(tab) {
    gsap.to(tab, {
      autoAlpha: 1,
      y: 0,
      delay: .45
    })
  }
  
  function initDisableTabState(tab) {
    gsap.to(tab, {
      autoAlpha: 0,
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
}