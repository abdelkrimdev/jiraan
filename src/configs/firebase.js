import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyAdYB18S8x3yhhLa7Gu_p9VvZNmSNlL6zs',
  authDomain: 'jiraan-95d20.firebaseapp.com',
  databaseURL: 'https://jiraan-95d20.firebaseio.com',
  projectId: 'jiraan-95d20',
  storageBucket: 'jiraan-95d20.appspot.com',
  messagingSenderId: '913166699986'
}

const app = firebase.initializeApp(config)

export default app
