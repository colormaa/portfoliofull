// const express = require('express')
// const app = express()
// const port = 3001


// const redis = require('redis')
// const client = redis.createClient()

// const {promisify} =  require('util')
// const getAsync = promisify(client.get).bind(client)


// app.get('/jobs', async (req, res) => {

//     const jobs =  await getAsync('github');
//     console.log(JSON.parse(jobs).length);
//     res.header('Access-Control-Allow-Origin', "http://localhost:3000")
//     return res.send(jobs)
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
'use strict'
global.fetch = require('node-fetch');
require('dotenv').config();
const Cognito = require('./cognito/index');
const {verify} =require('./cognito/index');
const body = {
  email:"bolormaabodonguud@gmail.com",
  password:"Password123;"
}

async function Signup(){
  const response = await Cognito.signUp(body.email, body.password);
  console.log(response);
}
async function Verify(){
  const response = await Cognito.verify(body.email, '917123');
  console.log(response);
}
async function Signin(){
  const response = await Cognito.signIn(body.email, body.password);
  console.log(response);
}
Signin()