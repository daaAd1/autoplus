import React from 'react';
import './ArrowNavigation.css';

const ArrowNavigation = (props) => {
  const { isFirst, isLast, isDisabled } = props;
  return (
    <div className="ArrowNavigation">
      {!isFirst && (
        <button
          onClick={props.onBackClick}
          className="ArrowNavigation-button ArrowNavigation-back-button"
        >
          PREVIOUS
        </button>
      )}
      {!isLast && (
        <button
          onClick={props.onNextClick}
          disabled={isDisabled}
          className="ArrowNavigation-button"
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default ArrowNavigation;
