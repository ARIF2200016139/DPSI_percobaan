const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const SKTM = sequelize.define(
  "SKTM",
  {
    sktmID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nik: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggalPengajuan: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending', // default status when a new SKTM is created
    },
  },
  {
    timestamps: false,
  }
);

module.exports = SKTM;
