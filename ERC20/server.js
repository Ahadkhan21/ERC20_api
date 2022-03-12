require('dotenv').config();
const express= require('express')
const app =express()
const routes = require('./routes')
const Web3 = require('web3');
const web3 = new Web3(Infura Key(endpoint))

const contract = require('truffle-contract');
app.use(express.json())




app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');