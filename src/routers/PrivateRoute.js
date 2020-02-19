import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

export const PrivateRoute = props => <Route {...props} />;

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
