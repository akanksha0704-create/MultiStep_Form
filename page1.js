//form - name inut check
let nameInput = document.getElementById('name');
let classCheckName = document.getElementById('nameError');
nameInput.addEventListener('change', checkName);
function checkName() {
  let storeName = '';
  storeName += nameInput.value;
  if (storeName.length == '') {
    nameErrorCheck(nameInput);
    return false;
  } else {
    nameVerify();
    return true;
  }
}
function nameVerify() {
  if (classCheckName.classList.contains('error')) {
    classCheckName.classList.remove('error');
    classCheckName.classList.add('verified');
    nameInput.style.borderColor = 'hsl(229, 24%, 87%)';
    classCheckName.innerHTML = 'Valid !! ';
  } else {
    classCheckName.classList.add('verified');
    nameInput.style.borderColor = 'hsl(229, 24%, 87%)';
  }
}
function nameErrorCheck(nameInput) {
  classCheckName.innerHTML = 'This field is required';
  if (classCheckName.classList.contains('verified')) {
    classCheckName.classList.remove('verified');
    classCheckName.classList.add('error');
    nameInput.style.borderColor = 'hsl(354, 84%, 57%)';
  } else {
    classCheckName.classList.add('error');
    nameInput.style.borderColor = 'hsl(354, 84%, 57%)';
  }
}

// email address function
let emailInput = document.getElementById('email');
let classCheckEmail = document.getElementById('emailError');
emailInput.addEventListener('change', checkEmail);
function checkEmail() {
  let storeEmail = '';
  storeEmail += emailInput.value;
  let char = storeEmail.includes('@');
  let dot = storeEmail.includes('.');
  let space = storeEmail.includes(' ');
  if (storeEmail.length == '') {
    emptyCheck(emailInput);
  } else if (char && dot && !space && storeEmail.length !== '') {
    verifyEmail(emailInput);
    return true;
  } else {
    emailErrorCheck(emailInput);
    return false;
  }
}
function verifyEmail(emailInput) {
  if (classCheckEmail.classList.contains('error')) {
    classCheckEmail.classList.remove('error');
    classCheckEmail.classList.add('verified');
    emailInput.style.borderColor = 'hsl(229, 24%, 87%)';
    classCheckEmail.innerHTML = 'Valid !!';
  } else {
    classCheckEmail.classList.add('verified');
    emailInput.style.borderColor = 'hsl(229, 24%, 87%)';
    classCheckEmail.innerHTML = 'Valid !!';
  }
}
function emailErrorCheck(emailInput) {
  classCheckEmail.innerHTML = 'Invalid format';
  if (classCheckEmail.classList.contains('verified')) {
    classCheckEmail.classList.remove('verified');
    classCheckEmail.classList.add('error');
    emailInput.style.borderColor = 'hsl(354, 84%, 57%)';
  } else {
    classCheckEmail.classList.add('error');
    emailInput.style.borderColor = 'hsl(354, 84%, 57%)';
  }
}

function emptyCheck(emailInput) {
  classCheckEmail.innerHTML = 'This field is required';
  if (classCheckEmail.classList.contains('verified')) {
    classCheckEmail.classList.remove('verified');
    classCheckEmail.classList.add('error');
    emailInput.style.borderColor = 'hsl(354, 84%, 57%)';
  } else {
    classCheckEmail.classList.add('error');
    emailInput.style.borderColor = 'hsl(354, 84%, 57%)';
  }
}

// phone number check
let contactInput = document.getElementById('contact');
let classCheckContact = document.getElementById('phoneError');
contactInput.addEventListener('change', checkContact);
function checkContact() {
  let storeContact = '';
  storeContact += contactInput.value;
  if (storeContact.length == '') {
    emptyContact(contactInput);
    return false;
  } else if (storeContact.length === 10) {
    contactVerify(contactInput);
    return true;
  } else {
    contactErrorCheck(contactInput);
    return false;
  }
}
function emptyContact(contactInput) {
  classCheckContact.innerHTML = 'This field is required';
  contactInput.style.borderColor = 'hsl(354, 84%, 57%)';
  classCheckContact.classList.add('error');
}
function contactVerify(contactInput) {
  if (classCheckContact.classList.contains('error')) {
    classCheckContact.classList.remove('error');
    classCheckContact.classList.add('verified');
    classCheckContact.innerHTML = 'Valid !!';
    contactInput.style.borderColor = 'hsl(229, 24%, 87%)';
  } else {
    classCheckContact.classList.add('verified');
    contactInput.style.borderColor = 'hsl(229, 24%, 87%)';
  }
}
function contactErrorCheck(contactInput) {
  classCheckContact.innerHTML = 'Invalid format';
  contactInput.style.borderColor = 'hsl(354, 84%, 57%)';
  if (classCheckContact.classList.contains('verified')) {
    classCheckContact.classList.remove('verified');
    classCheckContact.classList.add('error');
  } else {
    classCheckContact.classList.add('error');
  }
}

//clear function to clear the inputs

// submit button action
submitbtn = document.getElementById('nextStepBtn');
submitbtn.addEventListener('click', checkSubmit);
function checkSubmit(e) {
  let callName = checkName();
  let callEmail = checkEmail();
  let callContact = checkContact();
  if (callName == true && callEmail == true && callContact == true) {
    alert('Your form has been successfully placed !!');
    location.href = './page2.html';
    // return true;
  } else {
    alert('Some error in placing the form !! Please try again');
    e.preventDefault();
    // return false;
  }
}
