const menu = document.querySelector('#menu-icon') //evento click no icone de menu
const navBar = document.querySelector('.navbar')


menu.addEventListener('click', () =>{
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('active');
})

