// Afficher l'email

function afficherEmail(nom, email, Message) {
  let mailto = `mailto:${email}?${firstname} ${Message} `
  location.href = mailto
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

    afficherEmail(firstname, Email, Message)

    // Vous pouvez faire d'autres opérations ici, comme envoyer les données via une requête AJAX, par exemple.
});