import React from 'react';
import { Route, HashRouter, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import './App.css';
import TimePickerContainer from './components/TimePicker/TimePickerContainer';
import CarPickerContainer from './components/CarPicker/CarPickerContainer';
import AdditionalOptionsContainer from './components/AdditionalOptionsPicker/AdditionalOptionsContainer';
import FinalFormContainer from './components/FinalForm/FinalFormContainer';
import routes from './routes';
import ArrowNavigationContainer from './components/ArrowNavigation/ArrowNavigationContainer';
import CarAdderContainer from './components/CarAdder/CarAdderContainer';

const propTypes = {
  carRentProperties: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    carName: PropTypes.string.isRequired,
    additionalOptions: PropTypes.object.isRequired,
    finalForm: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      pickup: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

const defaultProps = {};

const App = (props) => {
  const { carRentProperties } = props;
  const { startDate, endDate, carName, additionalOptions, finalForm } = carRentProperties;
  const { name, email, pickupLocation } = finalForm;

  return (
    <HashRouter>
      <div>
        <div className="content">
          <Switch>
            <Route
              exact
              path={routes.TIME_PICKER}
              component={() => (
                <TimePickerContainer
                  startDate={startDate}
                  endDate={endDate}
                  onDatesChange={props.onDatesChange}
                />
              )}
            />
            <Route exact path={routes.CAR_PICKER} component={() => <CarPickerContainer />} />
            <Route
              exact
              path={routes.ADDITIONAL_OPTIONS}
              component={() => <AdditionalOptionsContainer />}
            />
            <Route
              exact
              path={routes.FINAL_FORM}
              component={() => <FinalFormContainer onFormUnmount={props.onFormUnmount} />}
            />
            <Route exact path={routes.CAR_ADDER} component={() => <CarAdderContainer />} />
            <Redirect to={routes.TIME_PICKER} />
          </Switch>
        </div>
        <br />
        <br />
        <ArrowNavigationContainer />
      </div>
    </HashRouter>
  );
};

App.propTypes = propTypes;
App.defaultProps = defaultProps;

export default App;
