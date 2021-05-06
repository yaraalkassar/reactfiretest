import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyCv1RSbuxVmwLD7IuN_XxlrR5LvKrpZoMQ",
  authDomain: "test-832e3.firebaseapp.com",
  projectId: "test-832e3",
  storageBucket: "test-832e3.appspot.com",
  messagingSenderId: "119062578272",
  appId: "1:119062578272:web:72e576702fba8d3b2caf05",
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById("root")
);

reportWebVitals();
