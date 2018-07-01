import { firestore } from './firebase';

const addCarToCollection = (name, description, price) =>
  firestore
    .collection('cars')
    .doc(name)
    .set({ name, description, price });

const addImgToCollection = (name, key) =>
  firestore
    .collection('img')
    .doc(name)
    .set({ count: Number(key) + 1 });

const getCarImageCount = (name) =>
  firestore
    .collection('img')
    .doc(name)
    .get();

export default { addCarToCollection, addImgToCollection, getCarImageCount };
