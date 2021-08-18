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
import Logout from "./Logout";
import IsLogged from "./IsLogged.js";
import SinglePostAdmin from "./SinglePostAdmin";

const App = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      setToggle(!toggle);
    }
  }, []);

  return (
    <div>
      <Router>
        {toggle && (
          <Switch>
            <Route path="/home" exact component={MainPage} />
            <Route path="/newpost" exact component={Newpost} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/post/:id" exact component={SinglePost} />
            <Route path="/admin/post/:id" exact component={SinglePostAdmin} />
            <Route path="/admin" exact component={Admin} />
            <Route path="/" exact component={Logout} />
            <Route path="/signup" exact component={Logout} />
            <Route
              path="/"
              component={() => <div>ERREUR 404 Problème d'URL</div>}
            />
          </Switch>
        )}

        {!toggle && (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/isLogged" exact component={IsLogged} />
            <Route
              path="/"
              component={() => <div>ERREUR 404 Problème d'URL</div>}
            />
          </Switch>
        )}
      </Router>
    </div>
  );
};

export default App;
