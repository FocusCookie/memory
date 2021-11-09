import "./styles/App.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Game } from "./views/Game/Game";
import { Login } from "./components/Login/Login";
import { Menu } from "./components/Menu/Menu";
import { Button } from "./components/Button/Button";
import { useState } from "react";
import { useFirebaseApp, DatabaseProvider, useUser } from "reactfire";
import { getDatabase } from "firebase/database"; // Firebase v9+

function App() {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  const auth = getAuth();
  const { data: user } = useUser();
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleRegister = async (user) => {
    try {
      setLoginError("");
      setLoadingLogin(true);
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      setLoadingLogin(false);
    } catch (error) {
      setLoadingLogin(false);
      setLoginError(error.message);
    }
  };

  const handleLogin = async (user) => {
    try {
      setLoginError("");
      setLoadingLogin(true);
      await signInWithEmailAndPassword(auth, user.email, user.password);
      setLoadingLogin(false);
    } catch (error) {
      setLoadingLogin(false);
      setLoginError(error.message);
    }
  };

  return (
    <DatabaseProvider sdk={database}>
      <div className="App">
        {user ? (
          <div className="flex flex-col  items-center">
            <Menu initiallyOpen={false}>
              <Button
                label="LOGOUT"
                variant="secondary"
                onClick={() => {
                  auth.signOut();
                }}
              />
            </Menu>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/game">
                  <Game />
                </Route>
              </Switch>
            </Router>
          </div>
        ) : (
          <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-96">
              <Login
                loading={loadingLogin}
                onRegister={handleRegister}
                onLogin={handleLogin}
                error={loginError}
              />
            </div>
          </div>
        )}
      </div>
    </DatabaseProvider>
  );
}

export default App;
