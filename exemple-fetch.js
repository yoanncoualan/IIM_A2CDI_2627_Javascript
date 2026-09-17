// Création d'une fonction qui affichera les messages d'erreurs
const displayError = (message) => {
  const error = document.createElement('p')
  error.classList.add('red')
  error.textContent = message
  document.body.appendChild(error)
}
 
// Création d'une fonction qui appel l'API
const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    .catch(error => {
      console.error("Error:", error)
      displayError("Une erreur est survenue")
    });
 
  // Si la réponse est correcte
  if(response.status < 300){
    // On récupère le corps de la requête
    const data = await response.json();

    // On prépare une chaine de caractère vide
    let content = "";
    // On parcours tout ce que l'API a retourné
    data.forEach(element => {
      content += `<h2>${element.title}</h2><p>${element.body}</p><hr>`
    });
    // On crée puis affiche le contenu retourné par l'API
    const elements = document.createElement('main')
    elements.innerHTML = content
    document.body.appendChild(elements)
  }
  else{
    // Status code >= 300
    displayError("Une erreur est survenue")
  }
}
 
// On lance au chargement de la page l'appel API
getData()