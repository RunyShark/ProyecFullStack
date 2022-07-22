const { request, response } = require("express");
const { Idea } = require("../db/mysql");

const getIdea = async (req = request, res = response) => {
  try {
    const ideas = await Idea.findAll();
    res.json({
      Error: false,
      msg: "getIdea",
      results: ideas,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      Error: true,
      path: "Algo salio mal  Error:  createIdea",
      msg: error.message,
    });
  }
};

const updateIdea = (req = request, res = response) => {
  try {
    res.send("Hola muendo soyupdateIdea");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      Error: true,
      path: "Algo salio mal  Error: updateIdea",
      msg: error.message,
    });
  }
};
const deleteIdea = (req = request, res = response) => {
  try {
    res.send("Hola muendo soy deleteIdea");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      Error: true,
      path: "Algo salio mal  Error: deleteIdea",
      msg: error.message,
    });
  }
};
const postIdea = async (req = request, res = response) => {
  try {
    const idea = await new Idea(req.body);
    idea.save();

    const { title, creationDate, description } = idea;

    res.status(201).json({
      Error: false,
      msg: "createIdea",
      newOIdea: {
        title,
        creationDate,
        description,
      },
    });
  } catch (error) {
    console.log(error.message);

    res.status(500).json({
      Error: true,
      path: "Algo salio mal  Error: postIdea",
      msg: error.message,
    });
  }
};

module.exports = {
  getIdea,
  updateIdea,
  deleteIdea,
  postIdea,
};
