import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
// import {insert main app component} from './components/AppName';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const BudgetFYIDashboardPage = () => <div>Welcome to BudgetFYI</div>;

const AddExpensePage = () => <div>Add Expense Page</div>;

const EditExpensePage = () => <div>Edit Expense Page</div>;

const AboutPage = () => <div>About Page</div>;

const ContactPage = () => <div>Contact Page</div>;

const HelpPage = () => <div>Help Page</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={BudgetFYIDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
