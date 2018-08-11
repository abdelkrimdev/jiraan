import firebase from '../configs/firebase'

export const signUp = (email, password) => {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export const getCurrentUser = (getUser) => {
  return firebase.auth().onAuthStateChanged(getUser)
}

export const signOut = () => {
  firebase.auth().signOut()
}
