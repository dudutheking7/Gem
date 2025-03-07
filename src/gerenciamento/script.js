const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sIdade = document.querySelector('#m-idade')
const sInstrumento = document.querySelector('#m-instrumento')
const sEscolaridade = document.querySelector('#m-escolaridade')
const btnSalvar = document.querySelector('#btnSalvar')

let itens = []
let id = undefined

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sIdade.value = itens[index].idade
    sInstrumento.value = itens[index].instrumento
    sEscolaridade.value = itens[index].escolaridade
    id = index
  } else {
    sNome.value = ''
    sIdade.value = ''
    sInstrumento.value = ''
    sEscolaridade.value = ''
  }
}

function editItem(index) {
  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  /* O evento de click estava sendo passado apenas para o nome, tendo que clicar nele para executar a função, aí eu criei o evento na própria linha que é criada e passando ela mesma. */
  tr.addEventListener('click', () => {
    openInfoModal(tr)
  })

  tr.innerHTML = `
   <td>${item.nome}</td>
    <td>${item.idade}</td>
    <td>${item.instrumento}</td>
    <td>${item.escolaridade}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  if (sNome.value == '' || sIdade.value == '' || sInstrumento.value == '' || sEscolaridade.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].idade = sIdade.value
    itens[id].instrumento = sInstrumento.value
    itens[id].escolaridade = sEscolaridade.value
  } else {
    itens.push({
      'nome': sNome.value,
      'idade': sIdade.value,
      'instrumento': sInstrumento.value,
      'escolaridade': sEscolaridade.value
    })
  }

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })
}

loadItens()

/* Script Abrir Modal de Informações Ad. */
/* Achei confusa a forma que estava sendo feita, então agora ao clicar na linha, ela me passa as próprias informações e eu recebo na função (tr). */
function openInfoModal(tr) {
  /* Como a linha está sendo passada diretamente, basta pegar as informações, e os dados não conseguiam ser pegos por 'textContent', mas sim por 'innerText', pois está pegando um elemento. */
  var nome = tr.cells[0].innerText;
  var idade = tr.cells[1].innerText;
  var instrumento = tr.cells[2].innerText;
  var escolaridade = tr.cells[3].innerText;

  document.getElementById("nome-info").textContent = nome;
  document.getElementById("idade-info").textContent = idade;
  /* Não mexi em nada aqui, mas só pra avisar que esses eram os ids enquanto lá no html faltavam o '-info' no final. */
  document.getElementById("instrumento-info").textContent = instrumento;
  document.getElementById("escolaridade-info").textContent = escolaridade;

  var modalInfo = document.querySelector(".modal-container-info");
  modalInfo.style.display = "block";
}

document.getElementById("btnFecharInfo").addEventListener("click", function() {
  var modalInfo = document.querySelector(".modal-container-info");
  modalInfo.style.display = "none";
});