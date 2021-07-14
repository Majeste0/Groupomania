import "../styles/Signup.scss";
import Banner from "./Banner";
import React, { useState } from "react";

const Signup = () => {
  const [afficher, setAfficher] = useState();

  const _submit = (e) => {
    fetch("", { type: "POST", body: new FormData(e.target) }).then((r) =>
      r.json().then((rformatee) => setAfficher(rformatee))
    );
  };

  return (
    <div>
      <Banner />
      <h2 className="signup_title">Inscription</h2>
      <form onSubmit={_submit} className="signup_form">
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
