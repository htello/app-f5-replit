const fs=require('fs-extra')
const Product=require('../models/product.model');
const {uploadImage,deleteImage}=require('../utils/cloudinary');

uploadImage()

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
    
    console.log(req.files)
    
    const product=new Product({
      name,
      description,
      price
    })

    if(req.files?.image){
     const result=await uploadImage(req.files.image.tempFilePath)
      console.log(result);
      product.image={
       public_id:result.public_id,
       secure_url:result.secure_url
      }

     if(product.image?.public_id){
       await fs.unlink(req.files.image.tempFilePath);
     }
      
    }

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
    const { id } = req.params;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedProduct)
      return res.status(404).json({ message: "Product Not Found" });
    return res.json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


//alimina un producto
const deleteProducts=async (req,res)=>{
 try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) return res.status(404).json({message: 'Product does not exists'})

    await deleteImage(deletedProduct.image.public_id)
    
    return res.json(deletedProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
  
module.exports={
  getProducts,
  createProducts,
  getProduct,
  updateProducts,
  deleteProducts
}