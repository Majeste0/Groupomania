import "../styles/BannerLogged.scss";
import logo from "../images/icon-left-font.png";

const BannerLogged = () => {
  return (
    <header className="grp-header">
      <img src={logo} alt="Groupomania" className="grp-logo" />
      <div className="banner_username"> LOGO + username </div>
    </header>
  );
};

export default BannerLogged;
