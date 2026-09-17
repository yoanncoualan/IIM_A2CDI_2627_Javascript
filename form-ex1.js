const form = document.querySelector('#form1')

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Bloque le rechargement de la page

    console.log(`Mon 1er choix est : ${event.target.choix1.value}`);
    console.log(`Mon 2nd choix est : ${event.target.choix2.value}`);
    console.log(`Mon 3eme choix est : ${event.target.choix3.value}`);
})