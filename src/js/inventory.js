import gsap from "gsap";

export default function inventoryAnimation() {
  const cards = [...document.querySelectorAll(".redtag-inventory__card")];
  const dataImage = document.querySelector(".redtag-inventory__block-image");
  const dataCount = document.querySelector(".redtag-inventory__block-count");
  const dataName = document.querySelector(".redtag-inventory__block-name");
  
  if(!dataImage || !dataCount || !dataName) return
  
  function setData({buttonImage, count, name}) {
    dataImage.src = buttonImage
    dataImage.srcset = buttonImage
    dataCount.textContent = count
    dataName.textContent = name
    
    gsap.to(dataImage, {
      yPercent: 0,
      opacity: 1,
      rotate: 0,
      duration: 2.5,
      ease: "elastic.out",
    })
    
    gsap.to(dataCount, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
    })
    
    gsap.to(dataName, {
      yPercent: 0,
      opacity: 1,
      duration: 1.2,
    })
  }
  
  if(window.matchMedia("(min-width: 900px)").matches) {
    cards?.forEach((card) => {
      card.addEventListener("click", (event) => {
        let currentCard = event?.currentTarget
        
        gsap.set(dataImage, {
          opacity: 0,
          yPercent: 5,
          rotate: 4,
          duration: 0,
          overwrite: true
        })
        
        if(!currentCard) return
        
        const buttonImage = currentCard?.querySelector(".redtag-inventory__button")?.dataset?.image
        const count = currentCard?.querySelector(".redtag-inventory__count")?.textContent
        const name = currentCard?.querySelector(".redtag-inventory__name")?.textContent
        
        gsap.set(dataCount, {
          opacity: 0,
          yPercent: 10,
          duration: 0,
          overwrite: true
        })
        
        gsap.set(dataName, {
          opacity: 0,
          yPercent: 10,
          duration: 0,
          overwrite: true
        })
        
        setData({buttonImage, count, name})
      })
    })
  }
}