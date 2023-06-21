
// this.date = new Date().toLocaleDateString();
// this.array_of_transactions = []
// this.balance = 0
//   }

// deposit(amount) {
//   this.balance += amount
//   this.array_of_transactions.push(`${this.date}|| ${amount} || || ${this.balance}`)
// }

// withdraw(amount) {
//   this.balance -= amount
//   this.array_of_transactions.push(`${this.date}|| || ${amount} || ${this.balance}`)
// }

// printStatement() {
//   const title = "date || credit || debit || balance"
//   this.array_of_transactions.reverse();
//   this.array_of_transactions.unshift(title)
//   this.array_of_transactions.map((transaction) => {
//     console.log(transaction)
//   })
// }
// }

const date = new Date().toLocaleDateString()
const array_of_transactions = []
let balance = 0

const deposit = (amount) => {
  balance += amount
  array_of_transactions.push(`${date}|| ${amount} || || ${balance}`)
}

const withdraw = (amount) => {
  balance -= amount
  array_of_transactions.push(`${date}|| || ${amount} || ${balance}`)
}

const printStatement = () => {
  const title = "date || credit || debit || balance"
  array_of_transactions.reverse();
  array_of_transactions.unshift(title)
  array_of_transactions.map((transaction) => {
    console.log(transaction)
  })
}

deposit(5000)
deposit(5000)
withdraw(3000)
withdraw(3000)
withdraw(3000)
printStatement()