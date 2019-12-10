import Rebase from "re-base";
import firebase from "firebase";

const config = {
  apiKey: "XXXXXX",
  authDomain: "XXXXXX",
  databaseURL: "XXXXXX",
  projectId: "XXXXXX",
  storageBucket: "XXXXXX",
  messagingSenderId: "XXXXXX"
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());
const auth = firebase.auth();
const functions = firebase.functions();

export { app, base, auth, functions };
