class BankAccount {
  constructor() {
    // Do we want anything else in the constructor?
    // -> Probably three variables initialised at 0, balance, credit and debit
    // Do we want to pass anything to the bank class when initialising? -> Probably not?
    this.date = ""
  }

  // Both the deposit and the withdraw methods should use the getDate() method to get the date
  deposit() {
    return this.date
  }

  withdraw() {
    return this.date
  }

  printStatement() {
    // This is going to return a statement, which will include the heading of 
    // date || credit || debit || balance
    // then each transaction in a list after that, in reverse chronological order. 
    console.log("date || credit || debit || balance")
  }

  getDate() {
    this.date = new Date().toLocaleDateString();
  }

}

module.exports = BankAccount

const newBankAccount = new BankAccount
// console.log(newBankAccount.getDate())

// newBankAccount.printStatement()

newBankAccount.getDate()
console.log(newBankAccount.deposit())

