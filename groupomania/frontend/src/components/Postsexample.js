import "../styles/Postsexample.scss";

const Postsexample = (props) => {
  const onClick = () => {
    if (localStorage.getItem("CurrentID")) {
      localStorage.getItem("CurrentID");
    } else {
      localStorage.setItem("CurrentID", "");
    }
  };
  return (
    <div className="one_post">
      <div className="infos_post">
        <h4 className="titre_post">{props.title}</h4>
        <p className="username_post">{props.userid}</p>
      </div>
      <p className="message_post">{props.message}</p>
      <img
        src="localhost:3000/images/${
          req.file.filename}"
      />
    </div>
  );
};

export default Postsexample;

/*
let addLocal = () => {
  if (localStorage.getItem("panier")) {
    let temp = JSON.parse(localStorage.getItem("panier"));
    temp.push(r);
    localStorage.setItem("panier", JSON.stringify(temp));
    panier.length++;
    location.reload();
  } //Création du panier
  else localStorage.setItem("panier", "[" + JSON.stringify(r) + "]");
  location.reload();
};
Button.onclick = () => {
  addLocal();
}; */
