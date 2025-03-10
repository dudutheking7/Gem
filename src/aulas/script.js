document.getElementById('presenca').addEventListener('change', function() {
    if (this.value === 'presente') {
      document.getElementById('progresso').disabled = false;
    } else {
      document.getElementById('progresso').disabled = true;
    }
  });
  
  document.getElementById('progresso').addEventListener('change', function() {
    if (this.value === 'passou') {
      document.getElementById('proxima-licao').disabled = false;
    } else {
      document.getElementById('proxima-licao').disabled = true;
    }
  });
  function OpenModal() {
    const formContainer = document.querySelector('.form-container');
    formContainer.style.display = 'flex';
  }
  
  function CloseModal() {
    const formContainer = document.querySelector('.form-container');
    formContainer.style.display = 'none';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const formContainer = document.querySelector('.form-container');
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.onclick = CloseModal;
    formContainer.appendChild(closeButton);
  });