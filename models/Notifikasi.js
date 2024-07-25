const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const LetterStatusNotification = sequelize.define("LetterStatusNotification", {
  notificationID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  letterID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  recipientID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  notificationDate: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = LetterStatusNotification;
