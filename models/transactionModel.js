// This is the model for the transaction state.

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

let transactionStateSchema = new Schema({
  _id : {
    type : Schema.Types.ObjectId,
    auto : true
  },
  direction : {
    type : Number,
    ref : 'direction'
    // 1 = Kovan -> Rinkby, 2 = Rinkby -> Kovan
  },
  status : {
    type : String,
    ref : 'status'
    // "Recieved, Sent & Complete"
  },
  userAddress : {
    type : String,
    ref : 'userAddress'
  },
  kovanToRinkbyExchangeRate : {
    type : Number,
    ref : 'kovanToRinkbyExchangeRate'
  },
  rinkbyToKovanExchangeRate : {
    type : Number,
    ref : 'rinkbyToKovanExchangeRate'
  },
  amountReceived : {
    type : Number,
    ref : 'amountReceived'
    // Wei
  },
  amountSent : {
    type : Number,
    ref : 'amountSent'
    // Wei
  },
  receivedTxHash : {
    type : String,
    ref : 'receivedTxHash'
  },
  sentTxHash : {
    type : String,
    ref : 'sentTxHash'
  },
  created_at : {
    type : Date,
    default : Date.now
  },
  updated_at : {
    type : Date,
    default : Date.now
  }
});

// Sets the updated_at parameter equal to the current time
transactionStateSchema.pre('save', function(next){
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

// Exports the transactionStateSchema for use elsewhere. Sets the MongoDB
// collection to be used as: "transactionStateSchema"
module.exports = mongoose.model('transactionState', transactionStateSchema);
