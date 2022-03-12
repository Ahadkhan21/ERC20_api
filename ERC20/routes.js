const token_abi=require('./abi_token.json');

const Web3 = require('web3');
const web3 = new Web3(Infura Key(endpoint))

const token_Add= Contract address of token;
const contract_Token =  new web3.eth.Contract(token_abi, token_Add);

const Accounts = require('web3-eth-accounts');




function routes(app, db){

    // Transfer
    app.post('/transfer', (req,res)=>{
        let recipient = req.body.recipient
        let amount = req.body.amount

        contract_Token.methods.transfer(recipient, amount).send()
        .on('transactionHash', function(hash){
            console.log(hash)
        })

     
    })

    // Transfer from
    app.post('/transferFrom', (req,res)=>{
        let sender = req.body.sender
        let recipient = req.body.recipient
        let amount = req.body.amount

        contract_Token.methods.transferFrom(sender, recipient, amount).send()
        .on('transactionHash', function(hash){
            console.log(hash)
        })

    })
    
    // Get Balance
    app.get('/getBalance', (req,res)=>{
        let account = req.body.account

        contract_Token.methods.balanceOf(account).call().then(function(bal){
            console.log(bal);
        });

        })

    // Create account
    app.post('/createAccount'), (req,res)=>{

        const accounts =  web3.eth.accounts.create()
        .on('data',function(privateKey){
            console.log(privateKey) 
            console.log(accounts)
        })

    }
}
module.exports = routes
