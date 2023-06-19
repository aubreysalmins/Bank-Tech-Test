class BankAccount {
  constructor() {
    // Do we want anything in the constructor?
    // Do we want to pass anything to the bank class when initialising? 
  }

  // methods

  deposit() {

  }

  withdraw() {

  }

  printStatement() {

  }

  // Here's a private method to get the current date
  getDate() {
    var date = require('moment');
    // var date = moment();

    // var currentDate = date.format('DD/MM/YYYY');
    var currentDate = date.toString();
    console.log(currentDate);
    return currentDate
  }
}

module.exports = BankAccount

const newBankAccount = new BankAccount
console.log(newBankAccount.getDate())