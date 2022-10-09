import { initializeApp } from 'firebase/app';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBqtEyv4aBfMNMDDklhDvQrZofKuOcw4aM",
    authDomain: "weather-app-dd62d.firebaseapp.com",
    projectId: "weather-app-dd62d",
    storageBucket: "weather-app-dd62d.appspot.com",
    messagingSenderId: "42565669051",
    appId: "1:42565669051:web:538b73c8ec1afd6c44999e"
};

const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
    signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if(!userAuth) return;

    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { username, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                username,
                email,
                createdAt,
                ...additionalInformation = {},
            });
        } catch (error) {

        }
    }

    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);
