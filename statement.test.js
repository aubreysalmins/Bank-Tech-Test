const Transactions = require('./transactions')
const Statement = require('./statement')

describe("Statement", () => {
  beforeAll(() => {
    jest.spyOn(Date.prototype, 'toLocaleDateString').mockReturnValue('2020-04-15');
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it("should log the array of all the transactions to the console, with the correct date", () => {
    const transactions = new Transactions
    transactions.deposit(10000)
    transactions.withdraw(5000)
    const statement = new Statement(transactions.array_of_transactions)

    const expected = [
      "date || credit || debit || balance",
      "2020-04-15 || || 5000 || 5000",
      "2020-04-15 || 10000 || || 10000"
    ]

    const consoleLogSpy = jest.spyOn(console, 'log');
    statement.print();
    const actual = consoleLogSpy.mock.calls.map(([output]) => output);
    // const actual = consoleLogSpy.mock.calls.map((call) => call[0]);

    expect(expected).toEqual(actual)
  })
})