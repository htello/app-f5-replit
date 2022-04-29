const mongoose = require("mongoose");
const MONGODB_URI = process.env["MONGODB_URI"];

async function conexionDB() {
  try {
    console.log(MONGODB_URI)
    await mongoose.connect(MONGODB_URI);
    console.log("Conectado a la bbdd");
  } catch (error) {
    console.error(error);
  }
}

module.exports = conexionDB;

