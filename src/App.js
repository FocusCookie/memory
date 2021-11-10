import "./styles/App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Offline } from "./views/Offline/Offline";
import { Online } from "./views/Online/Online";
import { OnlineGameView } from "./views/Online/OnlineGameView";
import { OnlineCreateGame } from "./views/Online/OnlineCreateGame";
import { Login } from "./components/Login/Login";
import { useFirebaseApp, DatabaseProvider, useUser } from "reactfire";
import { getDatabase } from "firebase/database"; // Firebase v9+
import { register, login } from "./services/auth.service.mjs";

function App() {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  const { data: loggedinUser } = useUser();
  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleRegister = async (user) => {
    try {
      setLoginError("");
      setLoadingLogin(true);
      await register(user);
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
      await login(user);
      setLoadingLogin(false);
    } catch (error) {
      setLoadingLogin(false);
      setLoginError(error.message);
      console.log(error);
      console.log(error.message);
    }
  };

  return (
    <DatabaseProvider sdk={database}>
      <div className="App">
        {loggedinUser ? (
          <div className="flex flex-col gap-4 items-center">
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/offline">
                  <Offline />
                </Route>
                <Route exact path="/online">
                  <Online />
                </Route>
                <Route exact path="/online/games/create">
                  <OnlineCreateGame />
                </Route>
                <Route path="/online/games/:gameId">
                  <OnlineGameView />
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
