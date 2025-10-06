import cors from "cors"
import express from "express"
import connectDB from "./config/db.js";
import router from "./routes/taskRouter.js";

const app = express();
const PORT = 5000 ;

app.use(cors())
app.use(express.json());

connectDB()

app.use('/api/tasks' , router)


app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});


