import BannerLogged from "./BannerLogged";
import React, { useState, useEffect } from "react";
import PostsAdmin from "./PostsAdmin";

const Admin = () => {
  const [Data, setData] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/post/allPostsAdmin", {}).then((res) =>
      res.json().then((json) => setData(json))
    );
  }, []);
  if (localStorage.getItem("isAdmin") == 1) {
    return (
      <div>
        <BannerLogged />
        <>
          {Data &&
            Data.map((el) => (
              <PostsAdmin
                id={el.id}
                userid={el.userid}
                title={el.title}
                message={el.message}
                image={el.image}
                username={el.username}
                karma={el.karma}
              />
            ))}
        </>
      </div>
    );
  } else {
    return <div>ERREUR 404 Problème d'URL</div>;
  }
};

export default Admin;
