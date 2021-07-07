import "../styles/login.scss"

const Login = () => {

    return( 
    <form className="login_form">
    <div className="login_input">
    <label>
      Nom d'utilisateur
      <input type="text"/>
    </label>
    <label>
    Mot de passe  
    <input type="password"/>
    </label>
    </div>
    <input type="submit" value="Connexion" className="login_submit" />
  </form>
  )
}

export default Login