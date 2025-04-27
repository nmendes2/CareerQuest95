const express = require('express')
const path = require('path')
const cors = require('cors')
const supabase = require('./db/db.cjs')

const app = express()
app.use(cors())
app.use(express.json())

// Serve built frontend files
app.use(express.static(path.join(__dirname, '../dist')))

// Your API routes
app.get('/api/get-jobs-paginated', async (req, res) => {
  const userQuery = req.query.query
  const { data, error } = await supabase
    .from('ScrapedJobs')
    .select('*')
    .or(`title.like.%${userQuery}%`)
  if (error === null) {
    res.json({ data: data })
  } else {
    res.status(500).json({ data: 'Something went wrong' })
  }
})

app.get('/{*path}', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
