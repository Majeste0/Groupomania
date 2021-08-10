import React, { useState, useEffect } from "react";

import CommentairesList from "./CommentairesList";

const Commentaires = (props) => {
  // add new comments
  const onSubmit = (data) => {
    data.preventDefault();
    let form = new FormData(data.target);
    console.log(data.target);
    console.log(JSON.stringify(form) + "form");
    console.log(data);
    let postOptions = {
      method: "POST",
      body: form,
    };
    fetch("http://localhost:3000/api/post/newcommentaire/", postOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json + "json");
        console.log(JSON.stringify(json) + "json");
      });
  };

  const [toggle, setToggle] = useState(false);

  const onClick = () => {
    setToggle(!toggle);
  };

  // get all comments
  /*useEffect(() => {
    fetch("http://localhost:3000/api/post/allPosts", {}).then((res) =>
      res.json().then((json) => setData(json))
    );
  });*/

  const [Data, setData] = useState(false);

  return (
    <div>
      <button onClick={onClick} className="newbtn_Spost">
        {toggle && <p>Ajouter un commentaire</p>}
        {!toggle && <p> Annuler </p>}
      </button>
      {!toggle && (
        <form onSubmit={onSubmit} className="newPost">
          <label for="name" className="titre_txt"></label>
          <input
            className="newcom_input"
            type="text"
            placeholder="Commentaire..."
            name="message"
            required
          />
          <button> Envoyer ! </button>
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
