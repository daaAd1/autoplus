import React from 'react';
import AdditionalOptionsCard from './AdditionalOptionsCard';

class CarPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AdditionalOptionsCard optionText="Insurance" />
        <AdditionalOptionsCard optionText="Another seat" />
        <AdditionalOptionsCard optionText="More gas" />
      </div>
    );
  }
}

export default CarPicker;
