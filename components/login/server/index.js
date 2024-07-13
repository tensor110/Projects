const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const AuthRouter = require('./routes/AuthRouter')
const ProductRouter = require('./routes/ProductRouter')
require('dotenv').config()
require('./models/db')

const PORT = process.env.PORT || 8080;

app.get('/ping',(req,res)=>{
    res.send('Ping')
})

app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  }));

app.use('/auth', AuthRouter)
app.use('/products', ProductRouter)


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})