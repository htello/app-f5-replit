const express=require('express');
const morgan=require('morgan');
const cors=require('cors');



const indexRouters =require('./routers/index.routers.js');
const productosRouters =require('./routers/products.routers.js');

const app=express();
const PORT = process.env['PORT']

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());



app.use(indexRouters)
app.use(productosRouters)



module.exports={
  app,
  PORT,
};