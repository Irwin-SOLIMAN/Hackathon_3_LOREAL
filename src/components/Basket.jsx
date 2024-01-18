import { useNavigate, useOutletContext } from "react-router-dom";

const Basket = ({ selectedProductBasket, setBasket }) => {
  const navigate = useNavigate();
  const {count, setCount} = useOutletContext();

  function handleDecrement() {
    setCount(count - 1);
  }
  function handleIncrement() {
    setCount(count + 1);
  }
  function handleClose() {
    setBasket(false);
  }

  function handleNavigateBuy() {
    navigate("/achatsclient");
  }

  return (
    <div className="basketContainer">
      <h1>Récapitulatif de votre panier :</h1>
      <div className="basket">
        <img src={selectedProductBasket.img} />
        <div className="counter">
          <button onClick={handleDecrement}>➖</button> 
          <p>{count}</p>
          <button onClick={handleIncrement}>➕</button>
        </div>
      </div>
      <div className="validateContainer">
        <button className="validate" onClick={handleClose}>
          Continuer mes achats
        </button>
        <button className="validate" onClick={handleNavigateBuy}>
          Valider mon panier
        </button>
      </div>
    </div>
  );
};

export default Basket;
