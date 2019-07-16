import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./helpers/PrivateRoute";
import PropTypes from "prop-types";
import Destinations from "./components/pages/Destinations";
import Login from "./components/pages/Login";
import NoMatch from "./components/templates/NoMatch";

class App extends Component {
  static propTypes = {
    userAuth: PropTypes.bool.isRequired
  };

  render() {
    const { userAuth } = this.props;
    return (
      <Router basename={process.env.REACT_APP_BASENAME}>
        <Switch>
          <Route
            path="/login"
            {...this.props}
            render={props => <Login {...props} />}
          />
          <PrivateRoute
            exact
            path="/destinations"
            component={Destinations}
            userAuth={userAuth}
            {...this.props}
          />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = store => ({
  userAuth: store.userAuth.auth_status
});

export default connect(mapStateToProps)(App);
