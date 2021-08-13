import "../styles/Postsexample.scss";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Postsexample = (props) => {
  const onClick = () => {
    if (localStorage.getItem("CurrentID")) {
      localStorage.getItem("CurrentID");
    } else {
      localStorage.setItem("CurrentID", "");
    }
  };

  const redirect = () => {
    console.log(props.username);
    console.log(props.id);
  };
  const report = () => {
    //fetch()
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
      <FontAwesomeIcon className="faFlag" icon={faFlag} onClick={report} />
    </div>
  );
};

export default Postsexample;
