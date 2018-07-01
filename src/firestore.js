import { firestore } from './firebase';

const addCarToCollection = (name, price) => firestore.collection('cars').add({ name, price });
const addImgToCollection = (name, key) =>
  firestore
    .collection('img')
    .doc(name)
    .set({ count: key });

export default { addCarToCollection, addImgToCollection };
