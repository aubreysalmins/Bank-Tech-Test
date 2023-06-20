const Statement = require('./statement')

class Transactions {
  constructor() {
    this.date = new Date().toLocaleDateString();
  }

  deposit(amount) {
    return console.log(this.date)
  }

  withdraw(amount) {
    return console.log(this.date)
  }


}

module.exports = Transactions