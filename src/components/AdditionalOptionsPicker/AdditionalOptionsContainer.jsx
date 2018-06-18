import React from 'react';
import './AdditionalOptionsContainer.css';
import AdditionalOptions from './AdditionalOptions';

class AdditionalOptionsContainer extends React.Component {
  render() {
    return (
      <div className="AdditionalOptionsContainer">
        <div>
          <h1 className="AdditionalOptionsContainer-h1">Additional options</h1>
          <AdditionalOptions />
        </div>
      </div>
    );
  }
}

export default AdditionalOptionsContainer;
