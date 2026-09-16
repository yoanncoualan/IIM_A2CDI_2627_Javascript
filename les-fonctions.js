function surface(longueur, largeur) {
    return longueur * largeur;
}

function surface_as_str(longueur, largeur){
    const calcul = surface(longueur, largeur)
    return `${longueur} x ${largeur} = ${calcul}m2`
}

console.log(surface_as_str(5,6));
