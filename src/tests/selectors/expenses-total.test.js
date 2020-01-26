import selectExpensesTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("Should return 0 if no expense", () => {
  const resp = selectExpensesTotal([]);
  expect(resp).toBe(0);
});

test("Should correctly add up a single expense", () => {
  const resp = selectExpensesTotal([expenses[0]]);
  expect(resp).toBe(4000);
});

test("Should correctly add up multiple expenses", () => {
  const resp = selectExpensesTotal(expenses);
  expect(resp).toBe(89000);
});
