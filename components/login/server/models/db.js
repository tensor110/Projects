const mongoose = require('mongoose')

const url = process.env.URL

mongoose.connect(url)
    .then(()=>{
        console.log("MongoDB Connected....")
    })
    .catch((err)=>{
        console.log('Mongodb connection error', err)
    })