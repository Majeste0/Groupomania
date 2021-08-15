import "../styles/CommentairesList.scss";

const CommentairesList = (props) => {
  return (
    <div className="one_com">
      <div className="infos_com">
        <p className="username_com"> De : {props.username}</p>
      </div>
      <p className="message_com">{props.message}</p>
    </div>
  );
};

export default CommentairesList;
