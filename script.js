function redirectToHomePage() {
  window.location.href = 'home.html';
}

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");


sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");

});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode")
});


const signUpForm = document.getElementById('signup-form');
signUpForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateSignUpForm()) {
    // signUpForm.submit();
    redirectToHomePage();
  }
});

const signInForm = document.getElementById('signin-form');
signInForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validateSignInForm()) {
    // signInForm.submit();
    redirectToHomePage();
  }
});

function validateSignUpForm() {
  const signUpUsernameInput = document.getElementById('signup-username');
  const signUpEmailInput = document.getElementById('signup-email');
  const signUpPasswordInput = document.getElementById('signup-password');

  const username = signUpUsernameInput.value.trim();
  const email = signUpEmailInput.value.trim();
  const password = signUpPasswordInput.value.trim();

  if (username === '') {
    alert('Please enter a username');
    return false;
  }

  if (username.length < 5) {
    alert('Username must be at least 5 characters long');
    return false;
  }

  if (email === '') {
    alert('Please enter an email');
    return false;
  }

  if (email.indexOf('@') === -1) {
    alert('Please enter a valid email');
    return false;
  }

  if (password === '') {
    alert('Please enter a password');
    return false;
  }

  if (password.length <= 6) {
    alert('Password must be more than 6 characters');
    return false;
  }
  // redirectToHomePage();
  return true;
  
}

function validateSignInForm() {
  const signInUsernameInput = document.getElementById('signin-username');
  const signInPasswordInput = document.getElementById('signin-password');

  const username = signInUsernameInput.value.trim();
  const password = signInPasswordInput.value.trim();

  if (username === '') {
    alert('Please enter a username');
    return false;
  }

  if (username.length < 5) {
    alert('Username must be at least 5 characters long');
    return false;
  }

  if (password === '') {
    alert('Please enter a password');
    return false;
  }

  if (password.length <= 6) {
    alert('Password must be more than 6 characters');
    return false;
  }
  // redirectToHomePage();
  return true;
}
