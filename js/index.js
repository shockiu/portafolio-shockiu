'use strict';
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

/*
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
});
*/
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
const elementTop = el.getBoundingClientRect().top;

return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
);
};

const elementOutofView = (el) => {
const elementTop = el.getBoundingClientRect().top;

return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
);
};

const displayScrollElement = (element) => {
element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
scrollElements.forEach((el) => {
    if (elementInView(el, 1.5)) {
    displayScrollElement(el);
    } else if (elementOutofView(el)) {
    hideScrollElement(el)
    }
})
}

window.addEventListener("scroll", () => { 
handleScrollAnimation();
});
