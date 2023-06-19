class BankAccount {
  constructor() {
    // Do we want anything else in the constructor? - Probably not
    // Do we want to pass anything to the bank class when initialising? - Probably not?
    this.date = ""
    this.array_of_transactions = []
    this.balance = 0
    this.credit = 0
    this.debit = 0
  }

  // Both the deposit and the withdraw methods should use the getDate() method to get the date
  deposit(amount) {
    return console.log(this.date)
  }

  withdraw(amount) {
    return console.log(this.date)
  }

  printStatement() {
    // This is going to return a statement, which will include the heading of 
    // date || credit || debit || balance
    // then each transaction in a list after that, in reverse chronological order. 
    const title = "date || credit || debit || balance"
    this.array_of_transactions.push(title)
    console.log(this.array_of_transactions)

  }

  getDate() {
    this.date = new Date().toLocaleDateString();
  }

}

module.exports = BankAccount

const newBankAccount = new BankAccount
// console.log(newBankAccount.getDate())

newBankAccount.printStatement()

newBankAccount.getDate()
// newBankAccount.deposit()
// newBankAccount.withdraw()
