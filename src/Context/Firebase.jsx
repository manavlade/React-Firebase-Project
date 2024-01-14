import { useContext, useState, useEffect } from 'react';
import { createContext } from 'react';
import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore'
import { getStorage, ref, uploadBytes,getDownloadURL } from 'firebase/storage'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup
} from 'firebase/auth';

const FirebaseContext = createContext(null);

const firebaseConfig = {
//Your config details 
};

export const useFirebase = () => useContext(FirebaseContext);

const app = initializeApp(firebaseConfig);
const FirebaseAUth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

const googleProvider = new GoogleAuthProvider();

const signInWithEmailAPassword = (email, password) =>
    createUserWithEmailAndPassword(FirebaseAUth, email, password);

const LogInWithEmailAPassword = (email, password) =>
    signInWithEmailAndPassword(FirebaseAUth, email, password);

const signInWithGoogle = () => signInWithPopup(FirebaseAUth, googleProvider);


export const FirebaseProvider = (props) => {

    const handleNewListing = async (name, isbn, price, cover) => {
        const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
        let uploadResult = await uploadBytes(imageRef, cover);
        await addDoc(collection(firestore, 'books'), {
            name,
            isbn,
            price,
            imageURL: uploadResult.ref.fullPath,
            userID: user.uid,
        })
    }
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(FirebaseAUth, (user) => {
            if (user) setUser(user);
            else setUser(null)
        });
    }, [])
    console.log(user);

    const listAllBooks = () => {
        return getDocs(collection(firestore, 'books'));
    };

    const getImageForCard = (path) => {
        return getDownloadURL(ref(storage, path));
    }
    const isLoggedIn = user ? true : false;
    return (
        <FirebaseContext.Provider value={{
            signInWithGoogle, signInWithEmailAPassword,
            LogInWithEmailAPassword, handleNewListing,
            listAllBooks,
            getImageForCard,
             isLoggedIn,
        }}>
            {props.children}
        </FirebaseContext.Provider>
    )
}
