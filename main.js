import { gsap } from "gsap"
import imagesLoaded from "imagesLoaded"

const content = document.querySelector('section')

// get all images
const imgLoad = imagesLoaded(content)

//once images are loaded, grow svg
imgLoad.on('done', instance => {

  gsap.to('svg',  {
      scale: 200,
      duration: 2,
      onComplete: hideloader
      })

})

//once svg is grown, hide loader div
function hideloader () {
  gsap.to('.loader', {
    opacity:0,
    display:"none"
  })
}



  