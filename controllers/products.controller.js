const Product=require('../models/product.model')


//recoge todos los productos
const getProducts= async (req,res)=>{
  try{
     const products=await Product.find();
    return res.json(products);
  }catch(error){
    return res.status(500).json({ message: error.message });
  }
}


//crear un producto
const createProducts=async (req,res)=>{

  try{
    const{name,description,price}= req.body

    const product=new Product({
      name,
      description,
      price
    })

    await product.save();
  
    return res.json(product);
    
  }catch(error){
     return res.status(500).json({ message: error.message });
  }
 
};

//recoge un producto
const getProduct=async (req,res)=>{
  try{
      const product= await Product.findById(req.params.id);
  
    if(!product)return res.status(404).json({ message:'el procucto no existe'});
  
    return res.json(product);
  }catch(error){
     return res.status(500).json({ message: error.message });
  }

};

//actualiza un producto
const updateProducts=async (req,res)=>{
  try{
    const {id}=req.params;
    
   const productUpdated=await Product.findByIdAndUpdate(id,req.body,{
     new:true
   });
  
   return res.json(productUpdated);
    
  }catch(error){
    return res.status(500).json({message:error.message});
  }
  
};


//alimina un producto
const deleteProducts=async (req,res)=>{
  try{
    const product= await Product.findByIdAndDelete(req.params.id);

     if(!product)return res.status(404).json({ message:'el procucto no existe'});
  
    return res.json(product);
  }catch(error){
    return res.status(500).json({message:error.message});
  }

};



module.exports={
  getProducts,
  createProducts,
  getProduct,
  updateProducts,
  deleteProducts
}