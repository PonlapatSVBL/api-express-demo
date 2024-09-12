const express = require('express');
const app = express();
const port = 8080;

// Middleware เพื่อให้ Express สามารถอ่าน JSON ได้
app.use(express.json());

// Route GET สำหรับ root
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Route GET สำหรับ endpoint /api
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the API!' });
});

// Route POST สำหรับ endpoint /api/data
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ received: data });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at: ${port}`);
});
