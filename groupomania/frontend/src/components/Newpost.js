import BannerLogged from "./BannerLogged";
import "../styles/Newpost.scss";
import TinyyMCE from "./TinyMCE";

const NewPost = () => {
  return (
    <div>
      <BannerLogged />
      <h2 className="newpost_title">Nouveau post</h2>
      <form className="newPost">
        <label for="name" className="titre_txt"></label>
        <input
          className="newpost_input"
          type="text"
          placeholder="Titre..."
          required
        />
        <label for="message" className="message_txt">
          <TinyyMCE />
        </label>
      </form>
      <button className="btn_newpostIN">Envoyer !</button>
    </div>
  );
};

export default NewPost;
