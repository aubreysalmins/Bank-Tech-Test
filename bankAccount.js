class BankAccount {
  constructor() {
    this.date = new Date().toLocaleDateString();
    this.array_of_transactions = []
    this.balance = 0
  }

  deposit(amount) {
    this.balance += amount
    this.array_of_transactions.push(`${this.date}|| ${amount} || || ${this.balance}`)
  }

  withdraw(amount) {
    this.balance -= amount
    this.array_of_transactions.push(`${this.date}|| || ${amount} || ${this.balance}`)
  }

  printStatement() {
    const title = "date || credit || debit || balance"
    this.array_of_transactions.reverse();
    this.array_of_transactions.unshift(title)
    this.array_of_transactions.map((transaction) => {
      console.log(transaction)
    })
  }
}

module.exports = BankAccount

const newBankAccount = new BankAccount

newBankAccount.deposit(1000)
newBankAccount.withdraw(500)
newBankAccount.deposit(2000)
newBankAccount.withdraw(1000)
newBankAccount.printStatement()
