document.addEventListener('DOMContentLoaded', () => {
  const botoes = document.querySelectorAll('.opc_inf');

  const informacoes = document.getElementById('inf')
  informacoes.classList.add('mostrar')

  botoes.forEach(botao => {
    botao.addEventListener('click', () => {
      const conteudo_aberto = botao.nextElementSibling;
      const abrir = conteudo_aberto.classList.contains('mostrar');
      

      if (!abrir) {
        conteudo_aberto.classList.add('mostrar');
      }else{
        conteudo_aberto.classList.remove('mostrar')
      }



    });
  });
});