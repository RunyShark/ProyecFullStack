const { request, response } = require("express");
const { hassPassword } = require("../helpers");
const { User } = require("../db/mysql");

const createUser = async (req = request, res = response) => {
  const { name, email, password } = req.body;

  try {
    res.send("Hola muendo soy createUser");
  } catch (error) {
    console.log(error);
    res.status(500).json(
      `Algo salio mal  Error: ${{
        Error: true,
        path: "createUser",
        msg: error.message,
      }}`
    );
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
