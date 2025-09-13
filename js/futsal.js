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
    item_1: { nome: "Escola de Futsal CCV", descricao: "aaa"},
    item_2: { nome: "Escola de Futsal Supremo", descricao: "bbb"},
    item_3: { nome: "Escola C", descricao: "ccc"},
    item_4: { nome: "Escola D", descricao: "ddd"},
    item_5: { nome: "Escola E", descricao: "eee"},
    item_6: { nome: "Escola F", descricao: "fff"}
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
                                 <div>${dados.descricao}</div></div>`;
      }
      infoSection.style.display = "block";
      infoSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});
