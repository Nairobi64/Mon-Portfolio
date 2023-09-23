 // Bloque l'action par defaut du formulaire

 let form = document.querySelector('form')
 form.addEventListener('submit', (event)=> {
 
   // recuperation des elements du formulaire
 
   let baliseNom = document.getElementById('firstname')
   let userName = baliseNom.value
 
   console.log(userName)
 
 })

    
