// const Statement = require('./statement')

class Transactions {
  constructor() {
    this.date = new Date().toLocaleDateString(); // Current date in local format
    this.balance = 0 // Current balance initialized to zero
    this.array_of_transactions = [] // Array to store transaction records
  }

  deposit(amount) {
    this.balance += amount // Increase balance by the deposited amount
    // Create a transaction record and add it to the array_of_transactions
    this.array_of_transactions.push(`${this.date} || ${amount} || || ${this.balance}`)
    return this.array_of_transactions // Return the updated array_of_transactions
  }

  withdraw(amount) {
    this.balance -= amount // Decrease balance by the withdrawn amount
    // Create a transaction record and add it to the array_of_transactions
    this.array_of_transactions.push(`${this.date} || || ${amount} || ${this.balance}`)
    return this.array_of_transactions // Return the updated array_of_transactions
  }
}

module.exports = Transactions
