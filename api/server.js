var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
const cron = require('node-cron');
const fetch = require('node-fetch');
var app = express();

cron.schedule('*/20 * * * *', function() {
    console.log('running a task every minute');

    fetch('http://laurarecipebackend.herokuapp.com/')
    .then(res => res.text())
    .then(text =>{
        console.log("http://laurarecipebackend.herokuapp.com/")
    })
    
    fetch('http://laurarecipefrontend.herokuapp.com/')
    .then(res => res.text())
    .then(text => {
        console.log('http://laurarecipefrontend.herokuapp.com/')
           
    })

    fetch('https://warm-citadel-27486.herokuapp.com/')
    .then(res => res.text())
    .then(text => console.log('https://warm-citadel-27486.herokuapp.com/'))
});

  
app.use(cors())
app.use(bodyParser.json())
app.get('/api', function(req, res){
    return res.json({message:"hi there"})
});
app.post('/api', (req, res)=>{
    return res.json({message:"post", body: req.body})
})
var port = process.env.port||8000;
app.listen(port, ()=>{
    console.log("app listen ",port)
});