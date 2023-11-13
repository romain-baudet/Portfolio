var icon = document.getElementById('icon')
var tete = document.getElementById('tete')
var footerLogo = document.getElementsByClassName('footer-logo')
var getMore = document.getElementsByClassName('get-more')
var closeModal = document.getElementById('close-modal')



icon.onclick = function () {
    document.body.classList.toggle('light-theme');
    if (document.body.classList.contains('light-theme')) {
        icon.src = './images/moon.png'
        tete.src = './images/profile-pic.png'
        footerLogo.style.color = rgb(255, 123, 0)
        getMore.style.backgroundColor = "yellow"
        closeModal.style.color = "white"

    } else {
        icon.src = './images/sun.png'
        tete.src = 'images/profile-pic (5).png'
    }
}