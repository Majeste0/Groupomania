import "../styles/Login.scss";
import Banner from "./Banner";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Redirect } from "react-router";

const Login = () => {
  const [redirect, setRedirect] = useState(false);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    localStorage.getItem("username");
    let username = JSON.stringify(data.username);
    username = username.replace(/["']/g, "");
    
    localStorage.getItem("userid");
    localStorage.getItem("jwt");

    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          let userid = JSON.stringify(data.userId);
          localStorage.setItem("userid", userid);
          localStorage.setItem("username", username);
          localStorage.setItem("jwt", data.token);
          setRedirect(true);
        }
      });
  };

  if (redirect) {
    return <Redirect to="/home" />;
  }

  return (
    <div>
      <Banner />
      <h2 className="login_title">Connexion</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="login_form">
        <div className="login_input">
          <label>
            <p>Nom d'utilisateur</p>
            <input type="text" {...register("username", { required: true })} />
          </label>
          <label>
            <p>Mot de passe</p>
            <input
              type="password"
              {...register("password", { required: true })}
              autoComplete="off"
            />
          </label>
        </div>
        <input type="submit" value="Se connecter !" className="login_submit" />
      </form>
    </div>
  );
};

export default Login;
