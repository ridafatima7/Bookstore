const user_model=require('../model/user')
const bcryptjs=require("bcryptjs");
const signup=async(req,res)=>{
 try{
   const {fullname,email,password}=req.body;
   const user= await user_model.findOne({email});
   if(user){
    return res.status(400).json({message:"user already exists"})
   }
   const hashPassword=await bcryptjs.hash(password,10)
   const createdUser=new user_model({
    fullname:fullname,
    email:email,
    password: hashPassword
   })
   await createdUser.save();
   res.status(200).json({ message: "User created successfully" });
 }
 catch(error){
  console.log("error",error);
  res.status(500).json({message:"internal server error"});
 }
}
const login=async(req,res)=>{
    try{
       const {email,password}=req.body;
       const user=await user_model.findOne({email})
       const isMatch=await bcryptjs.compare(password,user.password);
       if(!user || !isMatch){
        return res.status(400).json({message:"Invalid Credientials"});
       }
       else{
        res.status(200).json({message:"Login Successfull",user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
        }})
       }
    }
    catch(error){
        console.log("error is",error);
        res.status(500).json({message:"internal server error"});
    }
}
module.exports={
    signup,login
}