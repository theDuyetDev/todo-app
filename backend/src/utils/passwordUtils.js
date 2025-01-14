import bcrypt from "bcryptjs";

/**
 * - Hash user password
 *
 * @param {*} password - The plain password to be hashed
 * @returns {Promise<string>} - A promise that resolves to the hash password
 * @throws {Error} - If there is any an error while hashing the password
 */
const hashPassword = async (password) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing the password");
  }
};

/**
 * - Compare user password with stored password
 *
 * @param {*} password - The plain password to be compared
 * @param {*} hashedPassword - The hashed password to be compared
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating if the password is matched
 * @throws {Error} - If there is an error while comparing the password
 */
const comparePassword = async (password, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error("Error comparing the passwords");
  }
};

export { hashPassword, comparePassword };
