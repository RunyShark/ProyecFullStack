const { Router } = require("express");
const { check } = require("express-validator");
const { checkAuth, validarErros } = require("../middlewares");
const { createUser, loginUser, reNewToken } = require("../controllers");

const route = Router();

route.post(
  "/register",
  [
    check("name", "Nombre es un campo obligatorio").not().isEmpty(),
    check("name", "El nombre debe de tener mas de 3 letras").isLength({
      min: 3,
    }),
    check("name", "El nombre debe de ser un string").isString(),
    check("email", "El email es un campo obligatorio").not().isEmpty(),
    check("email", "Debe de ser un corre valido").isEmail(),
    //comprobar que no este registrado
    check("email").custom(),
    check("password", "La contraseña es un campo obligatorio").not().isEmpty(),
    check(
      "password",
      "La contraseña debe de de tener un largo mayor a 6 y menor a 15"
    ).isLength({ min: 6, max: 15 }),
    validarErros,
  ],
  createUser
);
route.post(
  "/login",
  [
    //comporbar si existe
    check("email").custom(),
    check("name", "Nombre es un campo obligatorio").not().isEmpty(),
    check("name", "El nombre debe de tener mas de 3 letras").isLength({
      min: 3,
    }),
    check("name", "El nombre debe de ser un string").isString(),
    check("email", "El email es un campo obligatorio").not().isEmpty(),
    check("email", "Debe de ser un corre valido").isEmail(),
    //coincidan las contraseñas
    check("password").custom(),
    check("password", "La contraseña es un campo obligatorio").not().isEmpty(),
    check(
      "password",
      "La contraseña debe de de tener un largo mayor a 6 y menor a 15"
    ).isLength({ min: 6, max: 15 }),
    validarErros,
  ],
  loginUser
);
route.get("/token", [checkAuth], reNewToken);

module.exports = {
  auth: route,
};
