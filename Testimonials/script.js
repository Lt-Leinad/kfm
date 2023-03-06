const navbar = document.querySelector(".kfm-logo");
const menu = document.querySelector(".menu");
const xOut = document.querySelector(".x-out");
const hamburger = document.querySelector(".hamburger-icon");
const homeBtn = document.querySelector(".home-btn");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");
const topList = document.querySelector(".top-list");
const testimonial1 = document.querySelector(".testimonial1");
const testimonial2 = document.querySelector(".testimonial2");
const testimonial3 = document.querySelector(".testimonial3");
const testimonial4 = document.querySelector(".testimonial4");
const rightBtn = document.querySelector(".right-btn");
const leftBtn = document.querySelector(".left-btn");

// DISABLE SCROLLING 

function disableScrolling() {
    document.documentElement.style.overflowY = "hidden";
}

// ENABLE SCROLLING 

function enableScrolling() {
    document.documentElement.style.overflowY = "auto";
}

// MENU 

hamburger.addEventListener("click", hamburgerFunc);

function hamburgerFunc() {
    if (window.innerWidth < 900) {
        menu.classList.remove("display-none");
        disableScrolling();
    } else {
        menu.classList.remove("display-none");
    }
}

xOut.addEventListener("click", function() {
    if (window.innerWidth < 900) {
        menu.classList.add("display-none");
        enableScrolling();
    } else {
        menu.classList.add("display-none");
    }
});

// slider 

let slide = 1;

leftBtn.addEventListener("click", function() {
    slide++;
        })