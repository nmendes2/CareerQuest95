const express = require('express');
const app = express();
const pages = require("./routes/pages");

// Example route (optional)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});
app.use(pages);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
