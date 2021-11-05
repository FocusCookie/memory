import "./styles/App.css";
import { useFirebaseApp, useUser } from "reactfire";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Game } from "./views/Game/Game";
import { Login } from "./components/Login/Login";
import { Button } from "./components/Button/Button";
import { useState } from "react";

function App() {
  const firebase = useFirebaseApp();
  const auth = getAuth();
  const { data: user } = useUser();
  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleRegister = async (user) => {
    try {
      setLoadingLogin(true);
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      setLoadingLogin(false);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  const handleLogin = async (user) => {
    try {
      setLoadingLogin(true);
      await signInWithEmailAndPassword(auth, user.email, user.password);
      setLoadingLogin(false);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      {user ? (
        <Router>
          <Switch>
            <Route exact path="/">
              <Button
                label="LOGOUT"
                variant="secondary"
                onClick={() => {
                  auth.signOut();
                }}
              />
              <Home />
            </Route>
            <Route path="/game">
              <Game />
            </Route>
          </Switch>
        </Router>
      ) : (
        <div class="w-screen h-screen flex flex-col justify-center items-center">
          <div className="w-96">
            <Login
              loading={loadingLogin}
              onRegister={handleRegister}
              onLogin={handleLogin}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
