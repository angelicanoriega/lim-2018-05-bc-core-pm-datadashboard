document.getElementById('btn').addEventListener('click', () => {
    const sede = document.getElementById('menu');
    if (sede.hasAttribute('class')) {
        sede.removeAttribute('class')
    } else {
        sede.setAttribute('class', 'menu')
    }
})



