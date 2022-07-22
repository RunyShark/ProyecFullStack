const { Router } = require("express");
const { checkAuth, validarErros } = require("../middlewares");
const { check } = require("express-validator");
const {
  createIdea,
  updateIdea,
  deleteIdea,
  postIdea,
} = require("../controllers");
const route = Router();

route.get("/", [checkAuth], createIdea);

route.put(
  "/:id",
  [
    checkAuth,
    check("id", "El id es un campo obligatorio para poder editar")
      .not()
      .isEmpty(), //verificar que exista el id
    check("id").custom(),
  ],
  updateIdea
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
  deleteIdea
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
  postIdea
);

module.exports = {
  idea: route,
};
