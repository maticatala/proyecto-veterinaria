const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
    sideMenu.style.animation = 'showMenu 400ms ease forwards';
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.animation = 'hideMenu 400ms ease-out forwards';
})

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})
