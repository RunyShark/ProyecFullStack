const { Router } = require("express");
const { check } = require("express-validator");
const { checkAuth, validarErros } = require("../middlewares");
const { createUser, loginUser, reNewToken } = require("../controllers");

const route = Router();

module.exports = {
  auth: route,
};
