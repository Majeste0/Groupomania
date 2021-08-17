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
};

export default Admin;
