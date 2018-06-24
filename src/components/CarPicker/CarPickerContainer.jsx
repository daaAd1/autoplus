import React from 'react';
import './CarPickerContainer.css';
import CarPicker from './CarPicker';

class CarPickerContainer extends React.Component {
  render() {
    return (
      <div className="CarPickerContainer">
        <div>
          <h1 className="CarPickerContainer-h1">Select car</h1>
          <CarPicker />
        </div>
      </div>
    );
  }
}

export default CarPickerContainer;
