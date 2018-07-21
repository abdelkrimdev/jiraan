import firebase from '../configs/firebase';

export const signUp = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signIn = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const currentUser = () => {
    return firebase.auth().currentUser;
};

export const signOut = () => {
    firebase.auth().signOut();
};
