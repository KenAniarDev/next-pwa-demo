import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';
import { enableIndexedDbPersistence } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCeAfSbG83gVO8K7NamLeJ52333BUrU0Hw',
  authDomain: 'data-persistence-a479f.firebaseapp.com',
  projectId: 'data-persistence-a479f',
  storageBucket: 'data-persistence-a479f.appspot.com',
  messagingSenderId: '439888189744',
  appId: '1:439888189744:web:16c1b266ba3969e68f50f5',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

enableIndexedDbPersistence(db).catch((err) => {
  if (err.code == 'failed-precondition') {
    console.log('failed');
  } else if (err.code == 'unimplemented') {
    console.log('unimplemented');
  }
});
