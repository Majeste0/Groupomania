import Postsexample from "./Postsexample";
import React, { useState, useEffect } from "react";

const Publications = (props) => {
  const [Data, setData] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/post/allPosts", {}).then((res) =>
      res.json().then((json) => setData(json))
    );
  }, []);

  return (
    <>
      {Data &&
        Data.map((el) => (
          <Postsexample
            id={el.id}
            userid={el.userid}
            title={el.title}
            message={el.message}
            image={el.image}
            username={el.username}
          />
        ))}
    </>
  );
};

export default Publications;
