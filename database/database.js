const mongoose = require('mongoose');
const {DBUSER, DBPASSWORD, DB, SERVER} = require('../credentials');

const connectionString = `mongodb://${DBUSER}:${DBPASSWORD}@${SERVER}/${DB}`;

const connect = () => {
	mongoose.connect(connectionString)
		.then(() => { console.log(`Connected to mongodb at : ${connectionString}`)})
		.catch(err => { console.log(err)});
};

module.exports = connect;