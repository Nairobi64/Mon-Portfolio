// Afficher l'email

function afficherEmail(firstname, Email, Message) {
  let mailto = `mailto:${userEmail}?subject=Message&body=Salut, je suis ${firstname} et j'apprecie ce que tu fais ${userMessage}!`
  location.href = mailto
}

function afficherResultat(Message) {
  // Récupération de la zone dans laquelle on va écrire le message
  let Messagerie = document.getElementById("Message")
  // Ecriture du texte
  let affichageMessage = `${Message}` 
  // On place le texte à l'intérieur du span. 
  Messagerie.innerText = affichageMessage
  
}


let form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    // Bloque l'action par défaut du formulaire
    event.preventDefault();

    // Récupération des éléments du formulaire
    let baliseNom = document.getElementById('firstname');
    let userName = baliseNom.value;

    let baliseEmail = document.getElementById('Email')
    let UserEmail = baliseEmail.value

    let BaliseMessage = document.getElementById('Message')
    let UserMessage = BaliseMessage.value
   
    afficherResultat(Message,Email)
    afficherEmail(firstname, Email, Message)


    // Vous pouvez faire d'autres opérations ici, comme envoyer les données via une requête AJAX, par exemple.
});