const mongoose=require('mongoose');

const productSchema=mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  description:{
    type:String,
    trim:true
  },
  price:{
    type:Number,
    default:0
  },
  image:{
      public_id:String,
      secure_url:String
  }
  
},{
  timestamps:true
});

const Product=mongoose.model('Product', productSchema);

module.exports=Product;