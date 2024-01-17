import { useState } from "react";

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
        {openCut ? <div className="chooseCut">blabla coupe</div> : ""}
        <button className="buttonPhotomaton" onClick={handleColor}>
          Couleur
        </button>
        {openColor ? <div className="chooseColor">blabla couleur</div> : ""}
      </div>
      <button className="buttonPhotomaton">Valider</button>
      <button className="buttonClose" onClick={handleClose}>{`<`}</button>
    </div>
  );
};

export default MenuBurger;
