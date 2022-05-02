const mongoose = require("mongoose");
const {MONGODB_URI} = require('../config');

const conexionDB=async()=> {
  try {
    console.log(MONGODB_URI)
    await mongoose.connect(MONGODB_URI);
    console.log("Conectado a la bbdd");
  } catch (error) {
    console.error(error);
  }
}

module.exports = conexionDB;

