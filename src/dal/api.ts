import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, child, get, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useAppDispatch } from "../redux/hooks/redux";
import { authStatus, registrationStatus, showUserName, userEmail, userPassword } from "../redux/reducers/userAuthSlice";
import { useNavigate } from "react-router-dom";




const firebaseConfig = {
	apiKey: "AIzaSyDQot1m47QSqoL0OpuvRPn1AzX7xsvDgjQ",
	authDomain: "store-react-2b75f.firebaseapp.com",
	databaseURL: "https://store-react-2b75f-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "store-react-2b75f",
	storageBucket: "store-react-2b75f.appspot.com",
	messagingSenderId: "140241571210",
	appId: "1:140241571210:web:76c6eeb66fb2aa92e34c73",
	measurementId: "G-PNZ6JV06RG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const dbRef = ref(getDatabase());

export const getData = () => {
	return get(child(dbRef, `productCard/`)) // RETURN ОБЯЗАТЕЛЬНО
		.then((snapshot) => {
			if (snapshot.exists()) {
				return snapshot.val(); // RETURN ОБЯЗАТЕЛЬНО
			} else {
				console.log("No data available");
			}
		})
		.catch((error) => {
			console.error(error);
		});
};


export function createNewGood(count: string, name: string, price: string) {
	const id = Date.now();
	const db = getDatabase();
	set(ref(db, 'productCard/' + id), {
		count: count,
		id: id,
		name: name,
		price: price,
	});
}


export function createNewUser(email: string, password: string, dispatch: any) {

	const auth = getAuth();
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			//const user = userCredential.user;
			dispatch(userEmail(''))
			dispatch(userPassword(''))
			dispatch(registrationStatus('Registrtion success. Now you can sign in'))
		})
		.catch((error) => {
			//const errorCode = error.code;
			//const errorMessage = error.message;
			// ..
		});
}


export function signIn(email: string, password: string, dispatch: any, redirect: any) {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password, )
		.then((userCredential) => {
			// Signed in 
			dispatch(authStatus(true))
			dispatch(showUserName(email))
			const user = userCredential.user;
			// ..
			redirect("/");
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
}


export function logOut(dispatch: any, redirect: any) {
	const auth = getAuth();
	signOut(auth).then(() => {
		dispatch(authStatus(false))
		dispatch(showUserName(''))
		// Sign-out successful.
		redirect("/");
	}).catch((error) => {
		// An error happened.
	});
}