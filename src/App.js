import "./styles/App.css";
import { useFirebaseApp, useUser } from "reactfire";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Game } from "./views/Game/Game";
import { Login } from "./components/Login/Login";

function App() {
  const firebase = useFirebaseApp();
  const auth = getAuth();
  const { status, data: user } = useUser();

  const handleRegister = async (user) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );

      console.log(userCredentials);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
    }
  };

  return (
    <div className="App">
      <div>
        <p>{status}</p>
        <p>{user ? user.email : "No User"}</p>
      </div>

      {user ? (
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
      ) : (
        <Login
          onRegister={handleRegister}
          onLogin={() => console.log("login")}
        />
      )}
    </div>
  );
}

export default App;
