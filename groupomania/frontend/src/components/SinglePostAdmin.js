import BannerLogged from "./BannerLogged";
import "../styles/SinglePost.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import CommentairesAdmin from "./CommentairesAdmin";

const SinglePost = (props) => {
  let { id } = useParams();

  // State pour attendre que la requête fetch soit terminée
  const [waiting, setWaiting] = useState(true);

  // Requête pour récupérer les différents posts
  fetch("http://localhost:3000/api/post/admin/" + id, {}).then((response) =>
    response.json().then((json) => {
      localStorage.setItem("postUsername", json[0].username);
      localStorage.setItem("postTitle", json[0].title);
      localStorage.setItem("postMessage", json[0].message);
      localStorage.setItem("postImage", json[0].image);
      localStorage.setItem("postUserId", json[0].userid);
      setWaiting(false);
    })
  );

  const [toggle, setToggle] = useState(false);
  const { register, handleSubmit } = useForm();

  const userid = localStorage.getItem("userid");

  const onClick = () => {
    setToggle(!toggle);
  };

  const onSubmit = (data) => {
    let putOptions = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    //Requête pour modifier un post
    fetch("http://localhost:3000/api/post/modifyPost", putOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json + "json");
        console.log(JSON.stringify(json) + "json");
      });
  };

  return (
    <div>
      <BannerLogged />
      {waiting ? (
        <></>
      ) : (
        <article className="Spost_main">
          {!toggle && (
            <div>
              <div className="one_Spost">
                <img
                  alt="post"
                  className="img_Spost"
                  src={
                    "http://localhost:3000/images/" +
                    localStorage.getItem("postImage")
                  }
                />
                <FontAwesomeIcon
                  className="faEdit"
                  icon={faEdit}
                  onClick={onClick}
                />

                <div className="infos_Spost">
                  <h4 className="titre_Spost">
                    Titre : {localStorage.getItem("postTitle")}
                  </h4>

                  <p className="username_Spost">
                    De : {localStorage.getItem("postUsername")}
                  </p>
                </div>
                <p className="message_Spost">
                  {localStorage.getItem("postMessage")}
                </p>
              </div>
              <section className="commentaires_Spost">
                <CommentairesAdmin />
              </section>
            </div>
          )}
          {toggle && (
            <div>
              <form onSubmit={handleSubmit(onSubmit)} className="newPost">
                <div className="modify_Spost">
                  <FontAwesomeIcon
                    className="faArrowLeft"
                    icon={faArrowLeft}
                    onClick={onClick}
                  />
                  <h4 className="modify_title">Modifier mon post</h4>
                </div>
                <textarea
                  name="title"
                  value={localStorage.getItem("postTitle")}
                  className="modify_text"
                  {...register("title", { required: true })}
                ></textarea>
                <textarea
                  name="message"
                  value={localStorage.getItem("postMessage")}
                  className="modify_text"
                  {...register("message", { required: true })}
                ></textarea>
                <button className="addcom_btn"> Envoyer ! </button>
              </form>
            </div>
          )}
        </article>
      )}
    </div>
  );
};

export default SinglePost;
