import "../styles/BannerLogged.scss";
import logo from "../images/icon-left-font.png";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const BannerLogged = () => {
  let history = useHistory();
  const logout = () => {
    history.push("/");
  };

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAdmin") == 1) {
      setToggle(!toggle);
    }
  }, []);

  const admin = () => {
    history.push("/admin");
  };

  return (
    <div>
      {toggle && (
        <header className="grp-header">
          <img
            src={logo}
            alt="Groupomania"
            className="grp-logo"
            onClick={() => history.push("/home")}
          />
          <div className="wrapper_banner">
            <p onClick={logout} className="logout_btn">
              {" "}
              Se deconnecter{" "}
            </p>
            <p className="banner_admin" onClick={admin}>
              {" "}
              Administration{" "}
            </p>
            <div
              className="banner_username"
              onClick={() => history.push("/profile")}
            >
              {localStorage.getItem("username")}
            </div>
          </div>
        </header>
      )}
      {!toggle && (
        <header className="grp-header">
          <img
            src={logo}
            alt="Groupomania"
            className="grp-logo"
            onClick={() => history.push("/home")}
          />
          <div className="wrapper_banner">
            <p onClick={logout} className="logout_btn">
              {" "}
              Se deconnecter{" "}
            </p>
            <div
              className="banner_username"
              onClick={() => history.push("/profile")}
            >
              {localStorage.getItem("username")}
            </div>
          </div>
        </header>
      )}
    </div>
  );
};

export default BannerLogged;
