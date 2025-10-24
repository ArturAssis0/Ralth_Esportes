// futsal.js (versão corrigida)
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    const opcoes = document.getElementById("menu_opcoes");
    const containerEscolas = document.getElementById("escolas");

    if (!menu || !opcoes || !containerEscolas) {
        console.warn("Elemento(s) faltando: verifique ids 'menu', 'menu_opcoes' e 'escolas'");
        return;
    }

    // abrir/fechar menu
    menu.addEventListener("click", (e) => {
        e.stopPropagation();
        opcoes.classList.toggle("mostrar");
    });

    // fecha menu ao clicar fora
    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !opcoes.contains(e.target)) {
            opcoes.classList.remove("mostrar");
        }
    });

    // evita o fechamento quando clicar dentro das opções
    opcoes.addEventListener("click", (e) => e.stopPropagation());

    // dados das escolas
    const escolas = {
        item_1: {
            nome: "ESCOLA FUTSAL DE CCV",

            horarios1: `TURNO MANHÃ  DIAS DA SEMANA: 2ª E 4ª FEIRA HORÁRIO: 11H30 ÀS 12H20 - SUB 08|10|12`,

            horarios2: `TURNO TARDE DIAS DA SEMANA: 2ª E 4ª FEIRA HORÁRIO: 17H40 ÀS 18H30 - SUB 08|10|12`,

            horarios3: `TURNO TARDE - INFANTIL DIAS DA SEMANA: 2ª E 4ª FEIRA HORÁRIO: 16H50 ÀS 17H35 - SUB 06`,

            descricao: `A Escola de Futsal CCV está inserida em um dos Colégios da rede particular mais tradicionais de Contagem;
                     O COLÉGIO CRISTÃO VITÓRIA possui seu diferencial no princípios Cristãos, além de ter uma linda história de mais de 25 anos de Excelência de Ensino.  
                     Iniciamos nossa parceria em 2018, com a proposta de ensinar o FUTSAL de forma dinâmica e lúdica no âmbito escolar. Utilizamos as dependências do Colégio
                     proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado e para fazer muitas amizades.`,
            nome2: "DIAS E HORARIOS",
            imagem: "img/CCV FUTSAL.png",

        },
        item_2: {
            nome: "ESCOLA DE FUTSAL SUPREMO",

            horarios1: `TURNO MANHÃ DIAS DA SEMANA: 3ª E 5ª FEIRA HORÁRIO: 11H30 ÀS 12H20 - SUB 08 | 10 | 12`,

            horarios2: `TURNO TARDE DIAS DA SEMANA: 3ª E 5ª FEIRA HORÁRIO 2: 17H45 ÀS 18H35 - SUB 08, 10 E 12`,

            horarios3:`TURNO TARDE - INFANTIL DIAS DA SEMANA: 3ª E 5ª FEIRA HORÁRIO: 17H00 ÀS 17H45 - SUB 06`,

            descricao: `A Escola de Futsal Supremo está inserida em um dos Colégios da rede particular mais tradicionais de Contagem;
                        O COLÉGIO SUPREMO possui uma estrutura fantástica, além de ter uma linda história de mais de 29 anos de Excelência de Ensino. 
                        Iniciamos nossa parceria em 2019, com a proposta de ensinar o FUTSAL de forma dinâmica e lúdica no âmbito escolar. Utilizamos as 
                        dependências do Colégio proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado e para fazer muitas amizades. `,
            nome2: "DIAS E HORARIOS",
            imagem: "img/SUPREMO FUTSAL.png",

        },
        item_3: {
            nome: "ESCOLA DE FUTSAL E. KALIL",

            horarios1: `TURNO MANHÃ DIAS DA SEMANA: 4ª E 6ª FEIRA HORÁRIO: 11H40 ÀS 12H30 - SUB 11 E 13 `,

            horarios2: `TURNO TARDE DIAS DA SEMANA: 3ª E 5ª FEIRA HORÁRIO 2: 18H05 ÀS 18H55 - SUB 08, 10 E 12`,

            horarios3: `TURNO TARDE - INFANTIL DIAS DA SEMANA: 3ª E 5ª FEIRA HORÁRIO: 17H20 ÀS 18H05 - SUB 06`,

            descricao: `A Escola de Futsal Elizabeth Kalil está inserida em um dos Colégios da rede particular mais tradicionais de Contagem;
                        O INSTITUTO ELIZABETH KALIL possui uma estrutura fantástica, além de ter uma linda história de mais de 50 anos de Excelência de Ensino. 
                        Iniciamos nossa parceria em 2023, com a proposta de ensinar o FUTSAL de forma dinâmica e lúdica no âmbito escolar. Utilizamos as 
                        dependências do Colégio proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado e para fazer muitas amizades. `,
            nome2: "DIAS E HORARIOS",
            imagem: "img/CRESCER ESPORTES.png",

        },
        item_4: {
            nome: "ESCOLA DE FUTSAL IHF",

            horarios1: `TURNO MANHÃ DIAS DA SEMANA: 3ª E 6ª FEIRA HORÁRIO: 11H30 ÀS 12H20 - SUB 08|10|12`,

            horarios2: `TURNO TARDE DIAS DA SEMANAS: 3ª E 5ª FEIRA HORÁRIO: 17H40 ÀS 18H30 - SUB 08|10|12`,

            horarios3: `TURNO TARDE INFANTIL DIAS DA SEMANA: 3ª E 5ª FEIRA HORÁRIO: 17H00 ÀS 17H40 - SUB 06`,

            descricao: `A Escola de Futsal IHF, está inserida em um dos Colégios da rede particular mais tradicionais de Contagem;
                        O INSTITUTO HELENA FENANDES possui uma estrutura fantástica, além de ter uma linda história de Excelência de Ensino. 
                        Iniciamos nossa parceria em 2025, com a proposta de ensinar o FUTSAL de forma dinâmica e lúdica no âmbito escolar. Utilizamos as
                        dependências do Colégio proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado e para fazer muitas amizades. `,
            nome2: "DIAS E HORARIOS",
            imagem: "img/CRESCER ESPORTES.png",

        },
                item_5: {
            nome: "ESCOLA DE ESPORTES CRESCER",

            horarios1: `TURNO MANHÃ DIAS DA SEMANA: 3ª E 6ª FEIRA HORÁRIO: 11H30 ÀS 12H20 - SUB 08|10|12`,

            horarios2: `TURNO TARDE DIAS DA SEMANA: 2ª E 4ª FEIRA HORÁRIO 2: 17H40 ÀS 18H40 - SUB 08|10|12`,

            horarios3: `TURNO TARDE INFANTIL DIAS DA SEMANA: 3ª E 5ª FEIRA HORÁRIO: 17H00 ÀS 17H40 - SUB 06 `,

            descricao: `A Escola de Esportes CRESCER, está inserida em um dos Colégios da rede particular mais tradicionais de Contagem;
                        O COLÉGIO CRESCER CONTAGEM possui uma estrutura fantástica, além de ter uma linda história de Excelência de Ensino. 
                        Iniciamos nossa parceria em 2025, com a proposta de ensinar o FUTSAL de forma dinâmica e lúdica no âmbito escolar. 
                        Utilizamos as dependências do Colégio proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado
                        e para fazer muitas amizades.`,
            nome2: "DIAS E HORARIOS",
            imagem: "img/CRESCER ESPORTES.png",

        },
                item_6: {
            nome: "ESCOLA DE ESPORTES CONSTRUIR +",

            horarios1: `TURNO TARDE 2 DIAS DA SEMANA: 2ª E 4ª FEIRA HORÁRIO: 18H00 ÀS 18H50 - SUB 12`,

            horarios2: `TURNO TARDE DIAS DA SEMANA: 2ª E 4ª FEIRA HORÁRIO: 17H10 ÀS 18H00 - SUB 08|10 `,

            horarios3: `TURNO TARDE - INFANTIL DIA DA SEMANA: 6ª FEIRA HORÁRIO 2: 17H40 ÀS 18H30 - SUB 06`,

            descricao: `A Escola de Esportes CRESCER, está inserida em um dos Colégios da rede particular mais tradicionais de Contagem;
                        O COLÉGIO CRESCER CONTAGEM possui uma estrutura fantástica, além de ter uma linda história de Excelência de Ensino. 
                        Iniciamos nossa parceria em 2025, com a proposta de ensinar o VÔLEI de forma dinâmica e lúdica no âmbito escolar. 
                        Utilizamos as dependências do Colégio proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado
                         e para fazer muitas amizades.`,
            nome2: "DIAS E HORARIOS",
            imagem: "img/CRESCER ESPORTES.png",

        },
    };

    // cria/separa a área de informações (insere após o container de escolas)
    let infoSection = document.getElementById("info_escola");
    if (!infoSection) {
        infoSection = document.createElement("div");
        infoSection.id = "info_escola";
        infoSection.className = "info-escola";
        infoSection.style.display = "none"; // começa escondido
        containerEscolas.parentNode.insertBefore(infoSection, containerEscolas.nextSibling);
    }

    const itens = document.querySelectorAll(".iten_escola");
    if (itens.length === 0) {
        console.warn("Nenhum elemento com a classe .iten_escola encontrado.");
    }

    itens.forEach(item => {
        item.style.cursor = "pointer";
        item.addEventListener("click", (ev) => {
            const dados = escolas[item.id];
            if (!dados) {
                infoSection.innerHTML = "<p>Informações não disponíveis para esta escola.</p>";
            } else {
                infoSection.innerHTML = `
   <div class="info-conteudo">
        <div class="info-texto">
            <h2>${dados.nome}</h2>
            <div>${dados.descricao}</div>
            <h2>${dados.nome2}</h2>
            <div>${dados.horarios2}<br><br>${dados.horarios3}<br><br>${dados.horarios1}</div>
        </div>
        <div class="info-imagem">
            <img src="${dados.imagem}" alt="${dados.nome}" class="imagem-escola">
        </div>
    </div>`;
            }
            infoSection.style.display = "block";
            if (window.innerWidth <= 1068) {
            infoSection.scrollIntoView({ behavior: "smooth", block: "start" })};
        });
    });
});
