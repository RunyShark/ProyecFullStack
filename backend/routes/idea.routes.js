const { Router } = require("express");
const { check } = require("express-validator");
const {
  deletePrueva,
  getPrueva,
  postPrueva,
  putPrueva,
} = require("../controllers");
const route = Router();

route.get("/", getPrueva);
route.put("/:id", postPrueva);
route.delete("/:id", deletePrueva);
route.post("/", putPrueva);

module.exports = {
  idea: route,
};
