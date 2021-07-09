import "../styles/Banner_logged.scss";
import logo from "../images/icon-left-font.png";

const Banner_logged = () => {
  return (
    <header className="grp-header">
      <img src={logo} alt="Groupomania" className="grp-logo" />
      <a href="" className="banner_username">
        {" "}
        LOGO + username{" "}
      </a>
    </header>
  );
};

export default Banner_logged;
