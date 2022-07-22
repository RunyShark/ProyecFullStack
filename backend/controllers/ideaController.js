const { request, response } = require("express");

const createIdea = (req = request, res = response) => {
  res.send("Hola muendo soy get");
};
const updateIdea = (req = request, res = response) => {
  res.send("Hola muendo soy put");
};
const deleteIdea = (req = request, res = response) => {
  res.send("Hola muendo soy delete");
};
const postIdea = (req = request, res = response) => {
  res.send("Hola muendo soy post");
};

module.exports = {
  createIdea,
  updateIdea,
  deleteIdea,
  postIdea,
};
