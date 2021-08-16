import "../styles/PostAdmin.scss";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const PostAdmin = (props) => {
  let history = useHistory();

  const redirect = () => {
    console.log(props.username);
    console.log(props.id);
    let username = props.username;
    console.log(username);
    history.push("/post/" + props.id);
  };

  const like = () => {
    console.log("hello");
    let data = {
      postid: props.id,
      like: 1,
      userid: localStorage.getItem("userid"),
    };
    console.log(data);
    console.log(JSON.stringify(data));

    let postOptions = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch("http://localhost:3000/api/post/likes", postOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json + "json");
        console.log(JSON.stringify(json) + "json");
      });
  };

  const dislike = () => {
    let data = {
      postid: props.id,
      like: -1,
      userid: localStorage.getItem("userid"),
    };

    let postOptions = {
      method: "POST",
      body: JSON.stringify(data),
    };

    fetch("http://localhost:3000/api/post/likes", postOptions)
      .then((response) => response.json())
      .then((json) => {
        console.log(json + "json");
        console.log(JSON.stringify(json) + "json");
      });
  };

  const test = () => {
    console.log("aaaaa");
    window.location.reload();
  };
  return (
    <div className="one_post" onClick={redirect}>
      <div className="infos_post">
        <h4 className="titre_post">{props.title}</h4>
        <p className="username_post"> De : {props.username}</p>
      </div>
      <div className="msgimg_post">
        <img
          className="img_post"
          src={"http://localhost:3000/images/" + props.image}
        />
        <p className="message_post">{props.message}</p>
      </div>
      <div className="likes_post" onClick={test}>
        <FontAwesomeIcon
          className="faThumbsUp"
          icon={faThumbsUp}
          onClick={like}
        />
        <FontAwesomeIcon
          className="faThumbsDown"
          icon={faThumbsDown}
          onClick={dislike}
        />
      </div>
    </div>
  );
};

export default PostAdmin;
