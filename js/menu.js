document.addEventListener('DOMContentLoaded', function() {
    const menuAcessibilidade = document.getElementById('menuAcessibilidade');
    const menu = document.getElementById('menu');

    menuAcessibilidade.addEventListener('click', function() {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && event.target !== menuAcessibilidade) {
            menu.style.display = 'none';
        }
    });
});