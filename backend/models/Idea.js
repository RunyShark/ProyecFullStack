const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Idea",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      image: {
        type: DataTypes.STRING,
      },
      creationDate: {
        type: DataTypes.DATE,
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false }
  );
};
