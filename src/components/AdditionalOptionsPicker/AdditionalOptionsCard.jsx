import React from 'react';
import './AdditionalOptionsCard.css';

const AdditionalOptionsCard = (props) => {
  const { optionText } = props;

  return (
    <div className="AdditionalOptionsCard">
      <input
        className="AdditionalOptionsCard-input"
        id={`option${optionText}`}
        name="option"
        type="checkbox"
      />
      <label className="AdditionalOptionsCard-label" htmlFor={`option${optionText}`}>
        {optionText}
      </label>
    </div>
  );
};

export default AdditionalOptionsCard;
