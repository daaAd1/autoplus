import React from 'react';
import './FinalFormContainer.css';
import FinalForm from './FinalForm';

class FinalFormContainer extends React.Component {
  render() {
    return (
      <div className="FinalFormContainer">
        <div>
          <h1 className="FinalFormContainer-h1">Final form</h1>
          <FinalForm />
        </div>
      </div>
    );
  }
}

export default FinalFormContainer;
