import firebase from "firebase/compat/app";
import { collection, addDoc, getDocs, doc, getDoc, onSnapshot } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase, ref, child, get, set } from "firebase/database";

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

// Add data on server

const foo1 = async () => {
	try {
		const docRef = await addDoc(collection(db, "productCard"), {
			first: "Ada",
			last: "Lovelace",
			born: 1815,
		});
		console.log("Document written with ID: ", docRef.id);
	} catch (e) {
		console.error("Error adding document: ", e);
	}
};

const foo = (data: any) => {
	console.log(data)
}

// Reading data from the server

export const getDataFu = {
	getData() {
		const dbRef = ref(getDatabase());
		get(child(dbRef, `productCard/`))
			.then((snapshot) => {
				foo(snapshot.val())
			})
			.catch((error) => {
				console.error(error);
			});
	},

};


export function createNewGood(count:string, name:string, price:string) {
	const id = Date.now();
	const db = getDatabase();
	set(ref(db, 'productCard/' + id), {
		count: count,
		id: id,
		name: name,
		price: price,
	});
}