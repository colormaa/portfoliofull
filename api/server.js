var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();
app.use(cors())
app.use(bodyParser.json())
app.get('/', function(req, res){
    return res.json({message:"hi there"})
});
app.post('/', (req, res)=>{
    return res.json({message:"post", body: req.body})
})
var port = process.env.port||8000;
app.listen(port, ()=>{
    console.log("app listen ",port)
});