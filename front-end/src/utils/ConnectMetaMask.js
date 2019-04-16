const ethers = require('ethers');

const credentialJson = require("./credentials")
const abi = credentialJson.ABI;
const privateKey = credentialJson.PRIVATE_KEY;

const bytecode = "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610129806100606000396000f3fe6080604052600436106039576000357c010000000000000000000000000000000000000000000000000000000090048063948cb71914603e575b600080fd5b60446046565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f1935050505015801560ac573d6000803e3d6000fd5b503373ffffffffffffffffffffffffffffffffffffffff167f22e3f162fca16dc0fcfb65eddf406531a0c555a2c24c58cf5d10fc2d202a882e346040518082815260200191505060405180910390a256fea165627a7a72305820acf37a3a16a5500ad01ed4f8600eeb0da7a9cb760b90c437a77570251e0f41e30029";

async function ConnectMetaMask(testNetName) {
    
    let provider = ethers.getDefaultProvider(testNetName);
    let wallet = new ethers.Wallet(privateKey, provider);
    let factory = new ethers.ContractFactory(abi, bytecode, wallet);
    let contract = await factory.deploy();
    
    await contract.deployed();

}

async function getBalance(testNetName, contractAddress) {

	let provider = ethers.getDefaultProvider(testNetName);
	let contract = new ethers.Contract(contractAddress, abi, provider);
	
	let currentValue = await contract.getValue();

	return currentValue;

}