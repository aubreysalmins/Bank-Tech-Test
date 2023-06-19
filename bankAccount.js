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
    let date = new Date().toLocaleDateString();
    return date
  }
}

module.exports = BankAccount

const newBankAccount = new BankAccount
console.log(newBankAccount.getDate())
