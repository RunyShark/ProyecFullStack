const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Idea",
    {
      image: {
        type: DataTypes.STRING,
      },
      creationDate: {
        type: DataTypes.DATE,
        require: true,
      },
      title: {
        type: DataTypes.STRING,
        require: true,
      },
      description: {
        type: DataTypes.TEXT,
        return: true,
      },
    },
    { timestamps: false }
  );
};
