const { verifyToken } = require("./jwtHelper");

const extractPayload = (req, res) => {
  try {
    if (!req.cookies.jwtToken) {
      throw new Error();
    }

    const token = req.cookies.jwtToken;
    const decodedToken = verifyToken(token);
    return res.status(200).send(decodedToken);
  } catch (error) {
    console.log(error);
    return res.status(500).send();
  }
};

module.exports = {
  extractPayload,
};
