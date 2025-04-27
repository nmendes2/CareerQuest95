import { spawn } from 'child_process'

const pyProg = spawn('python', [
  './jobscraper.py',
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
])

pyProg.stdout.on('data', function (data) {
  console.log(data.toString())
})
