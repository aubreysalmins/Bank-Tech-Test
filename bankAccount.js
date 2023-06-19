class BankAccount {
  constructor() {
    // Do we want anything in the constructor?
    // Do we want to pass anything to the bank class when initialising? 
    this.date = ""
  }

  getDate() {
    this.date = new Date().toLocaleDateString();
    // return this.date
  }

  // Both the methods should use the getDate() method to get the date

  deposit() {
    return this.date
  }

  withdraw() {

  }

  printStatement() {
    // This is going to return a statement, which will include the heading of 
    // date || credit || debit || balance
    // then each transaction in a list after that, in reverse chronological order. 
    console.log("date || credit || debit || balance")
  }

}

module.exports = BankAccount

const newBankAccount = new BankAccount
// console.log(newBankAccount.getDate())

// newBankAccount.printStatement()

newBankAccount.getDate()
console.log(newBankAccount.deposit())

