'use strict';
const hamburger = document.querySelector('.hamburger');
const menuList = document.querySelector('.menu__list');
const menuLinks = document.querySelectorAll('.menu__item'); 
const scrollElements = document.querySelectorAll('.js-scroll');

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
element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
element.classList.remove('scrolled');
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

window.addEventListener('scroll', () => { 
    handleScrollAnimation();
});

const hamburgerAction = () => {
    hamburger.addEventListener('click', () => {
        menuList.classList.toggle('open');
        menuLinks.forEach(link => {
          link.classList.toggle('fade');
        });
    });
}

const menuItemsActions = () => {
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuList.classList.remove('open');
            menuLinks.forEach(link => {
                link.classList.remove('fade');
            });
        });
    });
}

hamburgerAction();
menuItemsActions();

