import express from "express"; // 👈 FIX: Import express
import { getTask, addTask, deleteTask } from "../controllers/taskController.js"; // 👈 FIX: Import controller functions

const router = express.Router();

// Route to GET all tasks
router.get("/", getTask);

// Route to POST a new task
router.post("/", addTask);

// Route to DELETE a task
router.delete("/:id", deleteTask);

export default router;