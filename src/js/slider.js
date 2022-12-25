let offset = 0
const sliderLine = document.querySelector('.slider-line')

document.querySelector('.slider-next').addEventListener('click',()=> {
  offset += 360
  if(offset > 720) {
    offset = 0
  }
  sliderLine.style.left = -offset + 'px'
})

document.querySelector('.slider-prev').addEventListener('click',()=> {
  offset -= 360
  if(offset < 0) {
    offset = 720
  }
  sliderLine.style.left = -offset + 'px'
})