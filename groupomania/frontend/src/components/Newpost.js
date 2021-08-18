import BannerLogged from "./BannerLogged";
import "../styles/Newpost.scss";

import { useHistory } from "react-router";

const NewPost = (props) => {
  const history = useHistory();

  const onSubmit = (data) => {
    data.preventDefault();
    let form = new FormData(data.target);
    form.append("id", localStorage.getItem("userid"));
    form.append("username", localStorage.getItem("username"));

    let postOptions = {
      method: "POST",
      body: form,
    };
    fetch("http://localhost:3000/api/post/recupImage/", postOptions)
      .then((response) => response.json())
      .then((json) => {
        history.push("/home");
      });
  };

  return (
    <div>
      <BannerLogged />
      <h2 className="newpost_title">Nouveau post</h2>
      <form onSubmit={onSubmit} className="newPost">
        <label for="name" className="titre_txt"></label>
        <input
          className="newpost_input"
          type="text"
          placeholder="Titre..."
          name="title"
          required
        />
        <label for="message" className="message_txt" name="message">
          {/* <TinyyMCE /> */}
          <textarea
            className="newpost_message"
            type="text"
            placeholder="Message..."
            name="message"
            required
          />
        </label>
        <label className="uploadLABEL">
          <p> Rajouter une image... </p>
          <input
            type="file"
            name="image"
            accept="image/*"
            multiple={false}
            className="uploadIMG"
          />
        </label>
        <button className="btn_newpostIN">Envoyer !</button>
      </form>
    </div>
  );
};

export default NewPost;
