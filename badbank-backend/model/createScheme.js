const mongoose =require("mongoose");
const createSchema =new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    balance:{
        type:Number,
        require:true
    },
    customer_id:{
        type:Number,
        require:true
    },
    
    
   

})
module.exports=mongoose.model("create",createSchema)