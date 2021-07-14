import Banner_logged from "./Banner_logged";
import "../styles/Newpost.scss";

const NewPost = () => {
  return (
    <div>
      <Banner_logged />
      <h2>Nouveau post</h2>
      <form className="newPost">
        <label for="name" className="titre_txt">
          {" "}
          Titre :{" "}
        </label>
        <input type="text" required />
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
