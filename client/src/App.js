import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layouts/Alerts";
import "./App.css";
import Theme from "./Theme";
import PatientState from "./context/patient/PatientState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

const App = () => {
  return (
    <Theme>
      <AuthState>
        <PatientState>
          <AlertState>
            <Router>
              <Fragment className="App">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </Fragment>
            </Router>
          </AlertState>
        </PatientState>
      </AuthState>
    </Theme>
  );
};

export default App;
