import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Header from "../components/Header";
import LoginPage from "../components/LoginPage";
import DashboardPage from "../components/Dashboard";
import AddExpensePage from "../components/AddExpense";
import EditExpensePage from "../components/EditExpense";
import AboutPage from "../components/About";
import ContactPage from "../components/Contact";
import HelpPage from "../components/Help";
import NotFoundPage from "../components/NotFound";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
