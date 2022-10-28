// Corrobora que el email sea valido
export function isValidEmail(str) {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  return regex.test(str);
}

// Corrobora si hay caracteres especiales entro del str.
export function hasSpecialChars(str) {
  const regexSpecialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return regexSpecialChars.test(str);
}

export default function validate(input) {
  const error = {};

  if (input.username) {
    if (!input.username) {
      error.username = "Username is required";
    } else if (hasSpecialChars(input.username)) {
      error.username = "Username may not contain special characters";
    } else if (input.username.trim() === "") {
      error.username = "Username may not be empty";
    } else if (input.username.length > 15 || input.username.length < 0) {
      error.username = `Characters in the username must be between 15 and 0`;
    }
  } else {
    if (!input.email) {
      error.email = "Email is required";
    } else if (!isValidEmail(input.email)) {
      error.email = "Email is not Valid";
    }
  }

  if (!input.pass) {
    error.pass = "Password is required";
  } else if (hasSpecialChars(input.password)) {
    error.pass = "Password may not contain special characters";
  }
  return error;
}
