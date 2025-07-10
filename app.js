const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const urlRoutes = require('./routes/urlRoutes')

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/', urlRoutes)

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB Connection Error:', err))

module.exports = app
