export function isValidDate(str) {
    let year = str.slice(0, 4);
    if (Number(year) < 1950 || Number(year) > 2023 || str.length > 10) {
      return true;
    } else {
      return false;
    }
  }
  
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
  
    if (!input.username) {
      error.username = "Username is required";
    } else if (hasSpecialChars(input.username)) {
      error.username = "Username may not contain special characters";
    } else if (input.username.trim() === "") {
      error.username = "Username may not be empty";
    } else if (input.username.length > 15 || input.username.length < 0) {
      error.username = `Characters in the username must be between 15 and 0`;
    }
  
    if (!input.email) {
      error.email = "Email is required";
    } else if (!isValidEmail(input.email)) {
      error.email = "Email is not Valid";
    }
  
    if (isValidDate(input.date_of_birth)) {
      error.date_of_birth = "Invalid year";
    } else if (!input.date_of_birth) {
      error.date_of_birth = "Invalid date";
    }
  
    if (!input.password) {
      error.password = "Password is required";
    } else if (hasSpecialChars(input.password)) {
      error.password = "Password may not contain special characters";
    } else if (input.password.length < 8) {
      error.password = "The Password must have at least 8 characters";
    }
  
    if(!input.phone_number) {
      error.phone_number = "Phone number is required"
    } else if (input.phone_number.length > 10) {
      error.phone_number = "Invalid phone number"
    }
  
  
  
  
    if (!input.first_name) {
      error.first_name = "Name is required";
    } else if (hasSpecialChars(input.first_name)) {
      error.first_name = "Name may not contain special characters";
    }
  
    if (!input.last_name) {
      error.last_name = "Last name is required";
    } else if (hasSpecialChars(input.first_name)) {
      error.last_name = "Last name may not contain special characters";
    }
  
    if(!input.city) {
      error.city = "City is required"
    } else if(hasSpecialChars(input.city)) {
      error.city = "City may not contain special characters"
    }
  
    if (hasSpecialChars(input.address)) {
      error.address = "Address may not contain special characters";
    }
    return error;
  }