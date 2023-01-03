
let contacts=[
    {'id' :0,
     'prenom': 'Emil',
     'nom' : 'Mulongo',
     'telephone':'0972389000',
     'groupe' : 1,
     'email': 'atthie27@gmail.com',
    'bio':'Bonjour le monde',
    'photo': 'photo.jpg'},
    {'id' :1,
     'prenom': 'lor',
     'nom' : 'Mulongo',
     'telephone':'0972389000',
     'groupe' : 1,
     'email': 'atthie27@gmail.com',
    'bio':'Bonjour le monde',
    'photo': 'photo.jpg'},
    {'id' :2,
     'prenom': 'plamedie',
     'nom' : 'Mulongo',
     'telephone':'0972389000',
     'groupe' : 1,
     'email': 'atthie27@gmail.com',
    'bio':'Bonjour le monde',
    'photo': 'photo.jpg'}
]
function supprimerContact(id,contacts){
    contacts.forEach(contact => {
        if(contact['id'] == id)
       {
        contacts.splice(contact['id']);
        afficherContacte(contacts); 
       }
    });
  
}

    
   
function afficherContacte()
{
    console.log(contacts); 
let listeContacts= document.getElementById('col');
let i=0;
let body= document.body;
    //  console.log(pp);
        for (i ;i < contacts.length;i++) {
            let div= document.createElement("div");
            let aSupprimer =document.createElement("a");
            let aModifier =document.createElement("a");
            let iSupprimer =document.createElement("i");
            let iModifier =document.createElement("i");
            listeContacts.append(div);
            div.append(aSupprimer);
            div.append(aModifier);
            aSupprimer.append(iSupprimer);
            aModifier.append(iModifier);
            div.className = 'd-flex flex-row mb-3 row-gap-4';
            iSupprimer.className = 'fa-solid fa-trash';
            iModifier.className = 'fa-solid fa-pen-to-square';
            lienSetAttribut=document.getElementsByClassName('a');
            aModifier.setAttribute('href','#');
            aSupprimer.setAttribute('href','#');
            iSupprimer.textContent= contacts[i]['id'];
            iModifier.textContent= contacts[i]['id'];
            iSupprimer.addEventListener('click', ()=>{
                contacts.forEach(contact => {
                    if(contact['id'] == iSupprimer.textContent)
                   {
                    contacts.splice(contact['id'],1);
                    div.remove(aSupprimer);
                    console.log(contacts); 
                   }
                });
                

            } ); 
            
            

        }
}
window.addEventListener("load",afficherContacte());
