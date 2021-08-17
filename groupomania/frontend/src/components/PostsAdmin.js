import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "../styles/PostsAdmin.scss";
const PostsAdmin = (prop) => {
  const history = useHistory();
  const redirect = () => {
    history.push("/admin/post/" + prop.id);
  };

  const deletePost = () => {
    fetch("http://localhost:3000/api/post/deletePost", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postid: JSON.parse(prop.id),
      }),
    });
    window.location.reload();
  };

  return (
    <div className="one_post" onClick={redirect}>
      <FontAwesomeIcon
        onClick={deletePost}
        className="faTimes"
        icon={faTimes}
      />

      <div className="infos_post">
        <h4 className="titre_post">{prop.title}</h4>
        <p className="username_post"> De : {prop.username}</p>
        <p> KARMA : {prop.karma}</p>
      </div>
      <div className="msgimg_post">
        <img
          className="img_post"
          src={"http://localhost:3000/images/" + prop.image}
        />
        <p className="message_post">{prop.message}</p>
      </div>
    </div>
  );
};

export default PostsAdmin;

<FontAwesomeIcon className="faTimes" icon={faTimes} />;
