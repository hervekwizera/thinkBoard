// server.js
import express from 'express';
import noteRouter from "./routes/notesRoutes.js";


const app = express();
const PORT = 5000;

app.use("/api/notes",noteRouter);



app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
