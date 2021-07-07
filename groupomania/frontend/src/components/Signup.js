import "../styles/signup.scss"

const Signup = () => {

    return( 
    <form className="signup_form">
    <div className="signup_input">
    <label>
      Nom d'utilisateur
      <input type="text"/>
    </label>
    <label>
    Mot de passe  
    <input type="password"/>
    </label>
    <label>
    Confirmez le mot de passe
    <input type="password"/>
    </label>
    </div>
    <input type="submit" value="Connexion" className="signup_submit" />
  </form>
  )
}

export default Signup