const {app,PORT}=require('./app.js');
const conexionDB = require("./utils/conexion");

console.log(PORT);

async function main(){
  await conexionDB();
    app.listen(PORT,()=>{
    console.log(`conectado desde el puerto ${PORT}`)
  });

}

main();





