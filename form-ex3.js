const form = document.querySelector('#form3')
const nb = document.querySelector('#nb')

nb.addEventListener('blur', () => {
    nb.classList.remove('error')

    if(nb.value == ""){
        nb.classList.add('error')
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nb = event.target.nb.value
    const msg = document.querySelector('#msg')

    if(nb == ""){
        msg.innerHTML = "Veuillez renseigner une valeur"
    }
    else if(!Number(nb)){
        msg.innerHTML = "Veuillez renseigner une valeur numérique"
    }
    else{
        let table = "";
        for(let i = 0; i <= 10; i++){
            const calc = i * nb;
            table += `${nb} x ${i} = ${calc}<br>`;
        }

        msg.innerHTML = table;
    }
})