const express = require('express')
const serverless =  require('serverless-http')
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.json({msg:'hey you'}
    );
})
app.get('/route1',(req,res)=>{
    res.json({msg:'hey you in route1'});
})

app.listen(port,()=>{console.log(`server action on port ${port}`);})

module.exports.handler = serverless(app);