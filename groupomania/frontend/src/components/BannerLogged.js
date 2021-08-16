import "../styles/BannerLogged.scss";
import logo from "../images/icon-left-font.png";
import { useHistory } from "react-router-dom";

const BannerLogged = () => {
  let history = useHistory();
  const logout = () => {
    history.push("/");
    localStorage.clear();
  };
  return (
    <header className="grp-header">
      <img
        src={logo}
        alt="Groupomania"
        className="grp-logo"
        onClick={() => history.push("/home")}
      />
      <p onClick={logout}> Se deconnecter </p>
      <div className="banner_username" onClick={() => history.push("/profile")}>
        {localStorage.getItem("username")}
      </div>
    </header>
  );
};

export default BannerLogged;
