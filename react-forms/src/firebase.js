import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBUushi_X5yc8OWsaDuxZIMHhM9Gl9n8_Q",
  authDomain: "forms-test-76fd7.firebaseapp.com",
  databaseURL: "https://forms-test-76fd7.firebaseio.com",
  projectId: "forms-test-76fd7",
  storageBucket: "forms-test-76fd7.appspot.com",
  messagingSenderId: "1015519255781"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

firebaseDB.ref('user').orderByChild('lastname').equalTo('Nash').once('value')
  .then(sc => console.log(sc.val()));

export {
  firebase,
  firebaseDB,
  googleAuth
}