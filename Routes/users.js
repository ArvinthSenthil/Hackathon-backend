import express from "express";
import { response } from "express";
import { createUser,getUserbyname,getusers } from "../functionquestion.js";
const router=express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

async function genpassword(password){
    const salt=await bcrypt.genSalt(10);
    const hashpassword=await bcrypt.hash(password,salt);
    console.log({salt,hashpassword})
    return hashpassword;
}

// Posting data in mongoDB database
router.post("/signup",async function(request,response){
    const {username,password}=request.body;
    const hashpassword= await genpassword(password);
    const newuser={
        username:username,
        password:hashpassword,
    }
  
router.get("/",async function(request,response){
    const find=await getusers(username)
    response.send(find)
});  
    
    
const result= await createUser(newuser);
response.send(result);
})

router.post("/login",async function(request,response){
    const {username,password}=request.body;
    const userfromDB=await getUserbyname(username);
    console.log(userfromDB);
    if (!userfromDB){
        response.status(401).send({message:"invalid credentials"})
    }
    else{
        const storedPassword=userfromDB.password;
        const ispasswordmatch=await bcrypt.compare(password,storedPassword);
        console.log("ispasswordmatch",ispasswordmatch);
        if (ispasswordmatch){
            const token=jwt.sign({id:userfromDB._id},process.env.SECRET_KEY);
            response.send({message:"successfull login",token:token})}
            else{
                response.status(401).send({message:"invalid credentials"})
            }
        }
    
})
export const usersRouter=router;