import React from 'react';
import ImageUploader from 'react-images-upload';
import './CarAdder.css';

const CarAdder = (props) => {
  const { name, description, price, image } = props;
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
      <label htmlFor="description">
        Description
        <input
          onChange={(event) => props.onDescriptionChange(event.target.value)}
          type="text"
          name="description"
          id="description"
          value={description}
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
      <ImageUploader
        withIcon
        buttonText="Upload one or more car images"
        onChange={(images) => props.selectImages(images)}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
        withPreview
      />
      <button disabled={name === '' || price === ''} type="button" onClick={props.addNewCar}>
        Add new car
      </button>
    </div>
  );
};

export default CarAdder;
