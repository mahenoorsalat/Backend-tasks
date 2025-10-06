import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [tasks , setTask] = useState([])
  const [input , setInput] = useState("")
  const handleAdd = async() =>{
const { data } = await axios.post('http://localhost:5000/api/tasks', { title: input });
setTask (prev => [...prev , data.newTask]);
setInput("");
   console.log(data)
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-md w-full max-w-md p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>

        {/* Input section */}
        <div className="flex mb-4">
          <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
            type="text"
            placeholder="Add a new task..."
            className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600">
            Add
          </button>
        </div>

        {/* Task list */}
        <ul className="space-y-2">
          <li className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md">
            <span>Sample Task 1</span>
            <div className="flex items-center space-x-2">
              <button className="text-green-500 hover:text-green-700">✔</button>
              <button className="text-red-500 hover:text-red-700">✖</button>
            </div>
          </li>
          <li className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md">
            <span>Sample Task 2</span>
            <div className="flex items-center space-x-2">
              <button className="text-green-500 hover:text-green-700">✔</button>
              <button className="text-red-500 hover:text-red-700">✖</button>
            </div>
          </li>

         <ul className="space-y-2">
  {tasks.map(task => (
    <li key={task._id} className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-md">
      <span>{task.title}</span>
      <div className="flex items-center space-x-2">
        <button className="text-green-500 hover:text-green-700">✔</button>
        <button className="text-red-500 hover:text-red-700">✖</button>
      </div>
    </li>
  ))}
</ul>

        </ul>
      </div>
    </div>
  );
}

export default App;
