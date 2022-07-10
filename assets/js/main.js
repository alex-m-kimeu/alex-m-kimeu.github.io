/*====== LOADER ====== */
/*
if(document.readyState === "complete") {
    // Fully loaded!
    document.getElementById('Content').style.display = 'block'
}
else if(document.readyState === "interactive") {
    // DOM ready! Images, frames, and other subresources are still downloading.
    document.getElementById('Content').style.display = 'none'
}
else {
    // Loading still in progress.
    // To wait for it to complete, add "DOMContentLoaded" or "load" listeners.
    document.getElementById('loader').style.display = 'block'
    window.addEventListener("DOMContentLoaded", () => {
        // DOM ready! Images, frames, and other subresources are still downloading.
        document.getElementById('loader').style.display = 'none'
    });

    window.addEventListener("load", () => {
        // Fully loaded!
        document.getElementById('Content').style.display = 'block'
    });
}

setTimeout(() => {
    document.getElementById('Content').style.display = 'block'
    document.getElementById('loader').style.display = 'none'
    console.log('Loader')
}, 5000);
window.addEventListener("DOMContentLoaded", () => {
    // DOM ready! Images, frames, and other subresources are still downloading.
    document.getElementById('loader').style.display = 'block'
    document.getElementById('Content').style.display = 'none'
});
*/

/*====== MENU SHOW Y HIDDEN ======*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*====== MENU SHOW ======*/
/*====== VALIDATE if CONSTANT EXITS ======*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*====== MENU HIDDEN ======*/
/*====== VALIDATE if CONSTANT EXITS ======*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*====== REMOVE MENU MOBILE ======*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*====== SKILLS SELECTION ======*/
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')
function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close'
    }
    if(itemClass === 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open'
    }
}
skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})

/*====== RESUME ======*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('resume_active')
        })
        target.classList.add('resume_active')

        tabs.forEach(tab =>{
            tab.classList.remove('resume_active')
        })
        tab.classList.add('resume_active')
    })
})


/*====== SERVICES MODAL ======*/
const modalViews = document.querySelectorAll('.services_modal'),
      modalBtns = document.querySelectorAll('.services_button'),
      modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtns, i) => {
    modalBtns.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalCloses) => {
    modalCloses.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*====== MIXITUP FILTER PORTFOLIO  ====== */
let mixerPortfolio = mixitup('.portfolio_container', {
    selectors: {
        target: '.portfolio_card'
    },
    animation: {
        duration: 300
    }
});

/* Link active portfolio */
const linkPortfolio = document.querySelectorAll('.portfolio_item')

function activeWork(){
     linkPortfolio.forEach(l=> l.classList.remove('active_portfolio'))
     this.classList.add('active_portfolio')
}
linkPortfolio.forEach(l=> l.addEventListener('click', activeWork))

/*====== SCROLL SECTIONS ACTIVE LINK ======*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*====== CHANGE BACKGROUND HEADER ======*/
function scrollHeader(){
    const nav = document.getElementById('header')
    //When the scroll is higher the 80 viewpiont height
    if(this.scrollY >= 80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*====== SHOW SCROLL UP ======*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //When the scroll is higher the 560 viewpiont height
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*====== DARK LIGHT THEME ======*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//Previously selected topic
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//We obtain the current theme that the interface has by validating th dark theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//We validate if user previously chose a topic
if (selectedTheme) {
    //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manuall with the button
 themeButton.addEventListener('click', () =>{
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //Save the theme and current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
 })
