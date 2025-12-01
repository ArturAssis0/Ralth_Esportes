async function buscarAluno() {
    const nome = document.getElementById("campoBusca").value;

    const url = `https://SEU_SITE.infinityfreeapp.com/get_aluno.php?nome=${nome}`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    let html = "";

    dados.forEach(item => {
        html += `
            <div class="item">
                <h3>${item.nome} (${item.escola})</h3>
                <p><strong>Evento:</strong> ${item.evento}</p>
                <p><strong>Gols:</strong> ${item.gols}</p>
                <p><strong>Defesas:</strong> ${item.defesas}</p>
            </div>
        `;
    });

    document.getElementById("resultado").innerHTML = html;
}
