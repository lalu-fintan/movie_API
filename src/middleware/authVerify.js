const jwt = require("jsonwebtoken");

const authVerify = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    res.status(401).send("no token provided");
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    console.log(decoded.user.email);
    next();
  } catch (err) {
    res.status(400).send("Invild Token");
  }
};

module.exports = authVerify;
