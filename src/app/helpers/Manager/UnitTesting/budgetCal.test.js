const { budgetCalOrders, budgetCalOrder } = require("../budgetCal");

describe("budgetCalOrders", () => {
  it("should calculate the total budget of an order with multiple items", () => {
    const order = {
      items: [
        { price: 10, qty: 2 },
        { price: 20, qty: 3 },
        { price: 5, qty: 4 },
      ],
    };
    expect(budgetCalOrders(order)).toEqual(10 * 2 + 20 * 3 + 5 * 4);
  });

  it("should return 0 for an empty order", () => {
    const order = { items: [] };
    expect(budgetCalOrders(order)).toEqual(0);
  });
});

describe("budgetCalOrder", () => {
  it("should calculate the total budget of an order with an array of items", () => {
    const order = [
      { price: 10, qty: 2 },
      { price: 20, qty: 3 },
      { price: 5, qty: 4 },
    ];
    expect(budgetCalOrder(order)).toEqual(10 * 2 + 20 * 3 + 5 * 4);
  });

  it("should return 0 for an empty order", () => {
    const order = [];
    expect(budgetCalOrder(order)).toEqual(0);
  });
});
