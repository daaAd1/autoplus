import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAfMm0e8dLGB1pVMfUxkUqiSjhBqj6cnqQ',
  authDomain: 'autoplus-75d84.firebaseapp.com',
  databaseURL: 'https://autoplus-75d84.firebaseio.com',
  projectId: 'autoplus-75d84',
  storageBucket: 'autoplus-75d84.appspot.com',
  messagingSenderId: '696014313610',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);
const storage = firebase.storage().ref();

export { firestore, storage };
