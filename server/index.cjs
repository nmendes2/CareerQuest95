const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// Serve built frontend files
app.use(express.static(path.join(__dirname, '../dist')))

// Your API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' })
})

app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
