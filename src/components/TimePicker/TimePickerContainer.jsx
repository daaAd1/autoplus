import React from 'react';
import './TimePickerContainer.css';
import TimePicker from './TimePicker';

class TimePickerContainer extends React.Component {
  render() {
    return (
      <div className="TimePickerContainer">
        <div>
          <h1 className="TimePickerContainer-h1">When</h1>
          <TimePicker />
        </div>
      </div>
    );
  }
}

export default TimePickerContainer;
