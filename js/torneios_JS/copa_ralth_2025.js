document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.opc_inf');

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const conteudo_aberto = botao.nextElementSibling;
      const abrir = conteudo_aberto.classList.contains('mostrar');

      document.querySelectorAll('.contents').forEach(conteudo => {
        conteudo.classList.remove('mostrar');
      });

      if (!abrir) {
        conteudo_aberto.classList.add('mostrar');
      }
    });
  });
});