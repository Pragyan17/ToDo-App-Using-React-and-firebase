  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDoiAiRohuYqvPP3whVkcjqTGq3vEVYnIU",
    authDomain: "todo-app-cp-a79dc.firebaseapp.com",
    databaseURL: "https://todo-app-cp-a79dc-default-rtdb.firebaseio.com",
    projectId: "todo-app-cp-a79dc",
    storageBucket: "todo-app-cp-a79dc.appspot.com",
    messagingSenderId: "871248022823",
    appId: "1:871248022823:web:0b384d6ed82344c2106d02",
    measurementId: "G-3NWQ77H9CR"
  });

  const db = firebaseApp.firestore();

  export default db;