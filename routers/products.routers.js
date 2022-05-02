const {Router}=require('express');
const fileUpload=require('express-fileupload');
const {getProducts,createProducts,getProduct,deleteProducts,updateProducts}=require('../controllers/products.controller.js');
const router=Router();

router.get('/productos',getProducts);

router.post('/productos',fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads/'
}),createProducts);

router.get('/productos/:id',getProduct);

router.put('/productos/:id',updateProducts);

router.delete('/productos/:id',deleteProducts);

module.exports=router;