import "../styles/CommentairesListAdmin.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CommentairesListAdmin = (props) => {
  const deleteCom = () => {
    fetch("http://localhost:3000/api/post/deleteCom", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comid: JSON.parse(props.id),
      }),
    });
    window.location.reload();
  };

  return (
    <div className="one_com">
      <FontAwesomeIcon onClick={deleteCom} className="faTimes" icon={faTimes} />
      <div className="infos_com">
        <p className="username_com"> De :{props.username}</p>
      </div>
      <p className="message_com">{props.message}</p>
    </div>
  );
};

export default CommentairesListAdmin;
