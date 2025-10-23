// Simple Express HTTP server
// To run: install Express in this folder (for example: npm install express) then run this file with Node (node test.js)

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// simple request logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Echo endpoint for JSON bodies
app.post('/echo', (req, res) => {
  res.json({ body: req.body });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
