import "../styles/Profile.scss";
import BannerLogged from "./BannerLogged";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle(!toggle);
  };
  const confDel = () => {
    let userid = localStorage.getItem("userid");
    fetch("http://localhost:3000/api/auth/deleteUser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid: JSON.parse(userid),
      }),
    });
    history.push("/");
  };
  return (
    <div>
      <BannerLogged />
      <div className="profile_info">
        <p className="profile_username">
          {" "}
          Nom de l'utilisateur <br /> {localStorage.getItem("username")}{" "}
        </p>
        <button className="profile_delete" onClick={onClick}>
          Supprimer définitivement le compte
        </button>
      </div>
      {toggle && (
        <div>
          <p className="profile_conf">
            Êtes vous sur de vouloir supprimer votre compte ?
          </p>
          <div className="btn_wrapper">
            <button className="profile_btnyes" onClick={confDel}>
              {" "}
              Oui
            </button>
            <button className="profile_btnno" onClick={onClick}>
              {" "}
              Non
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
