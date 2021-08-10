import BannerLogged from "./BannerLogged";
import "../styles/SinglePost.scss";
import Commentaires from "./Commentaires";

const SinglePost = (props) => {
  fetch("http://localhost:3000/api/" + localStorage.getItem("CurrrentID"));

  return (
    <div>
      <BannerLogged />
      <article className="Spost_main">
        <div className="one_Spost">
          <div className="infos_Spost">
            <h4 className="titre_Spost">TITRE</h4>
            <p className="username_Spost">USERNAME</p>
          </div>
          <p className="message_Spost">MESSAGE</p>
          {/* <img
            src="localhost:3000/images/${
          req.file.filename}"
          /> */}
        </div>
      </article>
      <section className="commentaires_Spost">
        <Commentaires />
      </section>
    </div>
  );
};

export default SinglePost;
