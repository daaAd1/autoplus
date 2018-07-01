import { storage } from './firebase';

const uploadCarImage = (name, key, image) => storage.child(`car-img/${name}/${key}`).put(image);

export default { uploadCarImage };
