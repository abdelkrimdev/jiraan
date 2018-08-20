import { auth } from '../configs/firebase'

export const signUp = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password)
}

export const signIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password)
}

export const getCurrentUser = (getUser, catchError) => {
  return auth.onAuthStateChanged(getUser, catchError)
}

export const signOut = () => {
  return auth.signOut()
}
