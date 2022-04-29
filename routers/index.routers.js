const {Router} = require('express');
const router=Router();

router.get('/',(req,res)=>res.send('Home desde router'));

router.get('/servicios',(req,res)=>res.send('Servicios desde router'));


module.exports=router;

