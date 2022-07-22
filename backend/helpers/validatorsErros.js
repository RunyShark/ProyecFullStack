const { request, response } = require("express");
const { User, Idea } = require("../db/mysql");

const existeEmail = async (email = "") => {
  const existe = await User.findOne({
    where: {
      email,
    },
  });
  if (existe) {
    throw new Error(`El correo: ${email} ya existe, intente con otro correo`);
  }
};
const userExiste = async (email = "") => {
  const existe = await User.findOne({
    where: {
      email,
    },
  });
  if (!existe) {
    throw new Error(`El usuario con el  correo: ${email} ya no existe`);
  }
};

module.exports = {
  existeEmail,
  userExiste,
};
