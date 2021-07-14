import "../styles/Banner.scss";
import logo from "../images/icon-left-font.png";
import Navigation from "./Navigation.js";

const Banner = () => {
  return (
    <header className="grp-header">
      <img src={logo} alt="Groupomania" className="grp-logo" />
      <Navigation />
    </header>
  );
};
export default Banner;
