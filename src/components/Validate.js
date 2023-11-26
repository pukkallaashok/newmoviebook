const Validate = (email, password) => {
  const isEmail = /^([\w]*[\w\.]*(?!\.)@gmail.com)/.test(email);
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isEmail) return "Invalid Email";
  if (!isPassword) return "Invalid Password";
  return null;
};

export default Validate;
