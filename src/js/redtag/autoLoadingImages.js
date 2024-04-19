export default async function autoLoadingImages() {
  const autoLoadBlock = document.querySelector(".js-autoload-img")
  
  if(!autoLoadBlock) return
  
  const images = autoLoadBlock.querySelectorAll("[data-image]")
  
  images?.forEach((item) => {
    const imageSrc = item?.dataset?.image
    new Image().src = imageSrc.toString()
  })
}