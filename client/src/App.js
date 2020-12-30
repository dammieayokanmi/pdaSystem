import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layouts/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";
import "./App.css";
import Theme from "./Theme";
import PatientState from "./context/patient/PatientState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from './utils/setAuthToken';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}


const App = () => {
  return (
    <Theme>
      <AuthState>
        <PatientState>
          <AlertState>
            <Router>
              <Fragment className="App">
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
                <Alerts />
              </Fragment>
            </Router>
          </AlertState>
        </PatientState>
      </AuthState>
    </Theme>
  );
};

export default App;
