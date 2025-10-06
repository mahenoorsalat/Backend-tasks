const router = express.Router();

// Route to GET all tasks
router.get("/", getTask);

// FIX 2: Switched to POST to handle new task creation
router.post("/", addTask);

// FIX 3: Switched to DELETE to handle task deletion
router.delete("/:id", deleteTask);

export default router;