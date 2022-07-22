const { request, response } = require("express");

const createUser = (req = request, res = response) => {};
const loginUser = (req = request, res = response) => {};
const reNewToken = (req = request, res = response) => {};

module.exports = {
  createUser,
  loginUser,
  reNewToken,
};
