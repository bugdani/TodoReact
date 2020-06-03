import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyuk62K9O8jfXdmVGsCYZGlKuSJZuQN4U",
  authDomain: "todo-81c58.firebaseapp.com",
  databaseURL: "https://todo-81c58.firebaseio.com",
  projectId: "todo-81c58",
  storageBucket: "todo-81c58.appspot.com",
  messagingSenderId: "936934637042",
  appId: "1:936934637042:web:4a608f57ce44c9d87bff6b",
};

export default firebase.initializeApp(firebaseConfig);
