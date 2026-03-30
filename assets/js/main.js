// Burger menu
const burgerBtn = document.querySelector('.burger-btn');
const navMobile = document.querySelector('.nav-mobile');
const navLinks = document.querySelectorAll('.nav-mobile .nav-link');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    navMobile.classList.toggle('active');
});

// Закрыть меню при клике на ссылку
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        navMobile.classList.remove('active');
    });
});

// Закрыть меню при клике вне его
document.addEventListener('click', (e) => {
    if (!e.target.closest('.header')) {
        burgerBtn.classList.remove('active');
        navMobile.classList.remove('active');
    }
});

// Header fixed/absolute toggle на основе скролла
const header = document.querySelector('.header');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > heroBottom) {
        header.classList.remove('absolute');
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
        header.classList.add('absolute');
    }
});

// Карусель отзывов
const cards = document.querySelector('.reviews-cards');
const prevBtn = document.querySelector('.reviews-btn--prev');
const nextBtn = document.querySelector('.reviews-btn--next');

nextBtn.addEventListener('click', () => {
    const firstWrapper = cards.firstElementChild;
    cards.appendChild(firstWrapper);
});

prevBtn.addEventListener('click', () => {
    const lastWrapper = cards.lastElementChild;
    cards.prepend(lastWrapper);
});