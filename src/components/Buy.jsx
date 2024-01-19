// import { useNavigate } from "react-router-dom";

const Buy = () => {
  // const navigate = useNavigate();
  // function handleNavigate() {
  //   navigate("/");
  // }
  return (
    <div className="buy">
      <h1>Merci pour votre achat !</h1>
      <div className="pictures">
        <div className="pictures1">
          <img src="/images/Emmanuelle.png"/>
          <img src="/images/Guillaume.png"/>
        </div>
        <div className="pictures2">
          <img src="/images/Thibaut.png"/>
          <img src="/images/Irwin.png"/>
        </div>
      </div>
      <p>
        La team Code4Fun espère vous revoir très vite !
      </p>
      {/* <button
        className="buttonPhotomaton"
        onClick={handleNavigate}
      >{`Fermer l'application`}</button> */}
    </div>
  );
};

export default Buy;
