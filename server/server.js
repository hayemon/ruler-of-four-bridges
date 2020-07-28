const express = require('express')
const connectDB = require('./config/db')
const path = require('path')

const app = express()
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('API Running'))
// Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/characterProfiles', require('./routes/api/characterProfiles'))
app.use('/api/parameterModels', require('./routes/api/parameterModels'))
app.use('/api/dictionaries', require('./routes/api/dictionaries'))

app.use(express.static(path.join(__dirname, '../client/dist/')))
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))