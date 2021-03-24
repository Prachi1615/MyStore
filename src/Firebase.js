// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCRi0lFdpSTBEXmZY24NmL6bNc75p9_HLA",
    authDomain: "dhuandhar-store.firebaseapp.com",
    projectId: "dhuandhar-store",
    storageBucket: "dhuandhar-store.appspot.com",
    messagingSenderId: "833300160512",
    appId: "1:833300160512:web:73399f4b3fe55d7ee278e5",
    measurementId: "G-KBQCJ8C552"
};
try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack);
    }
}
const fire = firebase;
export default fire;