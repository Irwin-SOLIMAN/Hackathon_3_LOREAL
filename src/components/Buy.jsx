import { useNavigate } from "react-router-dom";

const Buy = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/");
  }
  return (
    <div className="buy">
      <h1>Merci de votre achat et à bientôt !</h1>
      <button
        className="buttonPhotomaton"
        onClick={handleNavigate}
      >{`Fermer l'application`}</button>
    </div>
  );
};

export default Buy;
