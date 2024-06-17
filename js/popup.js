// script.js

document.addEventListener('DOMContentLoaded', function() {
    const popupMenu = document.getElementById('popupMenu');
    const closeBtn = document.querySelector('.close-btn');
    const popupDelay = 1000 * 60 * 60 * 2; // Tempo em milissegundos (2 horas neste exemplo)

    // Função para mostrar o pop-up
    function showPopup() {
        popupMenu.style.display = 'flex';
    }

    // Função para ocultar o pop-up e armazenar a hora atual no localStorage
    function hidePopup() {
        popupMenu.style.display = 'none';
        localStorage.setItem('lastPopupTime', Date.now());
    }

    // Adiciona evento de clique ao botão de fechar
    closeBtn.addEventListener('click', hidePopup);

    // Adiciona evento de clique na janela para fechar o pop-up se clicar fora do conteúdo
    window.addEventListener('click', function(event) {
        if (event.target === popupMenu) {
            hidePopup();
        }
    });

    // Verifica o último horário em que o pop-up foi exibido
    const lastPopupTime = localStorage.getItem('lastPopupTime');
    if (!lastPopupTime || Date.now() - lastPopupTime > popupDelay) {
        showPopup();
    }
});