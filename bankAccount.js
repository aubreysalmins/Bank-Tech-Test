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
    this.array_of_transactions.push(`${this.date}|| ${amount} || || ${this.balance}`)
    // console.log(this.array_of_transactions)
  }

  withdraw(amount) {
    this.balance -= amount
    this.array_of_transactions.push(`${this.date}|| || ${amount} || ${this.balance}`)
    // console.log(this.array_of_transactions)
  }

  printStatement() {
    // const title = "date || credit || debit || balance\n"
    // console.log(this.array_of_transactions);
    const title = "date || credit || debit || balance"
    this.array_of_transactions.reverse();
    // console.log(this.array_of_transactions);
    this.array_of_transactions.unshift(title)
    this.array_of_transactions.map((transaction) => {
      console.log(transaction)
    })
  }
}

module.exports = BankAccount

const newBankAccount = new BankAccount
// newBankAccount.printStatement()


newBankAccount.deposit(1000)
newBankAccount.withdraw(500)
newBankAccount.deposit(2000)
newBankAccount.withdraw(1000)
newBankAccount.printStatement()
