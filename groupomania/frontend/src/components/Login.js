import "../styles/Login.scss";
import Banner from "./Banner";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(JSON.stringify(data.username));
    fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  };
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
