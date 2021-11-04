import "./styles/App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./views/Home/Home";
import { Game } from "./views/Game/Game";
import { getAuth } from "firebase/auth"; // Firebase v9+
import { getDatabase } from "firebase/database"; // Firebase v9+
import { DatabaseProvider, AuthProvider, useFirebaseApp } from "reactfire";

function App() {
  const app = useFirebaseApp();
  const database = getDatabase(app);
  const auth = getAuth(app);
  return (
    <AuthProvider sdk={auth}>
      <DatabaseProvider sdk={database}>
        <div className="App">
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
      </DatabaseProvider>
    </AuthProvider>
  );
}

export default App;
