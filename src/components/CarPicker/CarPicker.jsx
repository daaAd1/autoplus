import React from 'react';
import CarCard from './CarCard';
import car1 from '../../img/car.jpeg';
import car2 from '../../img/car2.jpeg';
import car3 from '../../img/car3.jpeg';

class CarPicker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CarCard carName="Volvo" imgSrc={car1} price={'100kr/day'} />
        <CarCard carName="Suzuki" imgSrc={car2} price={'200kr/day'} />
        <CarCard carName="Honda" imgSrc={car3} price={'300kr/day'} />
      </div>
    );
  }
}

export default CarPicker;
