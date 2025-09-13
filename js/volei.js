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
            nome: "ESCOLA DE VÔLEI SUPREMO",

            horarios1: `TURNO MANHÃ  DIA DA SEMANA: 5ª FEIRA HORÁRIO: 11H30 ÀS 12H20 - SUB 11 E 13`,

            horarios2: `TURNO TARDE DIAS DA SEMANA: 4ª E 6ª FEIRA HORÁRIO: 17H30 ÀS 18H20 - SUB 08|10|12`,

            descricao: `A Escola de Vôlei Supremo está inserida em um dos Colégios da rede particular mais tradicionais de Contagem;
                     O COLÉGIO SUPREMO possui uma estrutura fantástica, além de ter uma linda história de mais de 29 anos de Excelência de Ensino. 
                     Iniciamos nossa parceria em 2019, com a proposta de ensinar o VÔLEI de forma dinâmica e lúdica no âmbito escolar. Utilizamos as dependências do Colégio
                      proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado e para fazer muitas amizades.`,
            nome2: "DIAS E HORARIOS"

        },
        item_2: {
            nome: "ESCOLA DE VÔLEI KALIL",

            horarios1: `TURNO MANHÃ DIAS DA SEMANA: 5ª FEIRA HORÁRIO: 11H40 ÀS 12H30 - SUB 11 E 13 `,

            horarios2: `TURNO TARDE DIAS DA SEMANA: 2ª E 4ª FEIRA HORÁRIO: 17H30 ÀS 18H20 - SUB 08|10|12`,

            descricao: `A Escola de Vôlei Elizabeth Kalil está inserida em um dos Colégios da rede particular mais tradicionais de Contagem;
                        O INSTITUTO ELIZABETH KALIL possui uma estrutura fantástica, além de ter uma linda história de mais de 50 anos de Excelência de Ensino. 
                        Iniciamos nossa parceria em 2023, com a proposta de ensinar o VÔLEI de forma dinâmica e lúdica no âmbito escolar. Utilizamos as dependências
                        do Colégio proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado e para fazer muitas amizades.`,
            nome2: "DIAS E HORARIOS"

        },
        item_3: { nome: "Escola C", descricao: "ccc" },
        item_4: { nome: "Escola D", descricao: "ddd" },
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
                infoSection.innerHTML = `<div><h2>${dados.nome}</h2>
                                 <div>${dados.descricao}</div></div>
                                 <div><h2>${dados.nome2}</h2>
                                 <div>${dados.horarios1}<br><br>${dados.horarios2}</div></div>`;
            }
            infoSection.style.display = "block";
            infoSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
});
