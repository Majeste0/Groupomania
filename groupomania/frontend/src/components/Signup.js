import "../styles/Signup.scss";
import Banner from "./Banner";

const Signup = () => {
  // const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    data.preventDefault();
    const form = new FormData(data.target);

    fetch("http://localhost:3000/api/auth/signup", {
      method: "POST",
      body: form,
    });
  };

  return (
    <div>
      <Banner />
      <h2 className="signup_title">Inscription</h2>
      <form onSubmit={onSubmit} className="signup_form">
        <div className="signup_input">
          <label>
            <p> Nom d'utilisateur </p>
            <input type="text" />
          </label>
          <label>
            <p> Mot de passe </p>
            <input type="password" autoComplete="off" />
          </label>
          <label>
            <input
              type="file"
              name="image"
              accept="image/*"
              multiple={false}
              className="btn_GifImg"
            />
          </label>
        </div>
        <input type="submit" value="S'inscrire" className="signup_submit" />
      </form>
    </div>
  );
};

export default Signup;
