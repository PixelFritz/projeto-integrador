let isToggled = false

document.getElementById('daltonismo').addEventListener('click', function() {
    document.body.classList.toggle('modo-escuro');
    const icons = document.querySelectorAll('.icones')

    icons.forEach((icon) => {
        if(isToggled) {
            icon.src = icon.getAttribute('data-original')
        } else {
            icon.src = icon.getAttribute('data-alternative')
        }
    })

    isToggled = !isToggled;
});
