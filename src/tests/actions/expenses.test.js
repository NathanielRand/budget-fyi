import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    note: "Last month's rent",
    amount: 75000,
    createdAt: 1000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("Should setup add expense action object with default values", () => {
  const action = addExpense({});
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});

test("Should setup edit expense action object", () => {
  const action = editExpense("123abc", { notes: "Test note" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      notes: "Test note"
    }
  });
});

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});
