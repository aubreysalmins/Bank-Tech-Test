// const Statement = require('./statement')

class Transactions {
  constructor() {
    this.date = new Date().toLocaleDateString();
    this.balance = 0
    this.array_of_transactions = []
  }

  deposit(amount) {
    this.balance += amount
    this.array_of_transactions.push(`${this.date} || ${amount} || || ${this.balance}`)
    return this.array_of_transactions
  }

  withdraw(amount) {
    this.balance -= amount
    this.array_of_transactions.push(`${this.date} || || ${amount} || ${this.balance}`)
    return this.array_of_transactions
  }
}

module.exports = Transactions
