// server.js
import express from 'express';
import noteRouter from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT||5000;
connectDB();

app.use(express.json());
app.use("/api/notes",noteRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
