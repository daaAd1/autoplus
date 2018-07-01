import React from 'react';
import './CarAdderContainer.css';
import CarAdder from './CarAdder';
import firestore from '../../firestore';
import storage from '../../storage';

class CarAdderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      price: '',
      image: {},
      isLoading: false,
      error: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.addNewCar = this.addNewCar.bind(this);
    this.selectImage = this.selectImage.bind(this);
  }

  setErrorMessageAndTurnOffLoader(message) {
    this.setState({
      error: message,
      isLoading: false,
    });
  }

  handleNameChange(value) {
    this.setState({
      name: value,
    });
  }

  handlePriceChange(value) {
    this.setState({
      price: value,
    });
  }

  addNewCar() {
    const { name, price, image } = this.state;
    firestore.addImgToCollection(name, '1');

    this.setState({
      isLoading: true,
    });
    firestore
      .addCarToCollection(name, price)
      .then(() => {
        storage
          .uploadCarImage(name, 'abc', image)
          .then(() => {
            this.setState({
              name: '',
              price: '',
              isLoading: false,
            });
          })
          .catch((error) => {
            this.setErrorMessageAndTurnOffLoader(error.message);
          });
      })
      .catch((error) => {
        this.setErrorMessageAndTurnOffLoader(error.message);
      });
  }

  selectImage(image) {
    this.setState({
      image,
    });
  }

  render() {
    const { name, price, isLoading, error } = this.state;
    return (
      <div className="CarAdderContainer">
        <div>
          <h1 className="CarAdderContainer-h1">Add new car to shop</h1>
          {!!error && <p>{error}</p>}
          {!isLoading ? (
            <CarAdder
              name={name}
              price={price}
              addNewCar={this.addNewCar}
              onPriceChange={this.handlePriceChange}
              onNameChange={this.handleNameChange}
              selectImage={this.selectImage}
            />
          ) : (
            <div className="CarAdderContainer-loader">Loading...</div>
          )}
        </div>
      </div>
    );
  }
}

export default CarAdderContainer;
