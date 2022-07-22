const { request, response } = require("express");
const {} = require("../helpers");

const createUser = (req = request, res = response) => {
  const { name, email, password } = req.body;
};
const loginUser = (req = request, res = response) => {};
const reNewToken = (req = request, res = response) => {};

module.exports = {
  createUser,
  loginUser,
  reNewToken,
};
