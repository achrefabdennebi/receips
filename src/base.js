import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBRMhtr1fFRfMUuKY2KfYz9fP1DLNMRZGI",
  authDomain: "boitte-recette.firebaseapp.com",
  databaseURL: "https://boitte-recette-default-rtdb.europe-west1.firebasedatabase.app"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
