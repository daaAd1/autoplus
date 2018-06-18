import React from 'react';
import { Route, HashRouter, Redirect } from 'react-router-dom';
import './App.css';
import TimePickerContainer from './components/TimePicker/TimePickerContainer';
import CarPickerContainer from './components/CarPicker/CarPickerContainer';
import AdditionalOptionsContainer from './components/AdditionalOptionsPicker/AdditionalOptionsContainer';
import FinalFormContainer from './components/FinalForm/FinalFormContainer';
import routes from './routes';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="content">
            <Redirect from="/" to={routes.TIME_PICKER} />
            <Route exact path={routes.TIME_PICKER} component={() => <TimePickerContainer />} />
            <Route exact path={routes.CAR_PICKER} component={() => <CarPickerContainer />} />
            <Route
              exact
              path={routes.ADDITIONAL_OPTIONS}
              component={() => <AdditionalOptionsContainer />}
            />
            <Route exact path={routes.FINAL_FORM} component={() => <FinalFormContainer />} />
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </HashRouter>
    );
  }
}

export default App;
