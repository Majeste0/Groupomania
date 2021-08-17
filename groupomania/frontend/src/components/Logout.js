import { useHistory } from "react-router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";

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
    <div>
      <h4> Êtes vous sur de vouloir vous déconnecter ? </h4>
      <button onClick={redirect}> Retour sur le site</button>
      <button onClick={logout}> Se deconnecter</button>
    </div>
  );
};
export default Logout;
