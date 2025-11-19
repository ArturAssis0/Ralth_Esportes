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
            nome: "ESCOLA FUTSAL DE CCV",

            horarios1: `TURNO MANHÃ  DIAS DA SEMANA: 2ª E 4ª FEIRA HORÁRIO: 11H30 ÀS 12H20 - SUB 08|10|12`,

            horarios2: `TURNO TARDE DIAS DA SEMANA: 2ª E 4ª FEIRA HORÁRIO: 17H40 ÀS 18H30 - SUB 08|10|12`,

            horarios3: `TURNO TARDE - INFANTIL DIAS DA SEMANA: 2ª E 4ª FEIRA HORÁRIO: 16H50 ÀS 17H35 - SUB 06`,

            descricao: `A Escola de Futsal CCV está inserida em um dos Colégios da rede particular mais tradicionais de Contagem;
                     O COLÉGIO CRISTÃO VITÓRIA possui seu diferencial no princípios Cristãos, além de ter uma linda história de mais de 25 anos de Excelência de Ensino.  
                     Iniciamos nossa parceria em 2018, com a proposta de ensinar o FUTSAL de forma dinâmica e lúdica no âmbito escolar. Utilizamos as dependências do Colégio
                     proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado e para fazer muitas amizades.`,
            nome2: "DIAS E HORARIOS",
            imagem: "img/img_futsal_ccv.jpeg",

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
            imagem: "img/img_futsal_supremo.jpeg",

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
            imagem: "img/img_futsal_kalil.jpeg",

        },
        item_6: {
            nome: "ESCOLA DE FUTSAL IHF",

            horarios1: `TURNO MANHÃ DIAS DA SEMANA: 3ª E 6ª FEIRA HORÁRIO: 11H30 ÀS 12H20 - SUB 08|10|12`,

            horarios2: `TURNO TARDE DIAS DA SEMANAS: 3ª E 5ª FEIRA HORÁRIO: 17H40 ÀS 18H30 - SUB 08|10|12`,

            horarios3: `TURNO TARDE INFANTIL DIAS DA SEMANA: 3ª E 5ª FEIRA HORÁRIO: 17H00 ÀS 17H40 - SUB 06`,

            descricao: `A Escola de Futsal IHF, está inserida em um dos Colégios da rede particular mais tradicionais de Contagem;
                        O INSTITUTO HELENA FENANDES possui uma estrutura fantástica, além de ter uma linda história de Excelência de Ensino. 
                        Iniciamos nossa parceria em 2025, com a proposta de ensinar o FUTSAL de forma dinâmica e lúdica no âmbito escolar. Utilizamos as
                        dependências do Colégio proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado e para fazer muitas amizades. `,
            nome2: "DIAS E HORARIOS",
            imagem: "img/img_futsal_ihf.jpeg",

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
                item_4: {
            nome: "ESCOLA DE FUTSAL CONSTRUIR +",

            horarios1: `TURNO TARDE 2 DIAS DA SEMANA: 2ª E 4ª FEIRA HORÁRIO: 18H00 ÀS 18H50 - SUB 12`,

            horarios2: `TURNO TARDE DIAS DA SEMANA: 2ª E 4ª FEIRA HORÁRIO: 17H10 ÀS 18H00 - SUB 08|10 `,

            horarios3: `TURNO TARDE - INFANTIL DIA DA SEMANA: 6ª FEIRA HORÁRIO 2: 17H40 ÀS 18H30 - SUB 06`,

            descricao: `A Escola de Futsal CONSTRUIR+, está inserida em um dos Colégios da rede particular mais tradicionais de Contagem;
                        O COLÉGIO CONSTRUIR+ possui uma estrutura fantástica, além de ter uma linda história de Excelência de Ensino. 
                        Iniciamos nossa parceria em 2024, com a proposta de ensinar o FUTSAL de forma dinâmica e lúdica no âmbito escolar. 
                        Utilizamos as dependências do Colégio proporcionando aos alunos um ambiente seguro e acolhedor, propício para o aprendizado
                         e para fazer muitas amizades.`,
            nome2: "DIAS E HORARIOS",
            imagem: "img/img_futsal_construir.jpeg",

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
                        <p>${dados.descricao}</p>

                        <h2>${dados.nome2}</h2>
                        <p>${dados.horarios1}</p>
                        <p>${dados.horarios2}</p>
                    </div>

                    <div class="info-imagem" style="background-image: url(${dados.imagem});">
                        
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
