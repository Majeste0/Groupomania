import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import CommentairesList from "./CommentairesList";
import "../styles/Commentaires.scss";

const Commentaires = (props) => {
  // add new comments
  const { register, handleSubmit } = useForm();
  let send = "Ajouter un commentaire";
  const onSubmit = (data) => {
    let postOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:3000/api/post/newcommentaire/", postOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(JSON.stringify(json) + "json");
      });
    send = "Message envoyé !";
    console.log(send);
    setToggle(!toggle);
  };

  const [toggle, setToggle] = useState(true);

  const onClick = () => {
    setToggle(!toggle);
  };

  // get all comments
  /* useEffect(() => {
    fetch("http://localhost:3000/api/post/allComments", {}).then((res) =>
      res.json().then((json) => setData(json))
    );
  });
*/
  // const [Data, setData] = useState(false);

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
        {/*Data &&
          Data.map((el) => (
            <CommentairesList
              id={el.id}
              userid={el.userid}
              title={el.title}
              message={el.message}
              image={el.image}
            />
          ))*/}
      </div>
    </div>
  );
};

export default Commentaires;
