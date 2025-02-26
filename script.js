const criarBotao = document.getElementById('criar');
const formularioContainer = document.getElementById('formulario-container');
const formulario = document.getElementById('formulario');
const tabela = document.getElementById('tabela');
const corpoTabela = document.getElementById('corpo-tabela');
const fecharBotao = document.getElementById('fechar');

criarBotao.addEventListener('click', () => {
  formularioContainer.style.display = 'block';
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const instrumento = document.getElementById('instrumento').value;
  const escolaridade = document.getElementById('escolaridade').value;

  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${nome}</td>
    <td>${idade}</td>
    <td>${instrumento}</td>
    <td>${escolaridade}</td>
  `;
  corpoTabela.appendChild(tr);

  // Limpa os campos do formulário
  document.getElementById('nome').value = '';
  document.getElementById('idade').value = '';
  document.getElementById('instrumento').value = '';
  document.getElementById('escolaridade').value = '';

  formularioContainer.style.display = 'none';
});

fecharBotao.addEventListener('click', () => {
  formularioContainer.style.display = 'none';
})