const Statement = require('./statement')

class Transactions {
  constructor() {
    this.date = new Date().toLocaleDateString();
    this.balance = 0
    this.credit = 0
    this.debit = 0
  }

  deposit(amount) {
    this.balance += amount

    return console.log(this.date)
  }

  withdraw(amount) {
    this.balance -= amount
    return console.log(this.date)
  }



}

module.exports = Transactions
