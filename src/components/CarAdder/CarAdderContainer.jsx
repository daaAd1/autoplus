import React from 'react';
import './CarAdderContainer.css';
import CarAdder from './CarAdder';
import firestore from '../../firestore';
import storage from '../../storage';

const INITIAL_STATE = {
  name: '',
  description: '',
  price: '',
  images: [],
  isLoading: false,
  error: '',
};

class CarAdderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.addNewCar = this.addNewCar.bind(this);
    this.selectImages = this.selectImages.bind(this);
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

  handleDescriptionChange(value) {
    this.setState({
      description: value,
    });
  }

  handlePriceChange(value) {
    this.setState({
      price: value,
    });
  }

  addNewCar() {
    this.setState({
      isLoading: true,
    });
    this.addDataToFirestoreAndStorage();
  }

  addDataToFirestoreAndStorage() {
    const { name, description, price } = this.state;
    firestore
      .addCarToCollection(name, description, price)
      .then(() => {
        this.uploadAllImagesToStorage();
      })
      .catch((error) => {
        this.setErrorMessageAndTurnOffLoader(error.message);
      });
  }

  uploadAllImagesToStorage() {
    const { name, images } = this.state;
    let key = 0;
    firestore
      .getCarImageCount(name)
      .then((snapshot) => {
        if (snapshot.data() !== undefined) {
          key = snapshot.data().count;
        }
        images.forEach((image) => {
          this.addImgCountToFirestore(image, key);
          key += 1;
        });
      })
      .catch((error) => {
        this.setErrorMessageAndTurnOffLoader(error.message);
      });
  }

  addImgCountToFirestore(image, key) {
    const { name } = this.state;
    firestore
      .addImgToCollection(name, key)
      .then(() => {
        this.uploadImgToStorage(image, key);
      })
      .catch((error) => {
        this.setErrorMessageAndTurnOffLoader(error.message);
      });
  }

  uploadImgToStorage(image, key) {
    const { name } = this.state;
    storage
      .uploadCarImage(name, key + 1, image)
      .then(() => {
        this.setInitialState();
      })
      .catch((error) => {
        this.setErrorMessageAndTurnOffLoader(error.message);
      });
  }

  setInitialState() {
    this.setState(INITIAL_STATE);
  }

  selectImages(images) {
    this.setState({
      images,
    });
  }

  render() {
    const { name, description, price, images, isLoading, error } = this.state;

    return (
      <div className="CarAdderContainer">
        <div>
          <h1 className="CarAdderContainer-h1">Add new car to shop</h1>
          {!!error && <p>{error}</p>}
          {!isLoading ? (
            <CarAdder
              name={name}
              description={description}
              price={price}
              images={images}
              addNewCar={this.addNewCar}
              onNameChange={this.handleNameChange}
              onDescriptionChange={this.handleDescriptionChange}
              onPriceChange={this.handlePriceChange}
              selectImages={this.selectImages}
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
