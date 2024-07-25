const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const SKTMApplication = sequelize.define("SKTMApplication", {
  applicationID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  applicantLastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  applicantFirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  applicantPhoto: {
    type: DataTypes.STRING,
  },
  applicationNotes: {
    type: DataTypes.TEXT,
  },
  reason: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  submissionDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "Pending",
  },
});

module.exports = SKTMApplication;
