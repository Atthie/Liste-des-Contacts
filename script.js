let Contacts=[];
const form = document.querySelector('form');
const firstNameInput = document.querySelector('#Prénom');
const lastNameInput = document.querySelector('#Nom');
const phoneInput = document.querySelector('#Telephone');
const groupSelect = document.querySelector('.group');
const emailInput = document.querySelector('#email');
const bioInput = document.querySelector('#bio');
const avatarInput = document.querySelector('#avatar');
const createButton = document.querySelector('.bout1');
const resetButton = document.querySelector('.bout2');
const contactList = document.querySelector('.ListeDesContacts');


form.addEventListener('submit', event => {
  event.preventDefault();
  
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const phone = phoneInput.value;
  const group = groupSelect.value;
  const email = emailInput.value;
  const bio = bioInput.value;
  const avatar = avatarInput.files[0];
  

  if (!firstName || !lastName || !phone || !group || !email || !avatar) {
    alert('Tous les champs sont obligatoires !');
    return;
  }

  // Création de l'objet contact avec les données du formulaire
  const contact = {
    firstName,
    lastName,
    phone,
    group,
    email,
    bio,
    avatar
  };
  Contacts.push(contact);
  
  // Ajout du contact à la liste des contacts
  addContactToList(contact);


  // Réinitialisation du formulaire
  form.reset();
  resetButton.addEventListener('click', () => {
    form.reset();
  });
});




function addContactToList(contact) {
  // Création de l'élément HTML pour le nouveau contact
  const contactElement = document.createElement('div');
  contactElement.classList.add('contact');

  // Ajout de l'avatar
  const avatarElement = document.createElement('img');
//   avatarElement.style.height='200px';
//   avatarElement.style.width='200px';
  avatarElement.src = URL.createObjectURL(contact.avatar);
  avatarElement.classList.add('avatar');
  contactElement.appendChild(avatarElement);
  
console.log(contact.avatar);
  // Ajout des informations du contact
  const infoElement = document.createElement('div');
  infoElement.classList.add('info');
  infoElement.innerHTML = `
    <h4>${contact.firstName} ${contact.lastName}</h4>
    <p>Téléphone: ${contact.phone}</p>
    <p>Groupe: ${contact.group}</p>
    <p>Email: <a href="mailto:${contact.email}?subject=Bonjour%20${contact.firstName}%20${contact.lastName}&body=Bonjour%20${contact.firstName},%0A%0A%0A%0A%0A%0A%0A%0AMes%20meilleures%20salutations%0A%0A${contact.lastName}">${contact.email}</a></p>
    <p>Bio: ${contact.bio}</p>
    `;
  contactElement.appendChild(infoElement);

  // Ajout du bouton de modification
  const modifyButton = document.createElement('button');
  modifyButton.innerHTML = '<a class="icon iconnoir " href="#"> <i class="fa-solid fa-user-pen"></i></a>';
  modifyButton.classList.add('modify');
  modifyButton.addEventListener('click', () => {
  
    // Populate the form with the current contact's information
    firstNameInput.value = contact.firstName;
    lastNameInput.value = contact.lastName;
    phoneInput.value = contact.phone;
    groupSelect.value = contact.group;
    emailInput.value = contact.email;
    bioInput.value = contact.bio;
    avatarInput.value = Object.values(contact.avatar);
   
  });
  contactElement.appendChild(modifyButton);

  // Ajout du bouton de suppression
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = ' <a class="icon iconred " href="#"><i class="fa-regular fa-trash-can"></i></a>';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', () => {
    contactList.removeChild(contactElement);
  });
  contactElement.appendChild(deleteButton);

  // Ajout du contact à la liste des contacts
  contactList.appendChild(contactElement);
}
avatarInput.addEventListener('change', event => {
    const avatar = event.target.files[0];
  
    // Vérification de l'extension de l'avatar
    if (!avatar.type.match('image.*')) {
      alert('Seules les images sont autorisées !');
      return;
    }
  
    // Mise à jour de l'avatar prévisualisé
    const avatarPreview = document.querySelector('.avatar-preview');
    avatarPreview.src = URL.createObjectURL(avatar);
    avatarPreview.classList.remove('hidden');
  });

  // Masquage de la prévisualisation de l'avatar au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const avatarPreview = document.querySelector('.avatar-preview');
    avatarPreview.src = '';
    avatarPreview.classList.add('hidden');
  });

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
                    let index = contacts.indexOf(contact);
                    contacts.push(modification);
                    contacts.splice(index,1);
                }
                   
                   
                    
                   

                });

               }
            });

            } ); 
            
            

        }
}


window.addEventListener("load",afficherContacte());

