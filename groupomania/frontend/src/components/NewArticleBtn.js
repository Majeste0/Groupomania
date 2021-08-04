import "../styles/NewArticleBtn.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
const NewArticleBtn = () => {
  let history = useHistory();
  return (
    <section>
      <button className="btn_newpost" onClick={() => history.push("/newpost")}>
        <FontAwesomeIcon className="faPlus" icon={faPlus} />
        Nouveau post
      </button>
    </section>
  );
};

export default NewArticleBtn;
