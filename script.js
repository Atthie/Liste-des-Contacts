
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
  
      // Ajout du contact à la liste des contacts
  addContactToList(contact);
  // Réinitialisation du formulaire
  form.reset();
});
resetButton.addEventListener('click', () => {
  form.reset();
});
function addContactToList(contact) {
  // Création de l'élément HTML pour le nouveau contact
  const contactElement = document.createElement('div');
  contactElement.classList.add('contact');
  // Ajout de l'avatar
  const avatarElement = document.createElement('img');
  avatarElement.src = URL.createObjectURL(contact.avatar);
  avatarElement.classList.add('avatar');
  contactElement.appendChild(avatarElement);
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
  // Ajout du bouton de suppression
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '  <a class="icon iconred " href="#"><i class="fa-regular fa-trash-can"></i></a>';
  deleteButton.classList.add('delete');
  deleteButton.addEventListener('click', () => {
    contactList.removeChild(contactElement);
  });
  contactElement.appendChild(deleteButton);
  const modifyButton = document.createElement('button');
  modifyButton.innerHTML = '<a class="icon iconnoir " href="#"> <i class="fa-solid fa-user-pen"></i></a>';
  modifyButton.classList.add('modify');
 
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


