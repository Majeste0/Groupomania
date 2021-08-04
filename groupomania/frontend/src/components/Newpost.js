import BannerLogged from "./BannerLogged";
import "../styles/Newpost.scss";
import TinyyMCE from "./TinyMCE";
import NewGif from "./NewGif";

const NewPost = () => {
  const onSubmit = (data) => {
    data.preventDefault();
    const form = new FormData(data.target);
    console.log(data.target);
    console.log(form);
    console.log(data);
    let postOptions = {
      method: "POST",
      body: form,
    };
    fetch("http://localhost:3000/api/post/recupImage/", postOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json + "json");
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
          <TinyyMCE />
        </label>
        <label className="uploadLABEL">
          <p> Rajouter une image... (optionnel)</p>
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
