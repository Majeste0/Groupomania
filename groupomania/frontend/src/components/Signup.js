import "../styles/Signup.scss";
import Banner from "./Banner";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <Banner />
      <h2 className="signup_title">Inscription</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="signup_form">
        <div className="signup_input">
          <label>
            <p> Nom d'utilisateur </p>
            <input
              type="text"
              name="username"
              {...register("username", { required: true })}
            />
          </label>
          <label>
            <p> Mot de passe </p>
            <input
              type="password"
              name="password"
              autoComplete="off"
              {...register("password", { required: true })}
            />
          </label>
        </div>
        <input type="submit" value="S'inscrire" className="signup_submit" />
      </form>
    </div>
  );
};

export default Signup;

const UserForm = (props) => {};
