import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import {insert main app component} from './components/AppName';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const BudgetFYIDashboardPage = () => <div>Welcome to BudgetFYI</div>;

const AddExpensePage = () => <div>Add Expense Page</div>;

const EditExpensePage = () => <div>Edit Expense Page</div>;

const AboutPage = () => <div>About Page</div>;

const ContactPage = () => <div>Contact Page</div>;

const HelpPage = () => <div>Help Page</div>;

const NotFoundPage = () => <div>Whomp! Try a different page my friend...</div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={BudgetFYIDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
