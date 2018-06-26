import firestore from './firebase';

const onceGetAllCars = () => firestore.collection('cars').get();
const listenToAllCarsChanges = () => firestore.collection('cars');

export default { onceGetAllCars, listenToAllCarsChanges };
