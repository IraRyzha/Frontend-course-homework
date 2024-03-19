const showMenuBtn = document.querySelector('.show-menu-btn');
const closeMenuBtn = document.querySelector('.close-menu-btn');
const menuList = document.querySelector('.nav-list');
const darkBackground = document.querySelector('.dark-background');

showMenuBtn.addEventListener('click', () => {
    darkBackground.classList.add('show');
    menuList.classList.add('show-for-mobile');
})

closeMenuBtn.addEventListener('click', () => {
    darkBackground.classList.remove('show');
    menuList.classList.remove('show-for-mobile');
})