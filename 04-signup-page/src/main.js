// Element selectors
const form = document.querySelector('.form');
const submit = document.querySelector('#submit');
const inputs = document.querySelectorAll('.form__input');

// Functions

// Returns whether the input is empty
function isEmpty(input) {
  return input.value === '';
}

// Returns whether the input value is a valid email
function isValidEmail(input) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/;
  const value = input.value;
  return regex.test(value);
}

// Updates the DOM to display custom error messages
function throwError(wrapper, msg, message) {
  wrapper.classList.add('error');
  msg.textContent = message;
}

// Removes error messages
function clearError(wrapper, msg) {
  wrapper.classList.remove('error');
  msg.textContent = '';
}

// Validates a given input element
function validate(input) {
  const wrapper = input.parentElement; // the input's wrapper element: given a highlight if value is invalid
  const msg = wrapper.nextElementSibling; // the container for the error message
  if (isEmpty(input)) {
    // input value is empty
    throwError(wrapper, msg, `${input.placeholder} cannot be empty`);
  } else if (input.type === 'email' && !isValidEmail(input)) {
    // input type is email and value is incorrectly formatted
    throwError(wrapper, msg, 'Looks like this is not a valid email address');
  } else {
    clearError(wrapper, msg);
  }
}

function handleSubmit() {
  inputs.forEach((input) => validate(input));
}

// Event Listeners

// Dynamically add/remove error messages when the user unfocuses an input
// Provides form validation without the user needing to submit the entire form
inputs.forEach((input) => {
  input.addEventListener('blur', () => validate(input));
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  handleSubmit();
});

submit.addEventListener('clicking', function (e) {
  e.preventDefault();
  handleSubmit();
});
