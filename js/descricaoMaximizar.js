/*function toggle(el) {
    var display = document.getElementById(el).style.display;
     if(display == 'none'){
        document.getElementById(el).style.display = 'block';


     }
     else{
        document.getElementById(el).style.display = 'none';
     }
}*/

document.getElementById('buttonDesc').addEventListener('click', function () {
   var hiddenContent = document.getElementById('esconderDesc');
   if (hiddenContent.classList.contains('esconder')) {
      hiddenContent.classList.remove('esconder');
      this.textContent = 'Esconder Informações';
   } else {
      hiddenContent.classList.add('esconder');
      this.textContent = 'Mostrar Informações';
   }
});


document.getElementById('buttonMedidas').addEventListener('click', function () {
   var hiddenContent = document.getElementById('esconderMedidas');
   if (hiddenContent.classList.contains('esconder')) {
      hiddenContent.classList.remove('esconder');
      this.textContent = 'Esconder Informações';
   } else {
      hiddenContent.classList.add('esconder');
      this.textContent = 'Mostrar Informações';
   }
});