const bcrypt = require("bcrypt");
const User = require("../models/user");

// User Register
const register = async (req, res) => {
  // collect request data
  let params = req.body;

  // check that the data arrives correctly
  if (!params.name || !params.nick || !params.email || !params.password) {
    return res.status(400).json({
      status: "error",
      message: "No data to be submitted",
    });
  }

  // duplicate user control
  try {
    let users = await User.find({
      $or: [
        { email: params.email.toLowerCase() },
        { nick: params.nick.toLowerCase() },
      ],
    });

    if (users && users.length >= 1) {
      return res.status(200).send({
        status: "success",
        message: "User already exists",
      });
    }

    // encrypt the password
    let pwd = await bcrypt.hash(params.password, 10);
    params.password = pwd;

    // Create user object (from validation)
    let userToSave = new User(params);

    // Save user on database
    let userStored = await userToSave.save();

    // return the result
    return res.status(200).json({
      status: "success",
      message: "User register successfully!!",
      userToSave,
    });
  } catch (error) {
    return res
      .status(500)
      .send({ status: "error", message: "Error to save user" });
  }
};

module.exports = {
  register,
};
