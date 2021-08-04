import "../styles/BannerLogged.scss";
import logo from "../images/icon-left-font.png";
import { useHistory } from "react-router-dom";

const BannerLogged = () => {
  let history = useHistory();
  return (
    <header className="grp-header">
      <img
        src={logo}
        alt="Groupomania"
        className="grp-logo"
        onClick={() => history.push("/home")}
      />
      <div className="banner_username" onClick={() => history.push("/profile")}>
        {localStorage.getItem("username")}
      </div>
    </header>
  );
};

export default BannerLogged;
