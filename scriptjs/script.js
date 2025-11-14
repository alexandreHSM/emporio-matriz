const menu = document.querySelector('#menu-icon') //evento click no icone de menu
const navBar = document.querySelector('.navbar')


menu.addEventListener('click', () =>{
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('active');
})


//animação de scroll
ScrollReveal().reveal('.hero', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%',
});
ScrollReveal().reveal('.categorias', {
    origin: 'bottom',
    duration: 3000,
    distance: '20%',
});
ScrollReveal().reveal('.produtos', {
    origin: 'bottom',
    duration: 3000,
    distance: '20%',
});