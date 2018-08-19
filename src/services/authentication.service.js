import { auth } from '../configs/firebase'

export const signUp = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password)
}

export const signIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
}

export const getCurrentUser = (getUser) => {
  return auth.onAuthStateChanged(getUser)
}

export const signOut = () => {
  auth.signOut()
}
