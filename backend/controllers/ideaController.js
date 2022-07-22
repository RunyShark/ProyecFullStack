const { request, response } = require("express");

const createIdea = (req = request, res = response) => {
  try {
    res.send("Hola muendo soy createIdea");
  } catch (error) {
    console.log(error);
    res.status(500).json(
      `Algo salio mal  Error: ${{
        Error: true,
        path: "createIdea",
        msg: error.message,
      }}`
    );
  }
};

const updateIdea = (req = request, res = response) => {
  try {
    res.send("Hola muendo soyupdateIdea");
  } catch (error) {
    console.log(error);
    res.status(500).json(
      `Algo salio mal  Error: ${{
        Error: true,
        path: "updateIdea",
        msg: error.message,
      }}`
    );
  }
};
const deleteIdea = (req = request, res = response) => {
  try {
    res.send("Hola muendo soy deleteIdea");
  } catch (error) {
    console.log(error);
    res.status(500).json(
      `Algo salio mal  Error: ${{
        Error: true,
        path: "deleteIdea",
        msg: error.message,
      }}`
    );
  }
};
const postIdea = (req = request, res = response) => {
  try {
    res.send("Hola muendo soy postIdea");
  } catch (error) {
    console.log(error);
    res.status(500).json(
      `Algo salio mal  Error: ${{
        Error: true,
        path: "postIdea",
        msg: error.message,
      }}`
    );
  }
};

module.exports = {
  createIdea,
  updateIdea,
  deleteIdea,
  postIdea,
};
