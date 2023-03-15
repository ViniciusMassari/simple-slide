const slideItem = document.querySelectorAll('.slide li')
const controls = document.querySelector('.controls')
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

let activeSlide = 0




leftArrow.addEventListener('click',() =>{
if (activeSlide > 0) {
    activeSlide -= 1
    handleChangeSlide(activeSlide)
}else{
    activeSlide = slideItem.length - 1
    handleChangeSlide(activeSlide)
}
})
rightArrow.addEventListener('click',() =>{
if (activeSlide < slideItem.length - 1) {
    activeSlide += 1
    handleChangeSlide(activeSlide)
} else{
  activeSlide = 0
  handleChangeSlide(activeSlide)
}
})

slideItem.forEach((slideImage, index) =>{
    const control = document.createElement('li')
    control.classList.add('control')
    controls.appendChild(control)
    control.addEventListener("click", () =>{
     handleChangeSlide(index)
    })
})

function handleChangeSlide(index) {
 
    const control = document.querySelectorAll('.controls li')
    slideItem.forEach(slide => slide.classList.remove('active'))
slideItem[index].classList.add("active")
control.forEach(item => item.classList.remove('active'))
control[index].classList.add('active')
activeSlide = index
}

