import firebase from 'firebase/compat/app';
import { getDatabase, ref, onValue,  child, get } from "firebase/database";
firebase.initializeApp( {
    apiKey: "AIzaSyDQot1m47QSqoL0OpuvRPn1AzX7xsvDgjQ",
    authDomain: "store-react-2b75f.firebaseapp.com",
    projectId: "store-react-2b75f",
    storageBucket: "store-react-2b75f.appspot.com",
    messagingSenderId: "140241571210",
    appId: "1:140241571210:web:76c6eeb66fb2aa92e34c73",
    measurementId: "G-PNZ6JV06RG"
  })

  const dbRef = ref(getDatabase());

export const getProductCard = () => {
  get(child(dbRef, `productCard/`)).then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      return "No data available";
    }
  }).catch((error) => {
    console.error(error);
  });
}
 
