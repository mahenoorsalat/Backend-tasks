import { useState , useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [tasks , setTask] = useState([])
  const [input , setInput] = useState("")
const handleAdd = async (e) => {
  e.preventDefault(); 
  if(!input) return;   
  const { data } = await axios.post('http://localhost:5000/api/tasks', { title: input });
  setTask(prev => [...prev, data.newTask]);
  setInput("");
}


  const handleDelete = async (id) =>{
   
  const { data } = await axios.delete(`http://localhost:5000/api/tasks/${id}`);
  setTask(prev=> prev.filter(task => task._id != id));
  console.log(data)

  }

  const handleComplete = async (id) =>{
    setTask(prev=> prev.map(task => 
      task._id === id ? {...task , completed:true}:task
    ))}
  useEffect(() => {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    setTask(JSON.parse(storedTasks));
  }
}, []);


    useEffect(() => {
    localStorage.setItem("tasks" , JSON.stringify(tasks))
    }, [tasks])
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-md w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

      <form onSubmit={handleAdd} className="flex mb-4">
  <input
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    type="text"
    placeholder="Add a new task..."
    className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
  />
  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
    Add
  </button>
</form>


        {/* Task list */}
      
      

         <ul className="space-y-2">
  {tasks.map(task => (
    <li key={task._id} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md">
      <span>{task.title}</span>
   <div className="flex items-center space-x-2">
  {!task.completed && (
    <button onClick={() => handleComplete(task._id)} className="text-green-500 hover:text-green-700">
      ✔
    </button>
  )}
  {task.completed && <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">Completed</span>}
  <button onClick={() => handleDelete(task._id)} className="text-red-500 hover:text-red-700">✖</button>
</div>

    </li>
  ))}
</ul>

       
      </div>
    </div>
  );
}

export default App;
