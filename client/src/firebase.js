import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAxPxBpweKr3vXl4wsc0EN6MFhnQjJRO1Y",
  authDomain: "teachback-d21c7.firebaseapp.com",
  projectId: "teachback-d21c7",
  storageBucket: "teachback-d21c7.appspot.com",
  messagingSenderId: "884107687341",
  appId: "1:884107687341:web:9ed94f9651af8389ca5d24"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const GoogleProvider = new firebase.auth.GoogleAuthProvider();
  const GithubProvider = new firebase.auth.GithubAuthProvider();


  export { auth, GoogleProvider, GithubProvider, db };