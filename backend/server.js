// server.js
import express from 'express';
const app = express();
const PORT = 5000;
// Routes
app.get('/', (req, res) => {
  res.send('Welcome to thinkBoard API!');
});

// Example placeholder: import and use routes
// import notesRoutes from './routes/notes.routes.js';
// app.use('/api/notes', notesRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
