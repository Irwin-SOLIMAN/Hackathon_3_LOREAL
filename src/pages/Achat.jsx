import { useOutletContext } from "react-router-dom";
import { useState } from "react";
import Buy from "../components/Buy";

const Achat = () => {
  const { selectedProductBasket, count } = useOutletContext();

  const tarif = 4.99;

  const [buy, setBuy] = useState(false);

  function handleBuy() {
    setBuy(true);
  }

  return (
    <div className="achatContainer">
      {buy && <Buy />}
      {!buy && (<div className="invoiceContainer">
        <h2>Votre commande : </h2>
        <div className="columnDetails">
          <p className="">Quantité(s)</p>
          <p className="">Prix /u</p>
        </div>

        <div className="detailsStuff">
          <img className="productBuy" src={selectedProductBasket.img} />
          <p className="count">{count}</p>
          <p>{tarif}€</p>
        </div>
        <div className="total">
          <h2>Total</h2>
          <p>{tarif * count}€</p>
        </div>
        <button className="buttonPhotomaton" onClick={handleBuy}>
          Valider et payer
        </button>
      </div>)}
      
    </div>
  );
};

export default Achat;
