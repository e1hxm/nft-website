/*=============== SHOW MENU ===============*/
let navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
let navLink = document.querySelectorAll('.nav__link')

let linkAction = () =>{
    let navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
let scrollHeader = () =>{
    let header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('header-bg')
                      : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
let sr = ScrollReveal({
    origin: 'botton',
    distanse: '60px',
    duration: 2500,
})

sr.reveal(`.home__images`, {distanse: '120px', delay: 400})
sr.reveal(`.home__title`, {delay: 1000})
sr.reveal(`.home__description`, {delay: 1200})
sr.reveal(`.home__button`, {delay: 1400})
sr.reveal(`.home__footer`, {delay: 1600})
sr.reveal(`.home__data div`, {origin: 'right', interval: 100, delay: 1800})


