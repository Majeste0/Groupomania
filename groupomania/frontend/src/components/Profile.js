import "../styles/Profile.scss";
import BannerLogged from "./BannerLogged";

const Profile = () => {
  const onClick = () => {
    console.log("test");
    let userid = JSON.parse(localStorage.getItem("userid"));
    fetch("http://localhost:3000/api/auth/deleteUser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: userid,
    });
  };

  return (
    <div>
      <BannerLogged />
      <div className="profile_info">
        <div className="profile_placeholder"></div>
        <button className="profile_btn">Modifier l'image de profil</button>
        <p> {localStorage.getItem("username")} </p>
        <button className="profile_delete" onClick={onClick}>
          Supprimer définitivement le compte
        </button>
      </div>
    </div>
  );
};

export default Profile;
