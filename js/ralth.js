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
        // 1 — FUTSAL
        // =======================================================
        item_1: {
            lista1: "",
            titulo2: "",
            subtitulo1: "",
            lista_conteudo1: "",
            subtitulo2: "",
            lista_conteudo2: "",
            subtitulo3: "",
            lista_conteudo3: "",
        },

        // =======================================================
        // 2 — VOLEI
        // =======================================================
        item_2: {

        },

        // =======================================================
        // 3 — LANCHONETE +
        // =======================================================
        item_3: {

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

                    <div class="info-imagem" style="background-image: url(${dados.imagem});">
                        
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
