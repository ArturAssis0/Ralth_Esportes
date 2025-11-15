document.addEventListener("DOMContentLoaded", () => {

    /* ========= MENU MOBILE ========= */
    const menu = document.getElementById("menu");
    const opcoes = document.getElementById("menu_opcoes");
    const containerEscolas = document.getElementById("escolas");

    if (!menu || !opcoes || !containerEscolas) {
        console.warn("Elemento(s) faltando: menu, menu_opcoes ou escolas.");
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


    /* ========= BANCO DE DADOS DAS ESCOLAS (VÔLEI + FUTSAL) ========= */
    const escolas = {

        /* ======== SUAS ESCOLAS DE VÔLEI ========= */
        item_1: {
            nome: "ESCOLA DE VÔLEI SUPREMO",
            horarios1: `TURNO MANHÃ DIA DA SEMANA: 5ª FEIRA HORÁRIO: 11H30 ÀS 12H20 - SUB 11 E 13`,
            horarios2: `TURNO TARDE DIAS DA SEMANA: 4ª E 6ª FEIRA HORÁRIO: 17H30 ÀS 18H20 - SUB 08|10|12`,
            descricao: `A Escola de Vôlei Supremo está inserida em um dos Colégios mais tradicionais de Contagem...`,
            nome2: "DIAS E HORARIOS",
            imagem: "img/SUPREMO VÔLEI.png",
        },

        item_2: {
            nome: "ESCOLA DE VÔLEI KALIL",
            horarios1: `TURNO MANHÃ 5ª FEIRA 11H40 ÀS 12H30 - SUB 11 E 13`,
            horarios2: `TURNO TARDE 2ª E 4ª FEIRA 17H30 ÀS 18H20 - SUB 08|10|12`,
            descricao: `A Escola de Vôlei Elizabeth Kalil está inserida em um dos Colégios mais tradicionais...`,
            nome2: "DIAS E HORARIOS",
            imagem: "img/KALIL VOLEI.png",
        },

        /* ======== FUTSAL ========= */
        item_f1: {
            nome: "ESCOLA FUTSAL DE CCV",
            horarios1: `MANHÃ: 2ª e 4ª / 11H30–12H20 / SUB 08|10|12`,
            horarios2: `TARDE: 2ª e 4ª / 17H40–18H30 / SUB 08|10|12`,
            horarios3: `INFANTIL: 2ª e 4ª / 16H50–17H35 / SUB 06`,
            descricao: `A Escola de Futsal CCV está inserida em um dos Colégios mais tradicionais...`,
            nome2: "DIAS E HORÁRIOS",
            imagem: "img/CCV FUTSAL.png",
        },

        item_f2: {
            nome: "ESCOLA DE FUTSAL SUPREMO",
            horarios1: `MANHÃ: 3ª e 5ª / 11H30–12H20 / SUB 08|10|12`,
            horarios2: `TARDE: 3ª e 5ª / 17H45–18H35 / SUB 08|10|12`,
            horarios3:`INFANTIL: 3ª e 5ª / 17H00–17H45 / SUB 06`,
            descricao: `A Escola de Futsal Supremo está inserida em um dos Colégios mais tradicionais...`,
            nome2: "DIAS E HORÁRIOS",
            imagem: "img/SUPREMO FUTSAL.png",
        },

        item_f3: {
            nome: "ESCOLA DE FUTSAL E. KALIL",
            horarios1: `MANHÃ: 4ª e 6ª / 11H40–12H30 / SUB 11 e 13`,
            horarios2: `TARDE: 3ª e 5ª / 18H05–18H55 / SUB 08|10|12`,
            horarios3: `INFANTIL: 3ª e 5ª / 17H20–18H05 / SUB 06`,
            descricao: `A Escola de Futsal E. Kalil está inserida em um dos Colégios mais tradicionais...`,
            nome2: "DIAS E HORÁRIOS",
            imagem: "img/CRESCER ESPORTES.png",
        },
    };


    /* ========= ÁREA DINÂMICA DE INFORMAÇÕES ========= */
    let infoSection = document.getElementById("info_escola");
    if (!infoSection) {
        infoSection = document.createElement("div");
        infoSection.id = "info_escola";
        infoSection.className = "info-escola";
        infoSection.style.display = "none";
        containerEscolas.parentNode.insertBefore(infoSection, containerEscolas.nextSibling);
    }


    /* ========= CLIQUE NOS ÍCONES ========= */
    const itens = document.querySelectorAll(".iten_escola");

    itens.forEach(item => {
        item.style.cursor = "pointer";

        item.addEventListener("click", () => {

            const dados = escolas[item.id];
            if (!dados) {
                infoSection.innerHTML = "<p>Informações não disponíveis.</p>";
            } else {
                infoSection.innerHTML = `
                <div class="info-conteudo animar">
                    <div class="info-texto">
                        <h2>${dados.nome}</h2>
                        <div>${dados.descricao}</div>
                        <h2>${dados.nome2}</h2>
                        <div>
                            ${dados.horarios2}<br><br>
                            ${dados.horarios3}<br><br>
                            ${dados.horarios1}
                        </div>
                    </div>

                    <div class="info-imagem">
                        <img src="${dados.imagem}" alt="${dados.nome}" class="imagem-escola">
                    </div>
                </div>
                `;
            }

            infoSection.style.display = "block";

            if (window.innerWidth <= 1068) {
                infoSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

});
