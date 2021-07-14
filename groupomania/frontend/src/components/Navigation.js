import "../styles/Navigation.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="grp-nav">
      <ul className="grp-menu">
        <Link to="/signup">
          <li className="grp-signup">Inscription</li>
        </Link>
        <Link to="/">
          <li className="grp-login">Connexion</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
