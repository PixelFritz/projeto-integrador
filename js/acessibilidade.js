document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('alinhar-topo');
    const button = document.getElementById('dislexia');
    
    // Verifica se há uma preferência e aplica
    const fontPreference = localStorage.getItem('fontPreference');
    const sizePreference = localStorage.getItem('sizePreference');
    if (fontPreference === 'font-custom') {
        document.body.classList.add('font-custom');
    }
    if(sizePreference === 'alt-tamanho') {
        target.classList.add('alt-tamanho')
    }

    button.addEventListener('click', () => {
        document.body.classList.toggle('font-custom');
        target.classList.toggle('alt-tamanho');

        // Armazena a preferência do usuário no Armazenamento Local
        if (document.body.classList.contains('font-custom')) {
            localStorage.setItem('fontPreference', 'font-custom');
        } else {
            localStorage.removeItem('fontPreference');
        }

        if (target.classList.contains('alt-tamanho')) {
            localStorage.setItem('sizePreference', 'alt-tamanho');
        } else {
            localStorage.removeItem('sizePreference');
        }
    });
});

