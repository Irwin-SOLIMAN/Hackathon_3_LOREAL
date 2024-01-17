import { useState } from "react";
import colorsHair from "./colorsHair";

const MenuBurger = ({ openMenu, setOpenMenu }) => {
 
  const [openCut, setOpenCut] = useState(false);
  const [openColor, setOpenColor] = useState(false);

    function handleClose() {
    setOpenMenu(!openMenu);
  }

  function handleCut() {
    setOpenCut(!openCut);
    if (openColor) {
      setOpenColor(!openColor);
    }
  }

  function handleColor() {
    setOpenColor(!openColor);

    if (openCut) {
      setOpenCut(!openCut);
    }
  }

  return (
    <div className="menuBurger">
      <div className="selectionsHair">
        <button className="buttonPhotomaton" onClick={handleCut}>
          Coupe
        </button>
        {openCut ? <div className="chooseCut"><p className="switch">{`<`}</p>blabla coupe<p className="switch">{`>`}</p></div> : ""}
        <button className="buttonPhotomaton" onClick={handleColor}>
          Couleur
        </button>
        {openColor ? <div className="chooseColor">
            <p className="switch">{`<`}</p>
           {/* {colorsHair.map((color,index)=>{return()})} */}
            <p className="switch">{`>`}</p></div> : ""}
      </div>
      <button className="buttonPhotomaton">Valider</button>
      <button className="buttonClose" onClick={handleClose}>{`<`}</button>
    </div>
  );
};

export default MenuBurger;
