import BannerLogged from "./BannerLogged";
import "../styles/Newpost.scss";

const NewPost = () => {
  return (
    <div>
      <BannerLogged />
      <h2 className="newpost_title">Nouveau post</h2>
      <form className="newPost">
        <label for="name" className="titre_txt">
          {" "}
          Titre :{" "}
        </label>
        <input className="newpost_input" type="text" required />
        <label for="message" className="message_txt">
          {" "}
          Post :{" "}
        </label>
        <input type="text" className="message" required />
      </form>
      <button className="btn_newpostIN">Envoyer !</button>
    </div>
  );
};

export default NewPost;
