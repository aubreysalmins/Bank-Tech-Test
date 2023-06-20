class BankAccount {
  constructor() {
    // Do we want anything else in the constructor? - Probably not
    // Do we want to pass anything to the bank class when initialising? - Probably not?
    this.date = new Date().toLocaleDateString();
    this.array_of_transactions = []
    this.balance = 0
  }

  // Both the deposit and the withdraw methods should use the getDate() method to get the date
  deposit(amount) {
    this.balance += amount
    this.array_of_transactions.push(`${this.date}|| ${amount} || || ${this.balance} \n`)
    console.log(this.array_of_transactions)
  }

  withdraw(amount) {
    this.balance -= amount
    this.array_of_transactions.push(`${this.date}|| || ${amount} || ${this.balance} \n`)
    console.log(this.array_of_transactions)
  }

  printStatement() {
    // This is going to return a statement, which will include the title
    // then each transaction in a list after that, in reverse chronological order. 
    const title = "date || credit || debit || balance\n"
    // this.array_of_transactions.push(title)
    this.array_of_transactions.reverse();
    this.array_of_transactions.unshift(title);
    console.log(this.array_of_transactions);
  }
}

module.exports = BankAccount

const newBankAccount = new BankAccount
newBankAccount.printStatement()


// newBankAccount.deposit()
// newBankAccount.withdraw()
