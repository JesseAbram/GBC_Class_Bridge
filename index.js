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
