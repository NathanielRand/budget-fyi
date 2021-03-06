import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase, analytics } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";

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

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

// State of authentication.
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    // Dispatch login action passing in the user uid property
    store.dispatch(login(user.uid));
    // Fetch expenses
    store.dispatch(startSetExpenses()).then(() => {
      // Render application
      renderApp();
      // Redirect the user if they are currently on the login page.
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    // Dispatch logout action
    store.dispatch(logout());
    renderApp();
    // Redirect to home page when logged out.
    history.push("/");
  }
});
