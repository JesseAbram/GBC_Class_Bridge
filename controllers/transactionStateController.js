const TransactionState = require('../models/transactionStateModel');

var transactionStateController = {};

// Show index list of transactions
transactionStateController.index = function (req, res) {
  TransactionState.find().exec((err, transactionStates) => {
    if (err) {
      console.log("Error: " + err);
    }
    else {
      res.locals.transactionStates = transactionStates;
      res.send(transactionStates);
    }
  });
};

// Get a single transactionState by id
transactionStateController.show = function (req, res) {
  TransactionState.findOne({
    _id: req.params.id
  }).exec((err, transactionState) => {
    if (err) {
      console.log("Error: " + err);
    }
    else {
      res.locals.transactionState = transactionState;
      res.send(transactionState);
    }
  })
};

// Save a new transactionState
transactionStateController.save = function (req, res) {
  let newTransactionState = new TransactionState(req.body);

  newTransactionState.save((err) => {
    if (err) {
      console.log("Error: " + err);
    }
    else {
      console.log("Successfully saved new transactionState.");
      res.send("Successfully saved new transactionState.");
    }
  });
};

// Update an existing transactionState
transactionStateController.update = function (req, res) {
  TransactionState.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    {
      new: true   // returns the modified data instead of original
    },
    (err, transactionState) => {
      if (err) {
        console.log("Error: " + err);
      }
      else {
        console.log("Updated transactionState: " + transactionState._id);
        res.send("Updated transactionState: " + transactionState._id);
      }
    }
  );
};

// Delete an existing transactionState
transactionStateController.delete = function (req, res) {
  TransactionState.findByIdAndDelete(
    req.params.id,
    (err, transactionState) => {
      if (err) {
        console.log("Error: " + err);
      }
      else {
        console.log("TransactionState deleted: \n", transactionState);
        res.send("Deleted transactionState: \n", transactionState);
      }
    }
  );
}

module.exports = transactionStateController;
