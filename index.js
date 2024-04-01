import mongoose from "mongoose"
import app from "./app.js"

(async()=>{
 try{
  await mongoose.connect("mongodb://localhost:27017");
  console.log("MongoDb Connected");
  const onListening= ()=>{
   console.log("Listening on Port 3000") 
  }
  app.listen(5000,onListening);
 }catch(error){
    console.error("error:",error)
 }   
})()