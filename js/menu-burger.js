const menuBurger = document.querySelector('.menu-burger');
const rightNav = document.querySelector('#nav-right');
const links = document.querySelectorAll('li');
const menuBurgerClosed = document.querySelector('.menu-burger-closed')
const mobileMenuOpen = document.querySelector('.mobile-menu')


menuBurger.addEventListener('click', () => {
    if (rightNav.classList.contains('mobile-menu')) {
        rightNav.classList.remove('mobile-menu');
        rightNav.classList.add('mobile-menu-closed');
        document.body.classList.remove('body-scroll-lock'); // Déverrouillez le défilement
    } else {
        rightNav.classList.add('mobile-menu');
        rightNav.classList.remove('mobile-menu-closed');
        document.body.classList.add('body-scroll-lock'); // Verrouillez le défilement
    }
});

rightNav.addEventListener('animationend', () => {
    if (rightNav.classList.contains('mobile-menu-closed')) {
        rightNav.classList.remove('mobile-menu-closed');
        document.body.classList.remove('body-scroll-lock'); // Déverrouillez le défilement lorsque l'animation est terminée
    }
});

links.forEach(link => {
    link.addEventListener('click', () => {
        rightNav.classList.remove('mobile-menu');
        rightNav.classList.add('mobile-menu-closed');
        document.body.classList.remove('body-scroll-lock');
    });
});


// menuBurger.addEventListener('click', () => {
//     if (rightNav.classList.contains('mobile-menu')) {
//         rightNav.classList.remove('mobile-menu');
//         rightNav.classList.add('mobile-menu-closed');
//     } else {
//         rightNav.classList.add('mobile-menu');
//         rightNav.classList.remove('mobile-menu-closed');
//     }
// });

// rightNav.addEventListener('animationend', () => {
//     if (rightNav.classList.contains('mobile-menu-closed')) {
//         rightNav.classList.remove('mobile-menu-closed');
//     }
// });