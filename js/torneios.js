const menu = document.getElementById("menu");
const opcoes = document.getElementById("menu_opcoes");
const cont_1 = document.getElementById("cont_1")


menu.addEventListener("click", (e) => {
    e.stopPropagation(); 
    opcoes.classList.toggle("mostrar");
});


document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !opcoes.contains(e.target)) {
        opcoes.classList.remove("mostrar"); 
    }
});


opcoes.addEventListener("click", (e) => {
    e.stopPropagation(); 
});

