import bcrypt from "bcrypt";

export const hashedPassword = async (pass) => {
  return await bcrypt.hash(pass, 12);
};

export const checkPassword = async (enteredPassword, hashedPassword) => {
  return await bcrypt.compare(enteredPassword, hashedPassword);
};
