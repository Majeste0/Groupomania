import "../styles/App.scss";
import Login from "./Login";
import Signup from "./Signup";
import Banner_logged from "./Banner_logged";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route
            path="/"
            component={() => <div>ERREUR 404 Problème d'URL</div>}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
