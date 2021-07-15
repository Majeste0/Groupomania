import "../styles/Login.scss";
import Banner from "./Banner";

const Login = () => {
  return (
    <div>
      <Banner />
      <h2 className="login_title">Connexion</h2>
      <form className="login_form">
        <div className="login_input">
          <label>
            <p>Nom d'utilisateur</p>
            <input type="text" />
          </label>
          <label>
            <p>Mot de passe</p>
            <input type="password" autoComplete="off" />
          </label>
        </div>
        <input type="submit" value="Se connecter !" className="login_submit" />
      </form>
    </div>
  );
};

export default Login;
