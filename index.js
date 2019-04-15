const ethers = require('ethers')
const {ADDRESS, ABI, PRIVATE_KEY} = require('./credentials')


const rinkeby = ethers.getDefaultProvider('rinkeby')
const kovan = ethers.getDefaultProvider('kovan')

const contract = new ethers.Contract(ADDRESS, ABI, kovan);

    contract.on("Bridge", (from, amount) => {

        object = {
            from,
            amount
        }
        console.log(object)
        send(from, amount)

    });






const acc = new ethers.Wallet(PRIVATE_KEY, rinkeby);
const gasPrice = ethers.utils.bigNumberify(6000000000);
const gasLimit = ethers.utils.bigNumberify(2100000);

const send = async (to, amount) => {
  const nonce = await acc.getTransactionCount('pending')

    const tx = {
        to,
        value: amount,
        gasLimit,
        gasPrice,
        nonce
      }
      console.log(tx)

   
      const hash = await acc.sendTransaction(tx)
      console.log(hash)
      

}


//const ADDRESS = "0xae41b214b2A22eEdc85a63bAaA65A392E0184E50"
// const ABI = [
// 	{
// 		"constant": false,
// 		"inputs": [],
// 		"name": "connect",
// 		"outputs": [],
// 		"payable": true,
// 		"stateMutability": "payable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"payable": false,
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"name": "",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Bridge",
// 		"type": "event"
// 	}
// ]
