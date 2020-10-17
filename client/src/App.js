import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SelectPatient from './components/pages/SelectPatient';
import AllPatients from './components/pages/AllPatients';
import './App.css';
import Theme from './Theme';

import PatientState from './context/patient/PatientState';

const App = () => {
  return (
    <Theme>
      <PatientState>
    <Router>
    <Fragment className="App">
      <Switch>
        <Route exact path="/" component={SelectPatient} />
        <Route exact path="/all_patients" component={AllPatients} />
      </Switch>
    </Fragment>
    </Router>
    </PatientState>
    </Theme>
      );
}

export default App;
