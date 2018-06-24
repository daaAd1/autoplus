import React from 'react';
import PropTypes from 'prop-types';
import './FinalFormContainer.css';
import FinalForm from './FinalForm';

/*  global localStorage: false, console: false */

const propTypes = {
  onFormUnmount: PropTypes.func.isRequired,
};

const defaultProps = {};

class FinalFormContainer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: localStorage.getItem('name') || '',
      email: localStorage.getItem('email') || '',
      pickup: localStorage.getItem('pickup') || 'Keflavik',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePickupChange = this.handlePickupChange.bind(this);
  }

  componentWillUnmount() {
    const { name, email, pickup } = this.state;
    this.props.onFormUnmount(name, email, pickup);
  }

  handleNameChange(name) {
    this.setState({
      name,
    });
    localStorage.setItem('name', name);
  }

  handleEmailChange(email) {
    this.setState({
      email,
    });
    localStorage.setItem('email', email);
  }

  handlePickupChange(pickup) {
    this.setState({
      pickup,
    });
    localStorage.setItem('pickup', pickup);
  }

  render() {
    const { name, email, pickup } = this.state;

    return (
      <div className="FinalFormContainer">
        <div>
          <h1 className="FinalFormContainer-h1">Final form</h1>
          <FinalForm
            name={name}
            email={email}
            pickup={pickup}
            onNameChange={this.handleNameChange}
            onEmailChange={this.handleEmailChange}
            onPickupChange={this.handlePickupChange}
          />
        </div>
      </div>
    );
  }
}

FinalFormContainer.propTypes = propTypes;
FinalFormContainer.defaultProps = defaultProps;

export default FinalFormContainer;
