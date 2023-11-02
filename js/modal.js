
function toggleModal(project, modal, closeBtn) {
    project.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Récupérez les références
const project1 = document.getElementById('project-1');
const project2 = document.getElementById('project-2');
const project3 = document.getElementById('project-3');
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const closeBtn = document.getElementById('close-modal');
const closeBtn2 = document.getElementById('close-modal2');
const closeBtn3 = document.getElementById('close-modal3');

// Utilisez la fonction pour gérer les modales
toggleModal(project1, modal1, closeBtn);
toggleModal(project2, modal2, closeBtn2);
toggleModal(project3, modal3, closeBtn3);



// // Sélectionnez l'élément du menu burger et nav-right
// const menuButton = document.getElementById("menu-button");
// const navRight = document.getElementById("nav-right");

// // Écoutez les clics sur le menu burger
// menuButton.addEventListener("click", function() {
//     // Si nav-right est caché, affichez-le ; sinon, masquez-le
//     if (navRight.style.display === "none" || navRight.style.display === "") {
//         navRight.style.display = "block";
//     } else {
//         navRight.style.display = "none";
//     }
// });

const menuBurger = document.querySelector('.menu-burger');
const rightNav = document.querySelector('#nav-right');
const links = document.querySelectorAll('li');

menuBurger.addEventListener('click', () => {
    rightNav.classList.toggle('mobile-menu');
});

// Ajoute un gestionnaire d'événements pour chaque lien
links.forEach(link => {
    link.addEventListener('click', () => {
        rightNav.classList.remove('mobile-menu');
    });
});

