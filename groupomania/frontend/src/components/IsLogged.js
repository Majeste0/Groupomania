import { useHistory } from "react-router";
import "../styles/isLogged.scss";
import logo from "../images/icon-above-font.png";

const IsLogged = () => {
  let history = useHistory();

  const toProfile = () => {
    history.push("/profile");
    window.location.reload();
  };

  const toHome = () => {
    history.push("/home");
    window.location.reload();
  };

  return (
    <div>
      <img src={logo} alt="post" className="logo_logged" />
      <div className="isLogged_wrapper">
        <div className="Profile_wrapper" onClick={toProfile}>
          {" "}
          Mon profil
        </div>
        <div className="Posts_wrapper" onClick={toHome}>
          {" "}
          Liste des posts
        </div>
      </div>
    </div>
  );
};

export default IsLogged;
