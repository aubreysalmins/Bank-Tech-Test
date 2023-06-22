const Transactions = require('./transactions')

class Statement {
  // Constructor initializes the array_of_transactions property
  constructor(transactions) {
    this.array_of_transactions = transactions
  }

  // Method to print the transactions to the console
  print() {
    const title = "date || credit || debit || balance"
    this.array_of_transactions.reverse();
    this.array_of_transactions.unshift(title)
    this.array_of_transactions.map((transaction) => {
      console.log(transaction)
    })
  }
}

module.exports = Statement

const transactions = new Transactions
transactions.deposit(10000)
transactions.withdraw(5000)
transactions.withdraw(500)
transactions.withdraw(500)

const statement = new Statement(transactions.array_of_transactions)
statement.print()
