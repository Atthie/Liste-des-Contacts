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

//=======First Name Validation=========
function validPrenom(){
  let prenom = form.elements.Prénom.value
  if (prenom.length < 3) {
      if (prenom.length === 0) {
          document.getElementById("Prénom").style.borderColor = "red";
          document.getElementById("prenomErr").style.color="red"
          document.getElementById("prenomErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>Ce champ est obligatoire!!!</p>`;
          Object.defineProperty(Erreurs, "prenom",{
            value:"Ce champ est obligatoire!!!",
            writable:true,
            enumerable:true,
            configurable:true
          });
        }else{
      document.getElementById("Prénom").style.borderColor = "red";
      document.getElementById("prenomErr").style.color="red"
      document.getElementById("prenomErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>renseigner un nom avec plus de 3 caractères</p>`;
      Object.defineProperty(Erreurs, "prenom",{
        value:"renseigner un nom avec plus de 3 caractères",
        writable:true,
        enumerable:true,
        configurable:true
      });
  }
    }else if (prenom.length > 50) {
      document.getElementById("Prénom").style.borderColor = "red";
      document.getElementById("prenomErr").style.color="red"
      document.getElementById("prenomErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>renseigner un nom avec moin de 50 caractères</p>`;
      
      Object.defineProperty(Erreurs, "prenom",{
        value:"renseigner un nom avec moin de 50 caractères",
        writable:true,
        enumerable:true,
        configurable:true
      });
    }else{
      document.getElementById("Prénom").style.borderColor = "";
          document.getElementById("prenomErr").style.color=""
          document.getElementById("prenomErr").innerHTML = "";
          delete Erreurs.prenom;
    }
}

//=============Name Validation==============
function validNom(){
  let nom = form.elements.Nom.value
  if (nom.length < 3) {
      if (nom.length === 0) {
          document.getElementById("Nom").style.borderColor = "red";
          document.getElementById("nomErr").style.color="red"
          document.getElementById("nomErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>Ce champ est obligatoire!!!</p>`;
          Object.defineProperty(Erreurs, "nom",{
            value:"Ce champ est obligatoire!!!",
            writable:true,
            enumerable:true,
            configurable:true
          });
        }else{
      document.getElementById("Nom").style.borderColor = "red";
      document.getElementById("nomErr").style.color="red"
      document.getElementById("nomErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>renseigner un nom avec plus de 3 caractères</p>`;
      
      Object.defineProperty(Erreurs, "nom",{
        value:"renseigner un nom avec plus de 3 caractères",
        writable:true,
        enumerable:true,
        configurable:true
      });
  }
    }else if (nom.length > 50) {
      document.getElementById("Nom").style.borderColor = "red";
      document.getElementById("nomErr").style.color="red"
      document.getElementById("nomErr").innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>renseigner un nom avec moin de 50 caractères</p>`;
      
      Object.defineProperty(Erreurs, "nom",{
        value:"renseigner un nom avec moin de 50 caractères",
        writable:true,
        enumerable:true,
        configurable:true
      });
    }else{
      document.getElementById("Nom").style.borderColor = "";
          document.getElementById("nomErr").style.color=""
          document.getElementById("nomErr").innerHTML = "";
          delete Erreurs.nom;
    }
}

//==========Validation Number=========
function validPhone(){
  let Telephone = form.elements.Telephone.value;
  let phoneRegex = /^\d+$/;
  let validPrefixes = ["084", "085", "080", "089", "081", "082", "083", "099", "097", "097", "090"];
  if(!phoneRegex.test (Telephone)){
    document.getElementById('Telephone').style.borderColor ='red';
    document.getElementById('phoneErr').style.color='red'
    document.getElementById('phoneErr').innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>Renseigner un numéro de téléphone valide</p>`;
    Object.defineProperty(Erreurs, "phone",{
      value:"Renseigner un numéro de téléphone valide",
      writable:true,
      enumerable:true,
      configurable:true
    });
  }else if (Telephone.length !== 10 ){
    document.getElementById('Telephone').style.borderColor = 'red';
    document.getElementById('phoneErr').style.color = 'red'
    document.getElementById('phoneErr').innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>Renseigner un numéro de téléphone avec au moins 10 chiffres</p>`;
    
    Object.defineProperty(Erreurs, "phone",{
      value:"Renseigner un numéro de téléphone avec au moins 10 chiffres",
      writable:true,
      enumerable:true,
      configurable:true
    });
  }else if (!validPrefixes.includes(Telephone.substring(0, 3))) {
    document.getElementById('Telephone').style.borderColor = 'red';
    document.getElementById('phoneErr').style.color = 'red';
    document.getElementById('phoneErr').innerHTML = `<p><span class="warning__Icon"><i class="fa-solid fa-circle-exclamation"></i></span>Renseigner un numéro de téléphone au format valide</p>`;
    Object.defineProperty(Erreurs, "phone",{
      value:"Renseigner un numéro de téléphone au format valide",
      writable:true,
      enumerable:true,
      configurable:true
    });
  }else{
    document.getElementById('Telephone').style.borderColor ='';
    document.getElementById('phoneErr').style.color =''
    document.getElementById('phoneErr').innerHTML = '';
    delete Erreurs.phone;
  }
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


form.addEventListener('submit', (event)=>{
  event.preventDefault();
 
  document.getElementById('id').value = tab.length;
  const contacts = Object.fromEntries(new FormData(form)) ;
console.log(contacts);
  if(Object.keys(Erreurs).length === 0 ){

    tab.push(contacts)
    console.log(tab)
    afficher()
  }

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
     
      <h4>${contact.firstName} ${contact.lastName}</h4>
      <p>Téléphone: ${contact.phone}</p>
      <p>Groupe: ${contact.group}</p>
      <p>Email: <a href="mailto:${contact.email}?subject=Bonjour%20${contact.firstName}%20${contact.lastName}&body=Bonjour%20${contact.firstName},%0A%0A%0A%0A%0A%0A%0A%0AMes%20meilleures%20salutations%0A%0A${contact.lastName}">${contact.email}</a></p>
      <p>Bio: ${contact.bio}</p>
      <div class="Icons">
      <button class="modify"  onclick = "edit(${index})"> <a class="icon iconnoir " href="#"> <i class="fa-solid fa-user-pen"></i></a></button>
      <button class="delete" onclick = "deleteElement(${index})" > <a class="icon iconred " href="#"><i class="fa-regular fa-trash-can"></i></a></button> 
      </div>
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
  const selectEdit= tab.filter(edit => edit.id == valeur);
  document.getElementById('id').value = edit.id;
  document.querySelector('#Prénom');
  document.querySelector('#Nom');
  document.querySelector('#Telephone');
  document.querySelector('.group');
  document.querySelector('#email');
  document.querySelector('#bio');
     
}

   


