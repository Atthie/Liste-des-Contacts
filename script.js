const form  = document.querySelector('form');
const Id = document.querySelector('#id');
let id= form.elements.id.value
const ListeDesContacts = document.querySelector('.ListeDesContacts');
const firstNameInput = document.querySelector('#Prénom');
const lastNameInput = document.querySelector('#Nom');
const phoneInput = document.querySelector('#Telephone');
const groupSelect = document.querySelector('.group');
const emailInput = document.querySelector('#email');
const bioInput = document.querySelector('#bio');
const join_picture = document.querySelector('.join_picture');
const avatarInput = document.querySelector('#avatar');
const createButton = document.querySelector('.bout1');
const resetButton = document.querySelector('.bout2');
const afficheMe = document.querySelector('.afficheMe');
const tab = []
const Erreurs = {}
let fileURL;


//=======First Name Validation=========
function validPrenom() {
  let prenom = form.elements.Prénom.value;
  let errorMessage = prenom.length === 0 ? "Ce champ est obligatoire!!!" : prenom.length < 3 ? "Renseigner un nom avec plus de 3 caractères" : prenom.length > 50 ? "Renseigner un nom avec moins de 50 caractères" : "";
  if (errorMessage) {
    Object.defineProperty(Erreurs, "prenom", {
      value: errorMessage,
      writable: true,
      enumerable: true,
      configurable: true
    });
    document.getElementById("Prénom").style.borderColor = "red";
    document.getElementById("prenomErr").style.color = "red";
    document.getElementById("prenomErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>${errorMessage}</p>`;
  } else {
    delete Erreurs.prenom;
    document.getElementById("Prénom").style.borderColor = "";
    document.getElementById("prenomErr").style.color = "";
    document.getElementById("prenomErr").innerHTML = "";
  }
}



//=============Name Validation==============
function validNom(){
  let nom = form.elements.Nom.value;
  let errorMessage = "";
  if (nom.length === 0) {
    errorMessage = "Ce champ est obligatoire!!!";
  } else if (nom.length < 3) {
    errorMessage = "Renseigner un nom avec plus de 3 caractères";
  } else if (nom.length > 50) {
    errorMessage = "Renseigner un nom avec moins de 50 caractères";
  }
  if (errorMessage) {
    document.getElementById("Nom").style.borderColor = "red";
    document.getElementById("nomErr").style.color = "red";
    document.getElementById("nomErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>${errorMessage}</p>`;
    Erreurs.nom = errorMessage;
  } else {
    document.getElementById("Nom").style.borderColor = "";
    document.getElementById("nomErr").innerHTML = "";
    delete Erreurs.nom;
  }
}

//==========Validation Number=========
const validPhone = () => {
  const Telephone = form.elements.Telephone.value;
  const phoneRegex = /^\d+$/;
  const validPrefixes = ["084", "085", "080", "089", "081", "082", "083", "099", "097", "097", "090"];
  const phoneErr = document.getElementById('phoneErr');
  const phoneInput = document.getElementById('Telephone');
  
  if(!phoneRegex.test(Telephone)) {
    setInvalid(phoneInput, phoneErr, "Ce champ est obligatoire!!!", "phone");
  } else if(Telephone.length !== 10){
    setInvalid(phoneInput, phoneErr, "Renseigner un numéro de téléphone avec au moins 10 chiffres", "phone");
  } else if(!validPrefixes.includes(Telephone.substring(0,3))) {
    setInvalid(phoneInput, phoneErr, "Renseigner un numéro de téléphone au format valide", "phone");
  } else {
    setValid(phoneInput, phoneErr, "phone");
  }
}
const setInvalid = (input, errorNode, errorMessage, errorKey) => {
    input.style.borderColor = 'red';
    errorNode.style.color = 'red';
    errorNode.innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>${errorMessage}</p>`;
    Erreurs[errorKey] = errorMessage;
}

const setValid = (input, errorNode, errorKey) => {
    input.style.borderColor = '';
    errorNode.style.color = '';
    errorNode.innerHTML = '';
    delete Erreurs[errorKey];
}

// =======validation email=========
function validEmail() {
  let email = form.elements.email.value
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (!emailRegex.test(email)) {
      document.getElementById("email").style.borderColor = "red";
      document.getElementById("errorEmail").style.color="red"
      document.getElementById("errorEmail").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>Veuillez saisir une adresse email valide</p>`;
      return false;
    } else {
      document.getElementById("email").style.borderColor = "";
      document.getElementById("errorEmail").style.color="";
      document.getElementById("errorEmail").innerHTML = "";
      return true;
    }
}


avatarInput.onclick =() => {
  file = avatarInput.files[0]
  dropdown(fileUpload)
 }
join_picture.addEventListener('dragover', (event) => {
  event.preventDefault();
  join_picture.textContent = 'Relacher image';
  join_picture.classList.add('active');
});
join_picture.addEventListener('dragleave', () => {
  join_picture.innerHTML = `<p class="text-image">Déposez la photo ici ou <span class="span-click">Cliquer ici</span></p>`;
  join_picture.classList.remove('active');
});

join_picture.addEventListener('drop', (event) => {
  event.preventDefault();
  file = event.dataTransfer.files[0];
  let fileType = file.type;
  let validExt = ['image/jpeg','image/jpg','image/png','image/svg+xml'];
  if(file.size >1000000){
    join_picture.style.borderColor = "red"
    join_picture.innerHTML = `<p class="text-image">Déposez la photo ici ou <span class="span-click">Cliquer ici</span></p>`
      document.getElementById("imgErr").style.color="red"
      document.getElementById("imgErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>le poids de l’image doit être inférieur à 1 Mo</p>`;
      Object.defineProperty(Erreurs, 'image', {
          value: 'le poids de l’image doit être inférieur à 1 Mo',
          writable : true,
          enumerable : true,
          configurable : true
      });
  }else if(!validExt.includes(fileType)){
    join_picture.style.borderColor = "red"
    join_picture.innerHTML = `<p class="text-image">Déposez la photo ici ou <span class="span-click">Cliquer ici</span></p>`
      document.getElementById("imgErr").style.color="red"
      document.getElementById("imgErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>Ce fichier n'est pas une image</p>`;
      Object.defineProperty(Erreurs, 'image', {
          value: "Le fichier n'est pas une image",
          writable : true,
          enumerable : true,
          configurable : true
      });
  }
  else{
    join_picture.style.borderColor = ""
      document.getElementById("imgErr").style.color=""
      document.getElementById("imgErr").innerHTML = "";
      displayImg();
      delete Erreurs.image;
}
});
function displayImg(){
  let fileReader = new FileReader()
  fileReader.onload = () => {
      fileURL = fileReader.result;
      let imgTag = `<img src = "${fileURL}" alt = "" >`;
      join_picture.innerHTML = imgTag;
  }
  fileReader.readAsDataURL(file);
}

form.addEventListener('submit', (event)=>{
  event.preventDefault();
 
  
  const contacts = Object.fromEntries(new FormData(form));
  contacts.photo = fileURL
  console.log(contacts)

  if(Object.keys(Erreurs).length === 0 ){

    if ( document.getElementById('id').value == '') {
      tab.push(contacts)
        
     }else{
      tab[document.getElementById('id')] = (contacts)
     }
    afficher()
  }
  document.getElementById('id').value = ''
  let imgTag = `<img src = "" alt = "" >`;
  // join_picture.innerHTML = '';
  join_picture.innerHTML = `<p class="text-image">Déposez la photo ici ou <span class="span-click">Cliquer ici</span></p>`
  form.reset();
})

form.reset();
   resetButton.addEventListener('click', () => {
    form.reset();
   });

function afficher(){
  afficheMe.innerHTML = ''
  tab.forEach((contact,index) => {
    
    const div = document.createElement('div')
    div.classList.add('info')
    div.innerHTML = `
    <div class="Icons">
    <button class="modify"  onclick = "edit(${index})"> <a class="icon iconnoir " href="#"> <i class="fa-solid fa-user-pen"></i></a></button>
    <button class="delete" onclick = "deleteElement(${index})" > <a class="icon iconred " href="#"><i class="fa-regular fa-trash-can"></i></a></button> 
    </div>
    <div>
    <img src="${contact.photo}">
    </div>
      <h4>${contact.firstName} ${contact.lastName}</h4>
      <p>Téléphone: ${contact.phone}</p>
      <p>Groupe: ${contact.group}</p>
      <p>Email: <a href="mailto:${contact.email}?subject=Bonjour%20${contact.firstName}%20${contact.lastName}&body=Bonjour%20${contact.firstName},%0A%0A%0A%0A%0A%0A%0A%0AMes%20meilleures%20salutations%0A%0A${contact.lastName}">${contact.email}</a></p>
      <p>Bio: ${contact.bio}</p>
    `
    afficheMe.append(div)

  });

}


function deleteElement(valeur){
  let text = "Voulez vous supprimez ce contact?";
  if (confirm(text) == true) {
    tab.splice(valeur,1)
    afficher()
  } 
 
 
}


function edit(valeur)
{
  //const selectEdit= tab.filter(edit => edit.id == valeur);
  //console.log(tab[valeur]);

 
  document.getElementById('id').value = valeur;
  document.getElementById('Prénom').value = tab[valeur].firstName;
  document.getElementById('Nom').value = tab[valeur].lastName;
  document.getElementById('Telephone').value = tab[valeur].phone;
  document.getElementsByClassName('group').value = tab[valeur].group;
  document.getElementById('email').value = tab[valeur].email;
  document.getElementById('bio').value = tab[valeur].bio;
  
  
  createButton.innerHTML= 'Modifier';
  resetButton.innerHTML= 'Annuler'

  createButton.addEventListener('click', function(){
    createButton.innerHTML='Creer'
    resetButton.innerHTML='Reinit'
  });

  resetButton.addEventListener('click', function(){
    createButton.innerHTML='Creer'
    resetButton.innerHTML='Reinit'
  });
  afficher();
  tab.splice(valeur,1)
}

   


