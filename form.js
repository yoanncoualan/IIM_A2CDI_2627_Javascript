const pwd = document.querySelector('#pwd')
pwd.addEventListener('blur', () => {
    pwd.classList.remove('error')

    const valeur = pwd.value;

    console.log(pwd.value)
    console.log(Number(pwd.value));

    if(valeur.length < 12){
        pwd.classList.add('error')
    }
})