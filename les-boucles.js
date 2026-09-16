/*
let age = -1;

while (age < 0 || age == ""){
    age = prompt("Quel est votre age ?");
}

if(age != "" && age != null){
    if(age < 18){
        alert("Vous êtes mineur");
    }
    else {
        alert("Vous êtes majeur");
    }
}
else{
    alert("Vous n'avez pas répondu")
}
*/

const budget = 1000;
let prix_article = -1;

while (prix_article < 0 || prix_article == ""){
    prix_article = prompt("Quel est le prix de l'article ?");
}

if(prix_article != "" && prix_article != null){
    if(prix_article <= budget){
        const reste = budget - prix_article;
        alert(`Il vous reste ${reste}€`);
    }
    else{
        alert("Vous ne pouvez pas acheter cet article");
    }
}
else{
    alert("Vous n'avez pas répondu");
}