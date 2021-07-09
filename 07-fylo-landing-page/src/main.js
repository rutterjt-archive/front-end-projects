// Selectors

const form = document.querySelector('.form');
const input = document.querySelector('.form__input');
const submit = document.querySelector('.form__submit');
const msg = document.querySelector('.form__input-msg');

// Event Handlers

function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}

function handleSubmit(e) {
  e.preventDefault();
  if (validateEmail(input.value)) {
    msg.textContent = '';
  } else {
    msg.textContent = 'Please enter a valid email address';
  }
}

// Event Listeners

form.addEventListener('submit', handleSubmit);
submit.addEventListener('click', handleSubmit);
