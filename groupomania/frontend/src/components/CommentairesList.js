import "../styles/CommentairesList.scss";

const CommentairesList = (props) => {
  return (
    <div className="one_com">
      <div className="infos_com">
        <p className="username_com">{props.userid}</p>
      </div>
      <p className="message_com">{props.message}</p>
      <img
        src="localhost:3000/images/${
          req.file.filename}"
      />
    </div>
  );
};

export default CommentairesList;
