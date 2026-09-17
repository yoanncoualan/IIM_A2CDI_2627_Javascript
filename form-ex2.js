const form = document.querySelector('#form2')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const num1 = e.target.num1.value;
    const num2 = e.target.num2.value;

    if(Number(num1) && Number(num2)){
        if(num1 < num2){
            console.log(`${num1} est plus petit que ${num2}`)
        }
        else{
            console.log(`${num1} est plus grand que ${num2}`)
        }
    }
    else{
        console.log("Vous n'avez pas saisie deux numéros")
    }
})