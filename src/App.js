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

function App() {
  const firebase = useFirebaseApp();
  const auth = getAuth();
  const { data: user } = useUser();

  const handleRegister = async (user) => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  const handleLogin = async (user) => {
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
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
        <div className="w-96">
          <Login onRegister={handleRegister} onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default App;
