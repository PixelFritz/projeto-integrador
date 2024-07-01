document.addEventListener('DOMContentLoaded', function() {
    const popupMenu = document.getElementById('popupMenu');
    const closeBtn = document.querySelector('.close-btn');
    const popupDelay = 1000 * 60 * 60 * 2; // Tempo em milissegundos (2 horas neste exemplo)

    function showPopup() {
        popupMenu.style.display = 'flex';
    }

    function hidePopup() {
        popupMenu.style.display = 'none';
        localStorage.setItem('lastPopupTime', Date.now());
    }

    closeBtn.addEventListener('click', hidePopup);

    window.addEventListener('click', function(event) {
        if (event.target === popupMenu) {
            hidePopup();
        }
    });

    const lastPopupTime = localStorage.getItem('lastPopupTime');
    if (!lastPopupTime || Date.now() - lastPopupTime > popupDelay) {
        showPopup();
    }
});