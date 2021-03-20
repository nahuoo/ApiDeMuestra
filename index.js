const config = require('./config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')


//rutas
const authRoute = require('./routes/auth')

//MongoDB
mongoose.connect(process.env.DB_CONNECT,
{ useNewUrlParser: true }, 
() => console.log('connected!')
)

app.use(express.json()) 

app.use('/api/user', authRoute)

app.listen(config.port, () => console.log('server ready, Port: 3000'))