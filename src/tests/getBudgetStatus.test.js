import { getBudgetStatus } from "../app/helpers/budgetStatus";

describe("getBudgetStatus", () => {
  it("return true when budget is exactly 100000", () => {
    const budget = 100000;
    const result = getBudgetStatus(budget);
    expect(result).toBe(true);
  });

  it("return true when budget is greater than 100000", () => {
    const budget = 150000;
    const result = getBudgetStatus(budget);
    expect(result).toBe(true);
  });

  it("return false when budget is less than 100000", () => {
    const budget = 75000;
    const result = getBudgetStatus(budget);
    expect(result).toBe(false);
  });

  it("rreturn false when budget is zero", () => {
    const budget = 0;
    const result = getBudgetStatus(budget);
    expect(result).toBe(false);
  });

  it("return false when budget is a negative value", () => {
    const budget = -50000;
    const result = getBudgetStatus(budget);
    expect(result).toBe(false);
  });

  it("return true when budget is a large positive value", () => {
    const budget = 1000000;
    const result = getBudgetStatus(budget);
    expect(result).toBe(true);
  });
});
