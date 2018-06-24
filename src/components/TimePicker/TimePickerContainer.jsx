import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './TimePickerContainer.css';
import TimePicker from './TimePicker';

/*  global localStorage: false, console: false */

const propTypes = {
  onDatesChange: PropTypes.func.isRequired,
};

const defaultProps = {};

class TimePickerContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment(localStorage.getItem('startDate'), 'DD MMM YYYY') || null,
      endDate: moment(localStorage.getItem('endDate'), 'DD MMM YYYY') || null,
      focusedInput: localStorage.getItem('focusedInput') || null,
    };

    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.handleFocusChange = this.handleFocusChange.bind(this);
  }

  componentWillUnmount() {
    const { startDate, endDate } = this.state;
    this.props.onDatesChange(startDate.format('DD MMM YYYY'), endDate.format('DD MMM YYYY'));
  }

  handleDatesChange({ startDate, endDate }) {
    let formattedStartDate = null;
    let formattedEndDate = null;
    if (startDate !== null) {
      formattedStartDate = startDate.format('DD MMM YYYY');
    }
    if (endDate !== null) {
      formattedEndDate = endDate.format('DD MMM YYYY');
    }

    this.setState({
      startDate,
    });
    localStorage.setItem('startDate', formattedStartDate);
    this.setState({
      endDate,
    });
    localStorage.setItem('endDate', formattedEndDate);
  }

  handleFocusChange(focusedInput) {
    this.setState({
      focusedInput,
    });
    localStorage.setItem('focusedInput', focusedInput);
  }

  render() {
    const { startDate, endDate, focusedInput } = this.state;
    return (
      <div className="TimePickerContainer">
        <div>
          <h1 className="TimePickerContainer-h1">When</h1>
          <TimePicker
            startDate={startDate}
            endDate={endDate}
            focusedInput={focusedInput}
            onDatesChange={this.handleDatesChange}
            onFocusChange={this.handleFocusChange}
          />
        </div>
      </div>
    );
  }
}

TimePickerContainer.propTypes = propTypes;
TimePickerContainer.defaultProps = defaultProps;

export default TimePickerContainer;
