import "../styles/Banner.scss";
import logo from "../images/icon-left-font.png";
import Connexion from "./Navigation.js";

const Banner = () => {
  return (
    <header className="grp-header">
      <img src={logo} alt="Groupomania" className="grp-logo" />
      <Connexion />
    </header>
  );
};
export default Banner;
