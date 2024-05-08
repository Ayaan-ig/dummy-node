const express = require('express')
const app = express();
const port = 3000;

const router1 = require('./route1')
app.get('/',(req,res)=>{
    res.send(' <a href="/route1" > go to </a>')})
app.use('/route1',router1)

app.listen(port,()=>{console.log(`server action on port ${port}`);})

module.exports = app;