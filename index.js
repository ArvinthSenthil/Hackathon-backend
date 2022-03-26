import express from "express"
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
import cors from 'cors';
import {questionsRouter} from "./Routes/question.js";
import {usersRouter} from "./Routes/users.js";
import {companyRouter} from "./Routes/company.js";



dotenv.config();
const app=express();
const PORT=process.env.PORT;
app.use(express.json());//inbuilt middleware
app.use(cors())// 3rd party middleware
const MONGO_URL=(process.env.MONGO_URL);
async function Createconnection(){
    const client= new MongoClient(MONGO_URL); //connects with URL
   await client.connect();
   console.log("mongo is connected")
    return client
}
export const client=await Createconnection();

app.get("/",function(request,response){
    response.send("Hello")
})
app.use('/questions',questionsRouter)
app.use('/users',usersRouter)
app.use('/company',companyRouter)
app.listen(PORT,()=>console.log(`server started in ${PORT}`));

