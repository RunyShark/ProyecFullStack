const hashPassword = require("./hasPassword");
const generadorJWT = require("./generadorJWT");

module.exports = {
  ...hashPassword,
  generadorJWT,
};
