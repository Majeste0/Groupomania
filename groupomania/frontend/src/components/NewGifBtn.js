import "../styles/NewGifBtn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileImage } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
const NewGifBtn = () => {
  let history = useHistory();
  return (
    <section>
      <button className="btn_newgif" onClick={() => history.push("/newgif")}>
        <FontAwesomeIcon className="fa-file-image" icon={faFileImage} />
        Nouveau gif
      </button>
    </section>
  );
};

export default NewGifBtn;
