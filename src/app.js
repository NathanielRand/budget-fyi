import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
// import { setTextFilter } from "./actions/filters";
// import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;

// Conditionally renders the application
const renderApp = () => {
  // Check if we have not rendered. If we already rendered,
  // then we do nothing inside of this function.
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

// State of authentication.
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // Fetch expenses
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      // Redirect the user if they are currently on the login page.
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    renderApp();
    // Redirect to home page when logged out.
    history.push("/");
  }
});
