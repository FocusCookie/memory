import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider, AuthProvider } from "reactfire";
import { firebaseConfig } from "./services/firebase.service";
import { getAuth } from "firebase/auth";
const auth = getAuth();
ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <AuthProvider sdk={auth}>
      <Suspense fallback={<h3>loading...</h3>}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Suspense>
    </AuthProvider>
  </FirebaseAppProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
