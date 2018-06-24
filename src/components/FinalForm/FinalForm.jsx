import React from 'react';
import PropTypes from 'prop-types';
import './FinalForm.css';

const propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  pickup: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  onPickupChange: PropTypes.func.isRequired,
};

const defaultProps = {};

const FinalForm = (props) => {
  const { name, email, pickup } = props;

  return (
    <form className="FinalForm" key={1}>
      <label htmlFor="name">
        Name
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(event) => props.onNameChange(event.target.value)}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          id="email"
          type="text"
          name="email"
          value={email}
          onChange={(event) => props.onEmailChange(event.target.value)}
        />
      </label>
      <div className="FinalForm-pickup-radio">
        <p className="FinalForm-pickup-h2">Pickup location</p>
        <label htmlFor="radio-1">
          <input
            name="pickup"
            type="radio"
            id="radio-1"
            value="Keflavik"
            checked={pickup === 'Keflavik'}
            onChange={(event) => props.onPickupChange(event.target.value)}
          />
          Keflavik
        </label>
        <label htmlFor="radio-2">
          <input
            name="pickup"
            type="radio"
            id="radio-2"
            value="BSI"
            checked={pickup === 'BSI'}
            onChange={(event) => props.onPickupChange(event.target.value)}
          />
          BSI
        </label>
      </div>
      <button
        className="FinalForm-button"
        onClick={(event) => {
          event.preventDefault();
        }}
      >
        Order car
      </button>
    </form>
  );
};

FinalForm.propTypes = propTypes;
FinalForm.defaultProps = defaultProps;

export default FinalForm;
