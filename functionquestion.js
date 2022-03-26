import { client } from "./index.js";
import { ObjectId } from "mongodb";

export async function getquestionById(id) {
    return await client.db("hackathon").collection("question").findOne({ _id:ObjectId(id )});
}

export async function postquestion(data) {
    return await client.db("hackathon").collection("question").insertMany(data);
}

export async function editquestion(id, updatedata) {
    return await client.db("hackathon").collection("question").updateOne({ _id:ObjectId(id )}, { $set: updatedata });
}

export async function deleteOnequestion(id) {
    return await client.db("hackathon").collection("question").deleteOne({ _id:ObjectId(id )});
}

export async function deleteAllquestion() {
    return await client.db("hackathon").collection("question").deleteMany({});
}

export async function getAllquestion() {
    return await client.db("hackathon").collection("question").find({}).toArray();
}
export async function createUser(data) {
    return await client.db("hackathon").collection("users").insertOne(data);
}
export async function getUserbyname(username) {
    return await client.db("hackathon").collection("users").findOne({username:username});
}

export async function getcompanies() {
    return await client.db("hackathon").collection("company").find({}).toArray();
}
export async function postcompany(data) {
    return await client.db("hackathon").collection("company").insertMany(data);
}
export async function getusers() {
    return await client.db("hackathon").collection("users").findOne({username:username});
}

