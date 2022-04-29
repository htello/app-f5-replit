const {Router}=require('express');
const {getProducts,createProducts,getProduct,deleteProducts,updateProducts}=require('../controllers/products.controller.js');
const router=Router();

router.get('/productos',getProducts);

router.post('/productos',createProducts);

router.get('/productos/:id',getProduct);

router.put('/productos/:id',updateProducts);

router.delete('/productos/:id',deleteProducts);

module.exports=router;