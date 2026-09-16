const bouton = document.querySelector('#btn');
bouton.addEventListener('click', () => {
    bouton.innerHTML = 'Vous avez cliqué !';
    bouton.setAttribute('disabled', 'disabled');
}); 