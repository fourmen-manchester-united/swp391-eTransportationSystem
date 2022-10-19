export function validateLogin(values) {
  let errors = {};
  if (!values.username) {
    errors.username = "Username is required";
  }
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
}
export function validateRegister(values) {
  let errors = {};
  // if (!values.email) {
  //   errors.email = "Email address is required";
  // } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  //   errors.email = "Email address is invalid";
  // }
  if (!values.username) {
    errors.username = "Username is required";
  } else if (values.username.length < 5) {
    errors.username = "Username must be 5 or more characters";
  }
  if (!values.name) {
    errors.name = "Username is required";
  } else if (values.name.length < 5) {
    errors.name = "Username must be 5 or more characters";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  } else if (
    !/\d/.test(values.password) ||
    !/[!@#$%&?.]/g.test(values.password) ||
    !/[A-Z]/g.test(values.password)
  ) {
    errors.password =
      "Password must contains at least 1 number, at least 1 capital character, 1 special character";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password and Confirm Password do not match";
  }
  return errors;
}
export function validateForgotPassword(values) {
  let errors = {};
  if (!values.forgotPassword) {
    errors.forgotPassword = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.forgotPassword)) {
    errors.forgotPassword = "Email address is invalid";
  }
  return errors;
}
export function validateResetPassword(values) {
  let errors = {};
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  } else if (
    !/\d/.test(values.password) ||
    !/[!@#$%&?.]/g.test(values.password) ||
    !/[A-Z]/g.test(values.password)
  ) {
    errors.password =
      "Password must contains at least 1 number, at least 1 capital character, 1 special character";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password and Confirm Password does not match.";
  }
  return errors;
}

export function validateChangePassword(values) {
  let errors = {};
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 or more characters";
  } else if (
    !/\d/.test(values.password) ||
    !/[!@#$%&?.]/g.test(values.password) ||
    !/[A-Z]/g.test(values.password)
  ) {
    errors.password =
      "Password must contains at least 1 number, at least 1 capital character, 1 special character";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Confirm password is required";
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Password and Confirm Password does not match.";
  }
  return errors;
}

export function validateMyAccount(values) {
  let errors = {};
  if (!values.firstName) {
    errors.firstName = "firstName address is required";
  }
  if (!values.lastName) {
    errors.lastName = "lastName address is required";
  }
  return errors;
}
export function validateAddCar(values) {
  let errors = {};
  if (!values.licensePlates) {
    errors.licensePlates = "licensePlates is required";
  }
  if (!values.description) {
    errors.description = "description is required";
  }
  return errors;
}
