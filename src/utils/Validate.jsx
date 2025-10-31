export const Validate = (username, email, password) => {
  if (username.trim().length > 0) {
    const isUsernameValid = /^[a-zA-Z\s]{2,20}$/.test(username);

    if (!isUsernameValid) return "Username is not Valid";
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
