import firebase from '../configs/firebase';

export const signUp = (email, password) => {
    return await firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signIn = (email, password) => {
    return await firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
    firebase.auth().signOut();
};
