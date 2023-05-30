console.log('yo');
window.addEventListener('mouseup', word);

function word() {
    console.log('word selected');
    let select = window.getSelection().toString();
    console.log(select);

    if (select.length > 0) {
        
        chrome.runtime.sendMessage({
            text: select,
            type: 'con'
        }

        );
    } else {
        console.log('cannot add or buy item without selecting price');
    }
}

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoTA7cT9RT50ub8brgIqTsJmGtx-21f0M",
  authDomain: "billionaire-shopping-game.firebaseapp.com",
  projectId: "billionaire-shopping-game",
  storageBucket: "billionaire-shopping-game.appspot.com",
  messagingSenderId: "492742271157",
  appId: "1:492742271157:web:5796af6506e4ea54ed9efc",
  measurementId: "G-6ZBQD90E6D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

import { doc, setDoc } from "firebase/firestore";
async function add(data) {
  // Add a new document in collection "cities"
  await setDoc(doc(db, "cities", "LA"), {
      name: data
  });
}