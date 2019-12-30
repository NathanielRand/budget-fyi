import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
// import {insert main app component} from './components/AppName';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const Header = () => (
  <header>
    <h1>
      Budget<b className="header-title-fyi">FYI</b>
    </h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Dashboard
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Add Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/about" activeClassName="is-active">
      About
    </NavLink>
    <NavLink to="/contact" activeClassName="is-active">
      Contact
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Help
    </NavLink>
  </header>
);

const BudgetFYIDashboardPage = () => <div>Welcome to BudgetFYI</div>;

const AddExpensePage = () => <div>Add Expense Page</div>;

const EditExpensePage = () => <div>Edit Expense Page</div>;

const AboutPage = () => <div>About Page</div>;

const ContactPage = () => <div>Contact Page</div>;

const HelpPage = () => <div>Help Page</div>;

const NotFoundPage = () => (
  <div>
    <h1>Whomp! Try a different page my friend...or go home below</h1>
    <Link to="/">Phone Home Here</Link>
  </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={BudgetFYIDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
