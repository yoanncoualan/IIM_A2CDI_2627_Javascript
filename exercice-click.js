const image = document.querySelector('#img');

image.addEventListener('click', () => {
    const paragraphe = document.querySelector('#alt');
    paragraphe.innerHTML = image.getAttribute('alt');
})