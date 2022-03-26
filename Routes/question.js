import express from "express";
import { deleteAllquestion, deleteOnequestion, editquestion, getAllquestion, getquestionById, postquestion } from "../functionquestion.js";
const router=express.Router();





// getting questions data from mongoDB database
router.get("/:id",async function(request,response){
    console.log(request.params);
    const {id}= request.params;
    const questions=await getquestionById(id)
  questions ? response.send(questions) : response.status(404).send({message:"question not found"})
});

// Find questions data in mongoDB
router.get("/",async function(request,response){
    const find=await getAllquestion()
    response.send(find)
});

// Delete all questions in mongoDB 
router.delete("/delete",async function(request,response){
    const del=await deleteAllquestion()
    response.send(del)
});

// Delete one questions in mongoDB 
router.delete("/:id",async function(request,response){
    console.log(request.params);
    const {id}= request.params;
    const delone=await deleteOnequestion(id)
   response.send(delone) 
});

//  Edit student details in mongoDB 
router.put("/:id",async function(request,response){
    console.log(request.params);
    const {id}= request.params;
    const updateData=request.body;
    const edit=await editquestion(id, updateData)
   response.send(edit) 
});


// Posting data in mongoDB database
router.post("/",async function(request,response){
    const data=request.body;
    console.log(data);
const result= await postquestion(data);
response.send(result);
    response.send(questions)
})
export const questionsRouter=router;