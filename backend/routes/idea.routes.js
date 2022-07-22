const { Router } = require("express");
const { checkAuth, validarErros } = require("../middlewares");
const { check } = require("express-validator");
const {
  deletePrueva,
  getPrueva,
  postPrueva,
  putPrueva,
} = require("../controllers");
const route = Router();

route.get("/", [checkAuth], getPrueva);

route.put(
  "/:id",
  [
    checkAuth,
    check("id", "El id es un campo obligatorio para poder editar")
      .not()
      .isEmpty(), //verificar que exista el id
    check("id").custom(),
  ],
  postPrueva
);

route.delete(
  "/:id",
  [
    checkAuth,
    check("id", "El id es un campo obligatorio para poder editar")
      .not()
      .isEmpty(),
    //verificar que exista el id
    check("id").custom(),
  ],
  deletePrueva
);

route.post(
  "/",
  [
    checkAuth,
    check("creationDate", "La fecha es un campo obligatorio").not().isEmpty(),
    check("title", "Es un campo obligaroio el title").not().isEmpty(),
    check("title", "el titulo debe de tener un largo mayor a 3").isLength({
      min: 3,
    }),
    check("description", "Es un campo obligaroio").not().isEmpty(),
    check(
      "description",
      "La descipcion debe de tener un largo mayor a 10"
    ).isLength({ min: 10 }),
  ],
  putPrueva
);

module.exports = {
  idea: route,
};
