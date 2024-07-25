const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const InformationManagement = sequelize.define("InformationManagement", {
  informationID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  informationName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ownerName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  classification: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  storageLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = InformationManagement;
