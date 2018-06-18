import React from 'react';
import './CarCard.css';

const CarCard = (props) => {
  const { carName, imgSrc, price } = props;
  return (
    <div className="CarCard">
      <h2>{carName}</h2>
      <img className="CarCard-img" src={imgSrc} alt="car in card component" />
      <p className="CarCard-price">{price}</p>
    </div>
  );
};

export default CarCard;
