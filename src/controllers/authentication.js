const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      res.status(400).send("all fields are required");
    }
    const verifyEmail = await userModel.findOne({ email });
    if (verifyEmail) {
      res.status(400).send("email already exisit");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      password: hashPassword,
    });
    if (user) {
      res.status(200).json({ user });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).send("email and password required");
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(400).send("email or password incorrect");
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      res.status(400).send("email or password incorrect");
    }

    const token = jwt.sign(
      {
        user: {
          id: user.id,
          email,
          isAdmin: user.isAdmin,
        },
      },
      process.env.SECRET_KEY,
      { expiresIn: "1day" }
    );

    res.header("x-auth-token", token).send("token created successfully"); //it will store the token on header in seperate name
    // res.status(200).json(token);
    console.log(`user id ${user.id}`);
  } catch (err) {
    res.status(500).send(err);
  }
};

const currentUser = async (req, res, next) => {
  const user = await userModel.findById(req.user._id).select("-password");
  res.send(user);
};

module.exports = { register, login, currentUser };
