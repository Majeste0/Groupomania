import "../styles/Signup.scss";
import Banner from "./Banner";

const Signup = () => {
  return (
    <div>
      <Banner />
      <h2>Inscription</h2>
      <form className="signup_form">
        <div className="signup_input">
          <label>
            <p> Nom d'utilisateur </p>
            <input type="text" />
          </label>
          <label>
            <p> Mot de passe </p>
            <input type="password" />
          </label>
          <label>
            <p>Confirmez le mot de passe </p>
            <input type="password" />
          </label>
        </div>
        <input type="submit" value="Connexion" className="signup_submit" />
      </form>
    </div>
  );
};

export default Signup;
