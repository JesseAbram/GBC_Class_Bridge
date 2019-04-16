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
    // 1 = Kovan -> Rinkby, 2 = Rinkby -> Kovan
  },
  status : {
    type : String,
    // "Recieved, Sent & Complete"
  },
  userAddress : {
    type : String,
  },
  kovanToRinkbyExchangeRate : {
    type : Number,
  },
  rinkbyToKovanExchangeRate : {
    type : Number,
  },
  amountReceived : {
    type : Number,
    // Wei
  },
  amountSent : {
    type : Number,
    default : 0
    // Wei
  },
  receivedTxHash : {
    type : String,
  },
  sentTxHash : {
    type : String,
    default : ""
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
