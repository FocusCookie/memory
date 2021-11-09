import "./styles/App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { Home } from "./views/Home/Home";
import { Game } from "./views/Game/Game";
import { Login } from "./components/Login/Login";
import { Menu } from "./components/Menu/Menu";
import { Button } from "./components/Button/Button";
import { useFirebaseApp, DatabaseProvider, useUser } from "reactfire";
import { getDatabase } from "firebase/database"; // Firebase v9+
import {
  setPlayerOnline,
  removePlayerOnline,
} from "./services/player.service.mjs";
import { register, login, logout } from "./services/auth.service.mjs";
function App() {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  const auth = getAuth();
  const { data: loggedinUser } = useUser();
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleRegister = async (user) => {
    try {
      setLoginError("");
      setLoadingLogin(true);
      await register(auth, user);
      setLoadingLogin(false);
    } catch (error) {
      setLoadingLogin(false);
      setLoginError(error.message);
      console.log(error);
      console.log(error.message);
    }
  };

  const handleLogin = async (user) => {
    try {
      setLoginError("");
      setLoadingLogin(true);
      await login(auth, user);
      setLoadingLogin(false);
    } catch (error) {
      setLoadingLogin(false);
      setLoginError(error.message);
      console.log(error);
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    await logout(auth, loggedinUser);
  };

  return (
    <DatabaseProvider sdk={database}>
      <div className="App">
        {loggedinUser ? (
          <div className="flex flex-col gap-4 items-center">
            <Menu initiallyOpen={false}>
              <Button
                label="LOGOUT"
                variant="secondary"
                onClick={() => {
                  handleLogout();
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
