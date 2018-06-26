import React from 'react';
import CarCard from './CarCard';

const CarPicker = (props) => {
  const { carList } = props;
  return (
    <div>
      {Object.keys(carList).map((key) => (
        <CarCard
          key={key}
          carName={carList[key].name}
          imgSrc={`src/img/car${key + 1}.jpeg`}
          price={`${carList[key].price} kr/day`}
        />
      ))}
    </div>
  );
};

export default CarPicker;
