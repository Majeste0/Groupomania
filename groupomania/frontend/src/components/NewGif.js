import BannerLogged from "./BannerLogged";
import "../styles/NewGif.scss";
import React, { useEffect, useState } from "react";

const NewGif = () => {
  //POST
  {
    /*  const imageHandler = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    fetch(`http://localhost:3000/api/image`, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "multipart/from-data",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((res) => {
        setUploadStatus(res.msg);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [uploadStatus, setUploadStatus] = useState("");

  //GET
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/image`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json, charset=UTF-8",
        Accept: "application/json, text/html",
      },
      credentials: "include",
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setImage("http://localhost:3000/" + data.image);
        console.log(image);
      });
  });

  return (
    <div>
      <BannerLogged />
      <h2 className="newgif_title">Nouveau GIF</h2>
      <form className="newGif">
        <label for="name" className="titre_txt"></label>
        <input
          className="newgif_input"
          type="text"
          placeholder="Titre du GIF..."
          required
        />
        <label for="message" className="message_txt">
          <input
            type="file"
            name="image"
            accept="image/*"
            multiple={false}
            className="btn_GifImg"
            onChange={imageHandler}
          ></input>
        </label>
      </form>
      <h3> {uploadStatus} </h3>
      <button className="btn_GifIN">Envoyer !</button>
       {image && <img src={image} alt="img" />}
  </div> 
  ); */
  }
};

export default NewGif;
