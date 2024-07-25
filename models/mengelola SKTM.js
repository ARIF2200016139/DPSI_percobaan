const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const SKTM = sequelize.define("SKTM", {
  sktmID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  applicantName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  applicantPhone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  applicantAddress: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  issuedDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = SKTM;
