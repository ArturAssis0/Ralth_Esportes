document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const opcoes = document.getElementById("menu_opcoes");
    const containerEscolas = document.getElementById("escolas");

    if (!menu || !opcoes || !containerEscolas) {
        console.warn("Elemento(s) faltando: verifique ids 'menu', 'menu_opcoes' e 'escolas'");
        return;
    }

    menu.addEventListener("click", (e) => {
        e.stopPropagation();
        opcoes.classList.toggle("mostrar");
    });

    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !opcoes.contains(e.target)) {
            opcoes.classList.remove("mostrar");
        }
    });

    opcoes.addEventListener("click", (e) => e.stopPropagation());

    const escolas = {
        item_1: {
            nome: "ESCOLA DE VÔLEI SUPREMO",
            horarios1: `TURNO MANHÃ  DIA DA SEMANA: 5ª FEIRA HORÁRIO: 11H30 ÀS 12H20 - SUB 11 E 13`,
            horarios2: `TURNO TARDE DIAS DA SEMANA: 4ª E 6ª FEIRA HORÁRIO: 17H30 ÀS 18H20 - SUB 08|10|12`,
            descricao: `A Escola de Vôlei Supremo está inserida...`,
            nome2: "DIAS E HORARIOS",
            imagem: "img/SUPREMO VÔLEI.png",
        },

        item_2: {
            nome: "ESCOLA DE VÔLEI KALIL",
            horarios1: `TURNO MANHÃ DIAS DA SEMANA...`,
            horarios2: `TURNO TARDE DIAS DA SEMANA...`,
            descricao: `A Escola de Vôlei Elizabeth Kalil está inserida...`,
            nome2: "DIAS E HORARIOS",
            imagem: "img/KALIL VOLEI.png",
        },

        item_3: {
            nome: "ESCOLA DE VÔLEI CONSTRUIR +",
            horarios1: ``,
            horarios2: `TURNO TARDE DIAS DA SEMANA...`,
            descricao: `A Escola de Vôlei CONSTRUIR + está inserida...`,
            nome2: "DIAS E HORARIOS",
            imagem: "img/CRESCER ESPORTES.png",
        },

        item_4: {
            nome: "ESCOLA DE ESPORTES CRESCER",
            horarios1: `TURNO MANHÃ...`,
            horarios2: `TURNO TARDE...`,
            descricao: `A Escola de Esportes CRESCER está inserida...`,
            nome2: "DIAS E HORARIOS",
            imagem: "img/CRESCER ESPORTES.png",
        },
    };

    let infoSection = document.getElementById("info_escola");
    if (!infoSection) {
        infoSection = document.createElement("div");
        infoSection.id = "info_escola";
        infoSection.className = "info-escola";
        infoSection.style.display = "none";
        containerEscolas.parentNode.insertBefore(infoSection, containerEscolas.nextSibling);
    }

    const itens = document.querySelectorAll(".iten_escola");

    itens.forEach(item => {
        item.addEventListener("click", () => {
            const dados = escolas[item.id];

            infoSection.innerHTML = `
                <div class="info-conteudo">
                    <div class="info-texto">
                        <h2>${dados.nome}</h2>
                        <div>${dados.descricao}</div>
                        <h2>${dados.nome2}</h2>
                        <div>${dados.horarios2}<br><br>${dados.horarios1}</div>
                    </div>
                    <div class="info-imagem">
                        <img src="${dados.imagem}" alt="${dados.nome}" class="imagem-escola">
                    </div>
                </div>
            `;

            infoSection.style.display = "block";

            // 🔥 Ativa animação suavemente
            const bloco = infoSection.querySelector(".info-conteudo");
            setTimeout(() => bloco.classList.add("ativo"), 20);

            if (window.innerWidth <= 1068) {
                infoSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
