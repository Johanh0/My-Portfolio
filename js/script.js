// Global Const
const htmlEl = document.querySelector(`html`);
let darkModeStatus = false

// Nav Const
const btnDarkMode = document.querySelector(`#btn-dark-mode`);
const line1 = document.querySelector(`.line1`);
const line2 = document.querySelector(`.line2`);

// Hero greeting Const
const heroGreeting = document.querySelector(`.hero-greeting`);

// Cursor Const 
const mouse = document.querySelector(`.cursor`);
const mouseTxt = document.querySelector(`.cursro-txt`);


// Functions for cursor
function cursor (e) {
    mouse.style.top = e.pageY + `px`;
    mouse.style.left = e.pageX + `px`;
}

function activeCursor (e) {
    const item = e.target;

    // If for the burger on the header - nav
    if (item.id === `burger` || item.classList.contains(`line1`) || item.classList.contains(`line2`)) {
        mouse.classList.add(`purple-cursor`);
        mouseTxt.innerText = `Menu`;
    } else if (item.id === `btn-dark-mode`) {
        mouse.classList.add(`orange-cursor`);
        mouseTxt.innerText = `Switch`;
    }else if (item.classList.contains(`tap`)) {
        mouse.classList.add(`blue-cursor`);
        mouseTxt.innerText = `Tap`;
    }else if (item.classList.contains(`card`) || item.classList.contains(`logo`)) {
        mouse.classList.add(`white-cursor`);
        mouseTxt.innerText = `About`;
    }else if (item.classList.contains(`view`) || item.classList.contains(`logo`)) {
        mouse.classList.add(`glass-cursor`);
        mouseTxt.innerText = `View`;
    }else if (item.classList.contains(`go`) || item.classList.contains(`logo`)) {
        mouse.classList.add(`purple-cursor`);
        mouseTxt.innerText = `Go`;
    }else {
        mouse.classList.remove(`purple-cursor`);
        mouse.classList.remove(`orange-cursor`);
        mouse.classList.remove(`blue-cursor`);
        mouse.classList.remove(`white-cursor`);
        mouse.classList.remove(`glass-cursor`);
        mouseTxt.innerText = ``;
    }
}

window.addEventListener(`mousemove`, cursor);
window.addEventListener(`mouseover`, activeCursor);

// Functions for dark mode

function darkMode () {

    if (darkModeStatus === false) {
        htmlEl.style.color = `white`;
        htmlEl.style.backgroundColor = `#252525`;
        line1.style.backgroundColor = `white`;
        line2.style.backgroundColor = `white`;
        mouse.style.border = `2px solid white`;
        heroGreeting.style.backgroundColor = `white`;
        heroGreeting.style.color = `#252525`;

        darkModeStatus = true
    } else{
        htmlEl.style.color = `#252525`;
        htmlEl.style.backgroundColor = `white`;
        line1.style.backgroundColor = `#252525`;
        line2.style.backgroundColor = `#252525`;
        mouse.style.border = `2px solid #252525`;
        heroGreeting.style.backgroundColor = `#252525`;
        heroGreeting.style.color = `white`;

        darkModeStatus = false;
    }
}

btnDarkMode.addEventListener(`click`, darkMode);
