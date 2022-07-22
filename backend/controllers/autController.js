const { request, response } = require("express");
const { hassPassword } = require("../helpers");
const { User } = require("../db/mysql");

const createUser = async (req = request, res = response) => {
  console.log();
  const { password } = req.body;
  try {
    const user = new User(req.body);
    user.password = await hassPassword(password);
    user.save();

    res.status(201).json({ Erro: false, msg: "CreateUser", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      Error: true,
      path: "Algo salio mal  Error: createUser",
      msg: error.message,
    });
  }
};
const loginUser = async (req = request, res = response) => {
  try {
    res.send("Hola muendo soy loginUser");
  } catch (error) {
    console.log(error);
    res.status(500).json(
      `Algo salio mal  Error: ${{
        Error: true,
        path: "loginUser",
        msg: error.message,
      }}`
    );
  }
};
const reNewToken = async (req = request, res = response) => {
  try {
    res.send("Hola muendo soy reNewToken");
  } catch (error) {
    console.log(error);
    res.status(500).json(
      `Algo salio mal  Error: ${{
        Error: true,
        path: "reNewToken",
        msg: error.message,
      }}`
    );
  }
};

module.exports = {
  createUser,
  loginUser,
  reNewToken,
};
