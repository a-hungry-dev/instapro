const Validator = require("validator");
const isEmpty = require("./isEmpty");

module.exports = function validateRegistration(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password_confirm = !isEmpty(data.password_confirm)
    ? data.password_confirm
    : "";

  // console.log(data);
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "NAme must be beween 2 and 20 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field required...";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Please enter a valid email...";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field required...";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field required...";
  }

  if (Validator.isEmpty(data.password)) {
    errors.email = "PAssword field required...";
  }

  if (Validator.isEmpty(data.password_confirm)) {
    errors.password_confirm = "Please confirm password";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6-30 characters";
  }

  if (!Validator.equals(data.password, data.password_confirm)) {
    errors.password_confirm = "Passwords don't match";
  }

  // data.name.;
  //   data.email;
  //   data.username;
  //   data.password;
  //   data.image;
  //NEED TO DO IMAGES TOO
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
