import "../styles/Profile.scss";
import BannerLogged from "./BannerLogged";

const Profile = () => {
  return (
    <div>
      <BannerLogged />
      <div className="profile_info">
        <div className="profile_placeholder"></div>
        <button className="profile_btn"> Modifier l'image de profil</button>
        <p> PH_username</p>
        <button className="profile_delete">
          Supprimer définitivement le compte
        </button>
      </div>
    </div>
  );
};

export default Profile;
