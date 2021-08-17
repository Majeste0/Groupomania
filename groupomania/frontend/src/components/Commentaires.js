import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CommentairesList from "./CommentairesList";
import "../styles/Commentaires.scss";
import { useParams } from "react-router-dom";

const Commentaires = (props) => {
  let { id } = useParams();
  // add new comments
  const { register, handleSubmit } = useForm();
  let send = "Ajouter un commentaire";

  const onSubmit = (data) => {
    let message = data.message;
    let userid = localStorage.getItem("userid");
    let username = localStorage.getItem("username");
    let postid = id;
    let form = { message, userid, username, postid };

    console.log(form);
    console.log(JSON.stringify(form));

    let postOptions = {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    };

    fetch("http://localhost:3000/api/post/newCommentaire/", postOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(JSON.stringify(json) + "json");
      });

    setToggle(!toggle);
    window.location.reload();
  };

  const [toggle, setToggle] = useState(true);

  const onClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/post/allComments/" + id, {}).then((res) =>
      res.json().then((json) => setData(json))
    );
  }, []);

  const [Data, setData] = useState(false);

  return (
    <div>
      <button onClick={onClick} className="addcom_btn">
        {toggle && <p>{send}</p>}
        {!toggle && <p> Annuler </p>}
      </button>
      {!toggle && (
        <form onSubmit={handleSubmit(onSubmit)} className="newCom">
          <label for="commentaire"></label>
          <textarea
            className="newcom_input"
            type="text"
            placeholder="Commentaire..."
            name="message"
            required
            {...register("message", { required: true })}
          />
          <button className="newcom_btn"> Envoyer ! </button>
        </form>
      )}
      <div>
        {Data &&
          Data.map((el) => (
            <CommentairesList username={el.username} message={el.message} />
          ))}
      </div>
    </div>
  );
};

export default Commentaires;
