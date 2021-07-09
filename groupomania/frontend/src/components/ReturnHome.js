import { useHistory } from "react-router-dom";

const x = () => {
  let history = useHistory();
  return (
    <div>
      <h1>Test</h1>
      <button onClick={() => history.push("/")}>Retour à l'accueil</button>
    </div>
  );
};
