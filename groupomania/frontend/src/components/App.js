import "../styles/App.scss";
import Login from "./Login";
import Signup from "./Signup";
import MainPage from "./MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Newpost from "./Newpost";
import Profile from "./Profile";
import Admin from "./Admin";
import SinglePost from "./SinglePost";
import React, { useState, useEffect } from "react";

function App() {
  const [isLogged, setisLogged] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/").then((res) =>
      res.json().then((json) => console.log(json))
    );
  });
  if (isLogged) {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/home" exact component={MainPage} />
            <Route path="/newpost" exact component={Newpost} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/post/:id" exact component={SinglePost} />
            <Route path="/admin" exact component={Admin} />
            <Route
              path="/"
              component={() => <div>ERREUR 404 Problème d'URL</div>}
            />
          </Switch>
        </Router>
      </div>
    );
  } else {
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
}

export default App;
