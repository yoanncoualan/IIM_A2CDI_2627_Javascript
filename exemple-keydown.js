const nom = document.querySelector('#nom')
const tel = document.querySelector('#tel')

nom.addEventListener('keydown', (event) => {
    const caractere = event.key;

    if(Number(caractere)){
        event.preventDefault()
        return false;
    }
});

tel.addEventListener('keydown', (event) => {
    const caractere = event.key;
    const touche = event.code;

    console.log(caractere, touche)

    if(!Number(caractere) && caractere != '+'){
        event.preventDefault();
        return false;
    }
});