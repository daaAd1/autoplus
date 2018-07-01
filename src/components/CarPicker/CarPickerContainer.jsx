import React from 'react';
import './CarPickerContainer.css';
import CarPicker from './CarPicker';
import firestore from '../../firestore';

class CarPickerContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carList: [],
      isDataLoaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillUnmount() {
    this.isCancelled = true;
  }

  fetchData() {
    firestore.accessToCarCollection().onSnapshot((collection) => {
      const carList = [];
      collection.forEach((doc) => {
        carList.push(doc.data());
      });
      !this.isCancelled &&
        this.setState({
          carList,
          isDataLoaded: true,
        });
    });
  }

  render() {
    const { carList, isDataLoaded } = this.state;
    return (
      <div className="CarPickerContainer">
        <div>
          <h1 className="CarPickerContainer-h1">Select car</h1>

          {isDataLoaded ? (
            <CarPicker carList={carList} />
          ) : (
            <div className="CarPickerContainer-loader">Loading...</div>
          )}
        </div>
      </div>
    );
  }
}

export default CarPickerContainer;
