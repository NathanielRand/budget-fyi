import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  startAddExpense,
  addExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  startRemoveExpense,
  setExpenses,
  startSetExpenses
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";
import { DocumentContext } from "twilio/lib/rest/preview/sync/service/document";

// Mock store configuration to be reused for
// each test that needs to create a mock store.
const middlewares = [thunk];
const createMockStore = configureMockStore(middlewares);

beforeEach(done => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database
    .ref("expenses")
    .set(expensesData)
    .then(() => done());
});

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
  const expensesData = {
    description: "Phone",
    amount: 5000,
    note: "Great service",
    createdAt: 26000
  };

  // Dispatch the action
  store
    .dispatch(startAddExpense(expensesData))
    .then(() => {
      // Test if your store dispatched the expected actions
      const actions = store.getActions();
      const expectedPayload = {
        type: "ADD_EXPENSE",
        expense: {
          id: expect.any(String),
          ...expensesData
        }
      };
      expect(actions).toEqual([expectedPayload]);

      // Query firebase database
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    // Promise chaining
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expensesData);
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
  const expensesDefault = {
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
          ...expensesDefault
        }
      };
      expect(actions).toEqual([expectedPayload]);

      // Query firebase database
      return database.ref(`expenses/${actions[0].expense.id}`).once("value");
    })
    // Promise chaining
    .then(snapshot => {
      expect(snapshot.val()).toEqual(expensesDefault);
      // Force Jest to wait until this moment bc
      // this callback is asynchronous.
      done();
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

test("Should handle startEditExpense", done => {
  // Create mock store with initial value of an empty object.
  const store = createMockStore({});
  // ID of first expense.
  const id = expenses[0].id;
  // Update amount to arbitrary value.
  const updates = { amount: 21045 };
  // Dispatch async action.
  store
    // Dispatch id & updates arguments.
    .dispatch(startEditExpense(id, updates))
    // Since promise was return, toss "then" call
    // to do something once data is synced.
    .then(() => {
      // Assertion to get actions array back.
      const actions = store.getActions();
      // Expect something about the first item in actions
      // to equal the correct type, id is id from above, and
      // updates equals updates from above. If valid, we
      // know the action was dispatched correctly.
      expect(actions[0]).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates
      });
      // Fetch data from Firebase and check out the amount value
      // to make sure the data changed on firebase.
      return database.ref(`expenses/${id}`).once("value");
    })
    // Since we have the returned promise, we can chain on
    // a then call. This will fire once that promise completes.
    // Access the snapshot.
    .then(snapshot => {
      // Expect snapshot and call val to get that object back.
      // Grab amount off of that object and expect it to be equal to
      // the number from above.
      expect(snapshot.val().amount).toEqual(updates.amount);
      done();
    });
});

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("Should remove expenses from firebase", done => {
  const store = createMockStore({});
  const id = expenses[2].id;

  // Dispatch startRemoveExpense
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      // Grab actions
      const actions = store.getState();
      // Make assertion
      expect(actions[0]).toEqual({
        type: "REMOVE_EXPENSE",
        id: id
      });
      // Fetch data and assert that it actually was removed
      return database.ref(`expenses/${id}`).once("value");
    })
    .then(snapshot => {
      // Make sure data was actually removed
      expect(snapshot.val()).toBeFalsy();
      done();
    });
});

test("Should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  });
});

test("Should fetch the expenses from firebase", done => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    });
    done();
  });
});
