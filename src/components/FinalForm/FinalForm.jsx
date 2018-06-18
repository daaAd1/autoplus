import React from 'react';
import './FinalForm.css';

class FinalForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="FinalForm">
        <label htmlFor="name">
          Name
          <input id="name" type="text" />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" type="text" />
        </label>
        <div className="FinalForm-pickup-radio">
          <p className="FinalForm-pickup-h2">Pickup location</p>
          <label htmlFor="radio-1">
            <input checked name="pickup" type="radio" id="radio-1" />
            Keflavik
          </label>
          <label htmlFor="radio-2">
            <input name="pickup" type="radio" id="radio-2" />
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
  }
}

export default FinalForm;
