const menu = document.querySelector('#menu-icon') //evento click no icone de menu
const navBar = document.querySelector('.navbar')


menu.addEventListener('click', () =>{
    menu.classList.toggle('bx-x');
    navBar.classList.toggle('active');
})


//produtos
const botoesFiltro = document.querySelectorAll(".filtro");
const cards = document.querySelectorAll(".produto-card");

botoesFiltro.forEach(btn => {
    btn.addEventListener("click", () => {

        document.querySelector(".filtro.active").classList.remove("active");
        btn.classList.add("active");

        const categoria = btn.getAttribute("data-cat");

        cards.forEach(card => {
            if (categoria === "todos") {
                card.style.display = "block";
            } else {
                card.style.display =
                    card.getAttribute("data-cat") === categoria
                        ? "block"
                        : "none";
            }
        });
    });
});
