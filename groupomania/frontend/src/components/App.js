import "../styles/App.scss";
import Login from "./Login";
import Signup from "./Signup";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Newpost from "./Newpost";
import Profile from "./Profile";
import NewGif from "./NewGif";
import SinglePost from "./SinglePost";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/home" exact component={MainPage} />
          <Route path="/newpost" exact component={Newpost} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/newgif" exact component={NewGif} />
          <Route path="/post" exact component={SinglePost} />
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
