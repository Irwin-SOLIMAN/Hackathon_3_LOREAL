import React, { useEffect, useState } from "react";
import { useOutletContext, NavLink } from "react-router-dom";
import reco from "../recoDB";
import { useScreenshot } from "use-react-screenshot";
import Basket from "../components/Basket";

const Styliste = () => {
  //   const [chooseColor, setChooseColor] = useOutletContext();
  //   const [screenshot, setScreenshot] = useOutletContext();
  const { chooseColor, screenshot, selectedProductBasket, setSelectedProductBasket} = useOutletContext();
  const [stylistMap, setStylistMap] = useState(false);
  const [cityValue, setCityValue] = useState("");
  const [stylist1, setStylist1] = useState(false);
  const [stylist2, setStylist2] = useState(false);
  const [basket, setBasket] = useState(false);

  const handleInputChange = (event) => {
    const city = event.target.value.toLowerCase();
    if (city === "nantes") {
      setStylistMap(true);
    } else {
      setStylistMap(false);
    }
    setCityValue(city);
  };

  const handleBasket = (product) => {
    setBasket(true);
    setSelectedProductBasket(product)
  };

  const handleClose = () => {
    setStylistMap(false);
    setCityValue("");
  };

  const handleStylist1 = () => {
    setStylist1(true);
    if (setStylist2 === true) {
      setStylist2(false);
    }
  };
  const handleStylist2 = () => {
    setStylist2(true);
    if (setStylist1 === true) {
      setStylist1(false);
    }
    console.log("styliste2");
  };

  const closeCard1 = () => {
    setStylist1(false);
  };

  const closeCard2 = () => {
    setStylist2(false);
  };

  const recoFilteredByColor = reco.filter(
    (product) => product.categ === chooseColor || product.categ === "soin"
  );

  return (
    <div className="styliste">
      <div className="backButton">
        <NavLink to={"/photomaton"}>
          <img src="/logo/next.png" />
          Retour
        </NavLink>
      </div>
      <div className="imageContainer">
          {" "}
          <img src={screenshot} alt={"Screenshot"} />
        </div>
      <div>
        <div className="finderBlock">
          <p>Je trouve un styliste L'ORÉAL</p>
          <input
            type="text"
            placeholder="📍 Votre ville"
            onChange={handleInputChange}
            value={cityValue}
          ></input>
          {stylistMap && (
            <div className="map">
          
              <div className="closingDiv" onClick={handleClose}>
                <p>Fermer la carte</p>
                <div className="closingButton">✖️</div>
              </div>
              <img src="/images/maps1.png" />
              <div className="pin1" onClick={handleStylist1}>
                <img src="/logo/location_4315546.png" />
              </div>
              <div className="pin2" onClick={handleStylist2}>
                <img src="/logo/location_4315546.png" />
              </div>
              {stylist1 && (
                <div className="stylistCard1">
                  <div className="closingButton" onClick={closeCard1}>
                    <button type="button">✖️</button>
                  </div>
                  <div className="infos">
                    <div className="salon">Innovatif</div>
                    <div className="adress">4 Boulevard Dupont, Nantes</div>
                    <div className="contact">02.40.98.20.21</div>
                    <NavLink to={"/login"}>
                      <button className="button-rdv">Prendre RDV</button>
                    </NavLink>
                  </div>
                </div>
              )}
              {stylist2 && (
                <div className="stylistCard2">
                  <div className="closingButton" onClick={closeCard2}>
                    <button type="button">✖️</button>
                  </div>
                  <div className="infos">
                    <div className="salon">Coupe de Cœur</div>
                    <div className="adress">35 Rue du Calvaire, Nantes</div>
                    <div className="contact">02.40.34.75.40</div>
                    <NavLink to={"/login"}>
                      <button className="button-rdv">Prendre RDV</button>
                    </NavLink>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        <div
          className={
            stylistMap === true ? "recommendedBlockHidden" : "recommendedBlock"
          }
        >
          <p>Je consulte les produits recommandés</p>
          <div className="productsMap">
          {basket && <Basket setBasket={setBasket} selectedProductBasket={selectedProductBasket}/>}
            {recoFilteredByColor.map((product) => {
              return (
                <div className="productCard" key={product.id}>
                  <div className="imgContainer">
                    <img src={product.img} />
                    <button className="plus" onClick={()=>handleBasket(product)}>➕</button>
                  </div>
                  <div className="productInfo">
                    <div className="productName">
                      {product.name.toUpperCase()}
                    </div>
                    <div className="productPrice">{product.price} </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={
              stylistMap === true ? "unrollArrow" : "unrollArrowHidden"
            }
            onClick={handleClose}
          >
            <img src="/logo/next.png" />
          </div>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Styliste;
