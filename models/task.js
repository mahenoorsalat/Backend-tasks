import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title : {type : String , required : true},
    completed : { type : Boolean , required : true},
    createdAt : {type: Date  , default : Date.now}
})

const Task = mongoose.models.Task || mongoose.model("Task" , taskSchema)
export default Task;