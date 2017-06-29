import * as firebase from 'firebase'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAPTajXtLiom21hJkMVt-AyqhLuAk_pMOg",
    authDomain: "redos-6092a.firebaseapp.com",
    databaseURL: "https://redos-6092a.firebaseio.com",
    storageBucket: "redos-6092a.appspot.com",
    messagingSenderId: "720991976661"
  };

const firebaseApp = firebase.initializeApp(config);

const rootRef = firebaseApp.database()
export default rootRef
