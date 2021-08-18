import { useHistory } from "react-router";

import "../styles/Logout.scss";

const Logout = () => {
  const history = useHistory();

  const redirect = () => {
    history.push("/home");
  };
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <div className="logout_wrapper">
      <h4 className="logout_title">
        {" "}
        Êtes vous sur de vouloir vous déconnecter ?{" "}
      </h4>
      <button className="logout_btn1" onClick={redirect}>
        {" "}
        Retour sur le site
      </button>
      <button className="logout_btn2" onClick={logout}>
        {" "}
        Se deconnecter
      </button>
    </div>
  );
};
export default Logout;
