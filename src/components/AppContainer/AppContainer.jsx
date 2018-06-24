import React from 'react';
import App from '../../App';

/*  global localStorage: false, console: false */

class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carRentProperties: {
        startDate: localStorage.getItem('startDate') || null,
        endDate: localStorage.getItem('endDate') || null,
        additionalOptions: {},
        finalForm: {
          name: localStorage.getItem('name') || '',
          email: localStorage.getItem('email') || '',
          pickup: localStorage.getItem('pickup') || 'Keflavik',
        },
      },
    };

    this.handleDatesChange = this.handleDatesChange.bind(this);
    this.saveFormData = this.saveFormData.bind(this);
  }

  handleDatesChange(startDate, endDate) {
    this.setState({
      carRentProperties: {
        ...this.state.carRentProperties,
        startDate,
        endDate,
      },
    });
  }

  saveFormData(name, email, pickup) {
    this.setState({
      carRentProperties: {
        ...this.state.carRentProperties,
        finalForm: {
          ...this.state.carRentProperties.finalForm,
          name,
          email,
          pickup,
        },
      },
    });
  }

  render() {
    const { carRentProperties } = this.state;
    return (
      <App
        carRentProperties={carRentProperties}
        onFormUnmount={this.saveFormData}
        onDatesChange={this.handleDatesChange}
      />
    );
  }
}

export default AppContainer;
