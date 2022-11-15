const burgerIcon = document.querySelector(".fa-bars")
const xmarkIcon =  document.querySelector(".fa-xmark")
const menu = document.querySelector(".menu")
const h1Title = document.querySelector(".header h1")
const h1Txt = "Hey! I'm Piotr"
const h2Title = document.querySelector(".header h2")
const h2Txt = "Front End Developer"
const start = document.querySelector(".start")
const imageMe = document.querySelector(".header img")

burgerIcon.addEventListener("click", () => {
    burgerIcon.classList.remove("active")
    xmarkIcon.classList.add("active")
    menu.classList.add("active")
    h1Title.style.filter = "blur(2px)"
    h2Title.style.filter = "blur(2px)"
})

xmarkIcon.addEventListener("click", () => {
    burgerIcon.classList.add("active")
    xmarkIcon.classList.remove("active")
    menu.classList.remove("active")
    h1Title.style.filter = ""
    h2Title.style.filter = ""
})

let indexTextH1 = 0
const addLetterH1 = ()=>{
    const interv = setInterval(() => {
        h1Title.textContent += h1Txt[indexTextH1]
        indexTextH1++
        if (indexTextH1 === h1Txt.length){
            clearInterval(interv)
        }
    },100)
}
const timeout1 = setTimeout(addLetterH1, 3000)

let indexTextH2 = 0
const addLetterH2 = () => {
    const interv = setInterval(()=>{ h2Title.textContent += h2Txt[indexTextH2]
        indexTextH2++
        if (indexTextH2 === h2Txt.length){
            clearInterval(interv)
        }},100)
}
const timeout2 = setTimeout(addLetterH2, 4500)
// const indexTypingH2 = setInterval(addLetterH2, 150)

setTimeout(()=> {
    start.remove()
},3000)


setTimeout(() => {
    imageMe.style.opacity = "1"
}, 4000)

const slideList = [{
    img: "images/example.jpg"
},
{
    img: "images/example2.jpg"
},
{
    img: "images/example3.jpg"
}]

const imageAboutMe = document.querySelector(".about-me img")
const timeImg = 5000
let active = 0


const changeSlide = () => {
    active++
    if (active === slideList.length){
        active = 0
    }
    imageAboutMe.src = slideList[active].img
}

setInterval(changeSlide, timeImg)




// scroll-effects (JQuery)

const btnExplore = document.querySelector(".explore")

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 200){
        btnExplore.classList.add("remove")
    } else {
        btnExplore.classList.remove("remove")
    }
})

btnExplore.addEventListener("click", ()=>{
    btnExplore.classList.remove("remove")
})

AOS.init()




