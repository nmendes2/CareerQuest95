const { createClient } = require('@supabase/supabase-js')
const supabaseUrl = 'https://yfleatfhykxddujaaehy.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('supabase client should be created')

module.exports = supabase
