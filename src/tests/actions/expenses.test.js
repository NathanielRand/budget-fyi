import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  editExpense,
  removeExpense
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

// Mock store configuration to be reused for
// each test that needs to create a mock store.
const middlewares = [thunk];
const createMockStore = configureMockStore(middlewares);

test("Should setup add expense action object with provided values", () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[2]
  });
});

test("Should add expense to database and store", done => {
  // Initialize mockstore with empty state
  const initialState = {};
  const store = createMockStore(initialState);

  // Expense data to pass into startAddExpense dispatch
  const expenseData = {
    description: "Phone",
    amount: 5000,
    note: "Great service",
    createdAt: 26000
  };

  // Dispatch the action
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      // Test if your store dispatched the expected actions
      const actions = store.getActions();
      const expectedPayload = {
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      };
      expect(actions).toEqual([expectedPayload]);

      // Query firebase database
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    // Promise chaining
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseData);
      // Force Jest to wait until this moment bc
      // this callback is asynchronous.
      done();
    });
});

test("Should add expense with defaults to database and store", done => {
  // Initialize mockstore with empty state
  const initialState = {};
  const store = createMockStore(initialState);

  // Default data to pass into startAddExpense dispatch
  const expenseDefault = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0
  };

  // Dispatch the action
  store
    .dispatch(startAddExpense({}))
    .then(() => {
      // Test if your store dispatched the expected actions
      const actions = store.getActions();
      const expectedPayload = {
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expenseDefault
        }
      };
      expect(actions).toEqual([expectedPayload]);

      // Query firebase database
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    // Promise chaining
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expenseDefault);
      // Force Jest to wait until this moment bc
      // this callback is asynchronous.
      done();
    });
});

// test("Should setup add expense action object with default values", () => {
//   const action = addExpense({});
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       id: expect.any(String),
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0
//     }
//   });
// });

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
