import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
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
