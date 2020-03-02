import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="login">
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">
          Budget<fyi className="landing-title-fyi">FYI</fyi>
        </h1>
        <p className="box-layout__sub-title">Simplify Your Expenses</p>
        <button className="box-layout__button" onClick={startLogin}>
          LOGIN / SIGNUP
        </button>
      </div>
    </div>
    {/* <div className="login-content">
      <div className="content-container">
        <div className="login-content__title">Simple & Secure Budgeting</div>
      </div>
    </div> */}
  </div>
);

const mapDispatchToProps = dispatch => ({
  // startLogin prop is going to dispatch the
  // startLogin action.
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
