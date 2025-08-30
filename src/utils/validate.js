import validator from "validator";

export function validate(Signup,username, email, pass) {
  if (Signup) {
    if (username.length < 3) return "Name require atleast 3 characters";
    if (!validator.isEmail(email)) return "Email is not valid";
    if (pass.length < 8) return "Password requires 8 characters";

    return null;
  } else {
    if (!validator.isEmail(email)) return "Email is not valid";
    if (pass.length < 8) return "Password should be of atleast 8 characters";

    return null;
  }
}

