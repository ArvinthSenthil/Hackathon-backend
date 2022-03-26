import express from "express";
import { getcompanies,postcompany} from "../functionquestion.js";
const router=express.Router();


router.get("/",async function(request,response){
    const find=await getcompanies()
    response.send(find)
});

router.post("/",async function(request,response){
    const data=request.body;
    console.log(data);
const result= await postcompany(data);
response.send(result);
    response.send(companies)
})
export const companyRouter=router;