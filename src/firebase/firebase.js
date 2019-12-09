import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const prodConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

const devConfig = {
  apiKey: process.env.FIREBASE_API_KEY_DEV,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN_DEV,
  databaseURL: process.env.FIREBASE_DATABASE_URL_DEV,
  projectId: process.env.FIREBASE_PROJECT_ID_DEV,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET_DEV,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID_DEV,
  appId: process.env.FIREBASE_APP_ID_DEV
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope("profile");
provider.addScope("email");

export { db, auth, provider };
