
const mongoose= require("mongoose");
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true})
.then(
    ()=>console.log("mongoDb is connected")
)
.catch(
    (err)=>console.log(err)
)