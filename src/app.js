import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Water Bill", amount: 1500, createdAt: 2000 })
);
store.dispatch(
  addExpense({ description: "Power Bill", amount: 6000, createdAt: 1600 })
);
store.dispatch(
  addExpense({ description: "Phone Bill", amount: 5000, createdAt: 1200 })
);
store.dispatch(
  addExpense({ description: "Rent", amount: 75000, createdAt: 0 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
