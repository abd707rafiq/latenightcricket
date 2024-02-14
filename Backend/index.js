const express=require('express')
const app=express();

const mongoose=require('mongoose');

const authRouter =require("./routes/Auth") 
const addGround=require("./routes/Ground")




mongoose.connect("")
.then(()=>{
    console.log("server is connected to database")
    
}).catch((error)=>{
    console.log(error);

})



app.use(express.json());


app.use('/',authRouter);
app.use('/',addGround);



app.listen(3000,()=>{
    console.log('server is running on port 3000')
})