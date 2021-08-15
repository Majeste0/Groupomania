import BannerLogged from "./BannerLogged";
import "../styles/SinglePost.scss";
import Commentaires from "./Commentaires";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const SinglePost = () => {
  let { id } = useParams();

  const [waiting, setWaiting] = useState(true);

  fetch("http://localhost:3000/api/post/" + id, {}).then((response) =>
    response.json().then((json) => {
      localStorage.setItem("postUsername", json[0].username);
      localStorage.setItem("postTitle", json[0].title);
      localStorage.setItem("postMessage", json[0].message);
      localStorage.setItem("postImage", json[0].image);
      setWaiting(false);
    })
  );

  const [toggle, setToggle] = useState(false);
  const { register, handleSubmit } = useForm();

  const userid = localStorage.getItem("userid");
  console.log(userid);

  const onClick = () => {
    if (userid == 5) {
      setToggle(!toggle);
    } else {
      alert("Vous n'êtes pas le créateur de ce post");
    }
  };

  const onSubmit = (data) => {
    let putOptions = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
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
                <Commentaires />
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
                  value="aaaaaa"
                  className="modify_text"
                  {...register("title", { required: true })}
                ></textarea>
                <textarea
                  name="message"
                  value="zzzzzz"
                  className="modify_text"
                  {...register("message", { required: true })}
                ></textarea>
                {/* value = le message en bdd */}
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
