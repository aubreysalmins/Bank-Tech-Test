const Transactions = require('./transactions')

describe("Transactions", () => {
  // Set up the mocked date before all tests
  beforeAll(() => {
    jest.spyOn(Date.prototype, 'toLocaleDateString').mockReturnValue('2020-04-15');
  });

  // Restore the mocked date after all tests
  afterAll(() => {
    jest.restoreAllMocks();
  });

  // Test case: deposit()
  it("should append a deposit to the array of transactions, with the mocked date", () => {
    const transaction = new Transactions

    const expected = ["2020-04-15 || 1000 || || 1000"]
    const actual = transaction.deposit(1000)

    expect(expected).toEqual(actual)
  })

  // Test case: withdraw()
  it("should append a withdrawal to the array of transactions, with the mocked date", () => {
    const transaction = new Transactions

    const expected = ["2020-04-15 || || 500 || -500"]
    const actual = transaction.withdraw(500)

    expect(expected).toEqual(actual)
  })
})