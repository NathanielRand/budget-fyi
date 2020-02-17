import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header";

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  // Rest operator to grab remaining stuff
  // we did not de-structure (isAuthenticated, component)
  // and give us access to it.
  ...rest
}) => {
  <Route
    {...rest}
    component={props =>
      isAuthenticated ? (
        // If authenticated:
        // Instance of component that gets correct props
        <div>
          <Header />
          <Component {...props} />
        </div>
      ) : (
        // If not authenticated:
        // Redirect to login page
        <Redirect to="/" />
      )
    }
  />;
};

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
