import Task from "../models/task.js"


export const getTask = async (req , res) =>{
    try{
        const tasks = await Task.find();
        res.json({success : true, tasks } )
    }catch(error){
        res.json({success: false , message : error.message})
    }
};

export const addTask  = async (req , res)=>{

   try{
     const { title } = req.body;
    const newTask = new Task({title , completed : false});
    await newTask.save()
res.status(201).json({ success: true, newTask });

   }
   catch(error){
        res.json({success: false , message : error.message})
    }

}

export const deleteTask = async (req , res)=>{
    try{
        const {id} = req.params;
        const deleteTask = await Task.findByIdAndDelete(id);

        if(!deleteTask) {
                  return res.status(404).json({ message: "Task not found" });

        }
   res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}