// server.js
import express from 'express';
import noteRouter from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT||5000;

app.use(express.json());
app.use(rateLimiter)

app.use("/api/notes",noteRouter);

connectDB().then(()=>{
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
}); 
})
