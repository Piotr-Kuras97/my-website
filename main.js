const burgerIcon = document.querySelector(".fa-bars")
const xmarkIcon =  document.querySelector(".fa-xmark")
const menu = document.querySelector(".menu")
const h1Title = document.querySelector(".header h1")
const h1Txt = "Hey! I'm Piotr Kuraś"
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
const timeout1 = setTimeout(addLetterH1, 5000)

let indexTextH2 = 0
const addLetterH2 = () => {
    const interv = setInterval(()=>{ h2Title.textContent += h2Txt[indexTextH2]
        indexTextH2++
        if (indexTextH2 === h2Txt.length){
            clearInterval(interv)
        }},100)
}
const timeout2 = setTimeout(addLetterH2, 7000)
// const indexTypingH2 = setInterval(addLetterH2, 150)

setTimeout(()=> {
    start.remove()
},5500)


setTimeout(() => {
    imageMe.style.opacity = "1"
}, 6000)

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


const arrows = [...document.querySelectorAll(".skill .fa-arrow-right")]
const skillText = [...document.querySelectorAll(".skills .all-skills .skill p:nth-of-type(2)")]
const progressBars = [...document.querySelectorAll(".progress")]
const skillTitle = [...document.querySelectorAll(".skill p:nth-of-type(1)")]

arrows.forEach((arrow) => {
    arrow.addEventListener("click", ()=>{
        arrow.classList.toggle("active")
        skillText[arrows.indexOf(arrow)].classList.toggle("active")
        progressBars[arrows.indexOf(arrow)].classList.toggle("active")
        skillTitle[arrows.indexOf(arrow)].classList.toggle("active")
    })
})

// scroll-effects (JQuery)

$(window).on("scroll", function(){
    const scrollValue = $(this).scrollTop()
    const $aboutMe = $(".item-container")
    const aboutMeFromTop = $aboutMe.offset().top
    const aboutMeHeight = $aboutMe.outerHeight()
    const windowHeight = $(window).height()

    const $allSkills = $(".all-skills")
    const allSkillsFromTop = $allSkills.offset().top
    const allSkillsHeight = $allSkills.outerHeight()

    const $projects = $(".all-projects")
    const projectsFromTop = $projects.offset().top
    const projectsHeight = $projects.outerHeight()

    if (scrollValue > aboutMeFromTop + aboutMeHeight/2 - windowHeight){
        $aboutMe.addClass("active")
    } else if (scrollValue < 100){
        $aboutMe.removeClass("active")
    }

    if (scrollValue > allSkillsFromTop + allSkillsHeight/8 - windowHeight){
        $allSkills.addClass("active")
    } else if (scrollValue < 100){
        $allSkills.removeClass("active")
    }

    if (scrollValue > projectsFromTop + projectsHeight/3 - windowHeight){
        $projects.addClass("active")
    } else if (scrollValue < 100){
        $projects.removeClass("active")
    }
})

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





