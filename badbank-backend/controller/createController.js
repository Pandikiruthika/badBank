const signin=require("../model/createScheme")
 const bycrpt=require("bcrypt");
const saltRound=10

////////create a new account

exports.register=async(req,res)=>{
    try {
        bycrpt.hash(req.body.data.password,saltRound,(err,hash)=>{
            const signIn=  signin.create({
             customer_id:req.body.data.customer_id,
               name:req.body.data.name,
              email:req.body.data.email,
              password:hash,
              pin:req.body.pin,
              balance:0,
            
              })
            .then(
            (result)=>{
               res.send("create sucessfully") })
        .catch(
            (err)=>{
            res.send(err)})
    })
    }
        catch (error) {
        res.status(600).send("internet error")
    }
}






// Get a the data from da/tabase


exports.getAll=async(req,res)=>{
    
    try {
        
const signIn= signin.find({})
.then((data)=>{
    res.send(data)
})
.catch((err)=>{
    res.send(err)
})



 } catch (error) {
      res.status(505).send(error) 
    }
   
}





