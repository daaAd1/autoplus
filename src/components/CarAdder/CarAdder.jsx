import React from 'react';
import './CarAdder.css';

const CarAdder = (props) => {
  const { name, price } = props;
  return (
    <div className="CarAdder">
      <h1 className="CarAdder-h1">Car properties</h1>
      <label htmlFor="name">
        Name
        <input
          onChange={(event) => props.onNameChange(event.target.value)}
          type="text"
          name="name"
          id="name"
          value={name}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          onChange={(event) => props.onPriceChange(event.target.value)}
          type="text"
          name="price"
          id="price"
          value={price}
        />
      </label>
      <div>
        <button type="button">Upload car image</button>
        <input
          onChange={(event) => props.selectImage(event.target.files[0])}
          type="file"
          accept="image/*"
          name="image"
          className="CarAdder-uploadInput"
        />
      </div>

      <button disabled={name === '' || price === ''} type="button" onClick={props.addNewCar}>
        Add new car
      </button>
    </div>
  );
};

export default CarAdder;
