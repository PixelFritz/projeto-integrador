document.getElementById('buttonDesc').addEventListener('click', function () {
   var hiddenContent = document.getElementById('esconderDesc');
   if (hiddenContent.classList.contains('esconder')) {
      hiddenContent.classList.remove('esconder');
      this.textContent = 'Descrição do produto';
   } else {
      hiddenContent.classList.add('esconder');
      this.textContent = 'Descrição do produto';
   }
});


document.getElementById('buttonMedidas').addEventListener('click', function () {
   var hiddenContent = document.getElementById('esconderMedidas');
   if (hiddenContent.classList.contains('esconder')) {
      hiddenContent.classList.remove('esconder');
      this.textContent = 'Tabela de tamanhos';
   } else {
      hiddenContent.classList.add('esconder');
      this.textContent = 'Tabela de tamanhos';
   }
});
