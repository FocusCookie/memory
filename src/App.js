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
import {
  useFirebaseApp,
  DatabaseProvider,
  useUser,
  useDatabaseListData,
} from "reactfire";
import { getDatabase, ref, remove } from "firebase/database"; // Firebase v9+
import { setPlayer } from "./services/player.service.mjs";

function App() {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  const auth = getAuth();
  const { data: loggedinUser } = useUser();
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [userPlayer, setUserPlayer] = useState(null);

  //TODO ersetzen durch players hook
  const playersListRef = ref(database, "players");
  const onlinePlayers = useDatabaseListData(playersListRef, {
    idField: "id",
  });

  const setPlayerOnline = async (onlinePlayers, user) => {
    if (
      !onlinePlayers.data ||
      !onlinePlayers.data.find((player) => player.uid === user.uid)
    ) {
      const player = await setPlayer(user);
      setUserPlayer(player);
    }
  };

  const handleRegister = async (user) => {
    try {
      setLoginError("");
      setLoadingLogin(true);
      const registerResponse = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      setPlayerOnline(onlinePlayers, registerResponse.user);

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

      const loginResponse = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      setPlayerOnline(onlinePlayers, loginResponse.user);

      setLoadingLogin(false);
    } catch (error) {
      setLoadingLogin(false);
      setLoginError(error.message);
      console.log(error);
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    auth.signOut();
    await remove(userPlayer);
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
