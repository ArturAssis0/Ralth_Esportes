document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const opcoes = document.getElementById("menu_opcoes");
    const containerEscolas = document.getElementById("escolas");

    if (!menu || !opcoes || !containerEscolas) {
        console.warn("Elemento(s) faltando: verifique ids 'menu', 'menu_opcoes' e 'escolas'");
        return;
    }

    // ======== MENU RESPONSIVO ========
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

    // ============================================================
    // ==========   BASE DE DADOS COMPLETA DAS ESCOLAS   ==========
    // ============================================================
    const escolas = {
        // =======================================================
        // 1 — SUPREMO
        // =======================================================
        item_1: {
            nome: "ESCOLA DE VÔLEI SUPREMO",
            descricao: `A Escola de Vôlei Supremo está inserida em um dos Colégios da rede particular mais tradicionais de Contagem; 
O COLÉGIO SUPREMO possui uma estrutura fantástica, além de ter uma linda história de mais de 29 anos de Excelência de Ensino.

Iniciamos nossa parceria em 2019, com a proposta de ensinar o VÔLEI de forma dinâmica e lúdica no âmbito escolar. 
Utilizamos as dependências do Colégio proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado e para fazer muitas amizades.
            `,
            nome2: "DIAS E HORÁRIOS",
            horarios1: `
TURNO MANHÃ  
DIA DA SEMANA: 5ª FEIRA  
HORÁRIO: 11H30 ÀS 12H20 - SUB 11 E 13
            `,
            horarios2: `
TURNO TARDE  
DIAS DA SEMANA: 4ª E 6ª FEIRA  
HORÁRIO: 17H30 ÀS 18H20 - SUB 08 | 10 | 12
            `,
            imagem: "img/SUPREMO VÔLEI.png",
        },

        // =======================================================
        // 2 — KALIL
        // =======================================================
        item_2: {
            nome: "ESCOLA DE VÔLEI KALIL",
            descricao: `
A Escola de Vôlei Elizabeth Kalil está inserida em um dos Colégios da rede particular mais tradicionais de Contagem; 
O INSTITUTO ELIZABETH KALIL possui uma estrutura fantástica, além de ter uma linda história de mais de 50 anos de Excelência de Ensino.

Iniciamos nossa parceria em 2023, com a proposta de ensinar o VÔLEI de forma dinâmica e lúdica no âmbito escolar. 
Utilizamos as dependências do Colégio proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado e para fazer muitas amizades.
            `,
            nome2: "DIAS E HORÁRIOS",
            horarios1: `
TURNO MANHÃ  
DIAS DA SEMANA: 5ª FEIRA  
HORÁRIO: 11H40 ÀS 12H30 - SUB 11 E 13
            `,
            horarios2: `
TURNO TARDE  
DIAS DA SEMANA: 2ª E 4ª FEIRA  
HORÁRIO: 17H30 ÀS 18H20 - SUB 08 | 10 | 12
            `,
            imagem: "img/KALIL VOLEI.png",
        },

        // =======================================================
        // 3 — CONSTRUIR +
        // =======================================================
        item_3: {
            nome: "ESCOLA DE VÔLEI CONSTRUIR +",
            descricao: `
A Escola de Vôlei CONSTRUIR + está inserida em um dos Colégios da rede particular mais tradicionais de Contagem; 
O COLÉGIO CONSTRUIR MAIS possui uma estrutura fantástica, além de ter uma linda história de Excelência de Ensino.

Iniciamos nossa parceria em 2024, com a proposta de ensinar o VÔLEI de forma dinâmica e lúdica no âmbito escolar. 
Utilizamos as dependências do Colégio proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado e para fazer muitas amizades.
            `,
            nome2: "DIAS E HORÁRIOS",
            horarios1: `TURNO MANHÃ — (não informado)`,
            horarios2: `
TURNO TARDE  
DIAS DA SEMANA: 3ª E 5ª FEIRA  
HORÁRIO: 17H40 ÀS 18H30 - SUB 11 E 13
            `,
            imagem: "img/CRESCER ESPORTES.png",
        },

        // =======================================================
        // 4 — CRESCER
        // =======================================================
        item_4: {
            nome: "ESCOLA DE ESPORTES CRESCER",
            descricao: `
A Escola de Esportes CRESCER está inserida em um dos Colégios da rede particular mais tradicionais de Contagem; 
O COLÉGIO CRESCER CONTAGEM possui uma estrutura fantástica, além de ter uma linda história de Excelência de Ensino.

Iniciamos nossa parceria em 2025, com a proposta de ensinar o VÔLEI de forma dinâmica e lúdica no âmbito escolar. 
Utilizamos as dependências do Colégio proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado e para fazer muitas amizades.
            `,
            nome2: "DIAS E HORÁRIOS",
            horarios1: `
TURNO MANHÃ  
DIAS DA SEMANA: 2ª E 4ª FEIRA  
HORÁRIO: 11H40 ÀS 12H30 - SUB 11 E 13
            `,
            horarios2: `
TURNO TARDE  
DIAS DA SEMANA: 3ª E 5ª FEIRA  
HORÁRIO: 17H40 ÀS 18H30 - SUB 08 | 10 | 12
            `,
            imagem: "img/CRESCER ESPORTES.png",
        },
    };

    // ============================================================
    // ========== FUNÇÃO DE EXIBIR INFORMAÇÕES ====================
    // ============================================================

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
                        <p>${dados.descricao}</p>

                        <h2>${dados.nome2}</h2>
                        <p>${dados.horarios1}</p>
                        <p>${dados.horarios2}</p>
                    </div>

                    <div class="info-imagem">
                        <img src="${dados.imagem}" alt="${dados.nome}" class="imagem-escola">
                    </div>
                </div>
            `;

            infoSection.style.display = "block";

            const bloco = infoSection.querySelector(".info-conteudo");
            setTimeout(() => bloco.classList.add("ativo"), 20);

            if (window.innerWidth <= 1068) {
                infoSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});
