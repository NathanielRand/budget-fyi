import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div>
    <h1>Welcome to BudgetFYI</h1>
    <button onClick={startLogin}>LOGIN</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  // startLogin prop is going to dispatch the
  // startLogin action.
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
