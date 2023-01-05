
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
  
function afficherContacte()
{
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
            div.className = 'contact';
            listeContacts.append(div);
            div.append(aSupprimer);
            div.append(aModifier);
            aSupprimer.append(iSupprimer);
            aModifier.append(iModifier);
            div.className = 'd-flex flex-row mb-3 row-gap-4';
            iSupprimer.className = 'fa-solid fa-trash';
            iModifier.className = 'fa-solid fa-pen-to-square';
            lienSetAttribut=document.getElementsByClassName('a');
            divContact=document.getElementsByClassName('contact');
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
                    
                   }
                });
                

            } ); 
            iModifier.addEventListener('click', ()=>{
              
             
               contacts.forEach(contact => {
                if(contact['id'] == iModifier.textContent)
               {
                // Affichage des informations dans le formulaire du contact selectionner
                document.getElementById('Id').value = contact['id'] ;
                document.getElementById('Prenom').value = contact['prenom'] ;
                document.getElementById('Nom').value = contact['nom'] ;
                document.getElementById('Telephone').value = contact['telephone'] ;
                document.getElementById('Groupe').value = contact['groupe'] ;
                document.getElementById('Bio').value = contact['bio'] ;
                //document.getElementById('Avatar').value = contact['photo'] ;
                document.getElementById('Email').value = contact['email'] ;
                //console.log(contacts)
                // Recuperation de valeurs des input modifiees

                 const form = document.querySelector("form");
                form.addEventListener('submit', () =>{
                    let id = document.getElementById('Id').value;
                    let prenom = document.getElementById('Prenom').value;
                    let nom=document.getElementById('Nom').value ;
                    let telephone=document.getElementById('Telephone').value ;
                    let groupe=document.getElementById('Groupe').value ;
                    let bio=document.getElementById('Bio').value ;
                    let photo=document.getElementById('Avatar').value;
                    let email=document.getElementById('Email').value ;
                    let modification ={'id' :id,'prenom': prenom,'nom' : nom,'telephone':telephone,'groupe' : groupe,'email':email,'bio':bio,'photo': photo};
                   
                    
                        if(contact['id'] == iModifier.textContent)
                       {
                       var index = contacts.indexOf(contact);
                        //console.log(index);
                        contacts.push(modification);
                        contacts.splice(index,1);
                    }
                   
                    console.log(contacts);
                    
                   
                    
                });

               }
            });

            } ); 
            
            

        }
}


window.addEventListener("load",afficherContacte());
