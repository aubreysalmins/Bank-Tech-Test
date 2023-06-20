const Transactions = require('./transactions')

class Statement {
  constructor() {
    this.date = new Date().toLocaleDateString();
  }

  print() {
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

module.exports = Statement
