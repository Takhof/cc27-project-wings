const jwt = require("jsonwebtoken");
const ms = require("ms");

const SECRET_KEY = process.env.SECRET_KEY || "X(@!IO09xcX";

/**
 * Create JsonWebToken.
 *
 * @param {number} userId User id
 * @param {string} email Email address
 * @returns JsonWebToken string
 */
const createToken = (userId, email) => {
  const payload = { userId, email };
  const options = {
    expiresIn: "30m",
  };
  const token = jwt.sign(payload, SECRET_KEY, options);
  return token;
};

/**
 * Verify JsonWebToken.
 *
 * @param {string} JsonWebToken
 * @return Decoded payload
 */
const verifyToken = (token) => {
  try {
    const decodedPayload = jwt.verify(token, SECRET_KEY);
    return decodedPayload;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

/**
 * Get cookie options.
 *
 * @returns Cookie option
 */
const getCookieOptions = () => {
  return {
    httpOnly: true,
    expiresIn: new Date(Date.now() + ms("1d")),
  };
};

module.exports = {
  createToken,
  verifyToken,
  getCookieOptions,
};
