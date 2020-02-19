import uuid from "uuid";
import database from "../firebase/firebase";

// Action Steps (w/out Firebase):
// 1. Component calls action generator
// 2. Action generator returns object
// 3. Component dispatches object
// 4. Redux store changes

// Action Steps (w/ Firebase):
// 1. Component calls action generator
// 2. Action generator returns a function
// 3. Component dispatches function (?)
//  - Requires module middleware bc redux does not allow dispatch of functions by default
// 4. Redux executes function  with help of middleware
// 5. Function runs (has the ability to dispatch other actions and do whatever it wants)
//  - For Example: Like Firebase push to add something to the database
// 6. Have the ability to dispatch another action that returns an object
// 7. Returned object manipulates redux store

// ADD_EXPENSE
export const addExpense = expense => ({
  type: "ADD_EXPENSE",
  expense: expense
});

// startAddExpense
export const startAddExpense = (expenseData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    return database
      .ref(`users/${uid}/expenses`)
      .push(expense)
      .then(ref => {
        dispatch(
          addExpense({
            id: ref.key,
            ...expense
          })
        );
      });
  };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// startRemoveExpense
export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense({ id }));
      });
  };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// startEditExpense
export const startEditExpense = (id, updates) => {
  // Return function that gets called with dispatch and getState.
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    // Access database via expenses ID with
    // ID called in argument above, use update method and
    // call updates from argument above to apply updates
    // to firebase database without overriding existing values.
    // Include return to do something once startEditExpense completes.
    return (
      database
        .ref(`users/${uid}/expenses/${id}`)
        .update(updates)
        // Run then call to run some code when updates are successfully synced.
        .then(() => {
          // Dispatch editExpense (a regular action) and pass
          // in values from above to change redux store.
          dispatch(editExpense(id, updates));
        })
    );
  };
};

// SET_EXPENSES
export const setExpenses = expenses => ({
  type: "SET_EXPENSES",
  expenses
});

// startSetExpenses;
export const startSetExpenses = () => {
  return (dispatch, getState) => {
    //
    const uid = getState().auth.uid;
    // Fetch all expense data once
    return database
      .ref(`users/${uid}/expenses`)
      .once("value")
      .then(snapshot => {
        const expenses = [];

        // Parse that data into an array
        snapshot.forEach(childSnapshot => {
          expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        // Dispatch SET_EXPENSES to redux
        dispatch(setExpenses(expenses));
      });
  };
};
