const express = require('express')
require('dotenv').config()
const config = require('./Configs/farm.config')
const farmRouter = require('./Routes/farm.route')
const app = express()
app.use(express.json())


port = process.env.PORT
app.get('/', (req, res)=>{
    res.send(`welcome to my Farm`)
})

app.use('/api/v1/animal', farmRouter)

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})