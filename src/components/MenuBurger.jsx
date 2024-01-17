import { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import colorsHair from "./colorsHair";
import HairCutF from "./hairCutF";

const MenuBurger = ({ openMenu, setOpenMenu, setChooseCut }) => {
  const [openCut, setOpenCut] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [chooseColor, setChooseColor] = useOutletContext();

const navigate = useNavigate();
  //   const handlePrev = () => {
  //     setStartIndex((prevIndex) => Math.max(0, prevIndex - 2));
  //   };

  //   const handleNext = () => {
  //     setStartIndex((prevIndex) => {
  //       const nextIndex = prevIndex + 2;
  //       return nextIndex >= HairCutF.length ? 0 : nextIndex;
  //     });
  //   };

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

  function handleSelectColor(saveColor) {
    setChooseColor(saveColor);
    setOpenColor(!openColor);
    setOpenCut(true);
  }

  const filteredHaircuts = HairCutF.filter(
    (cutFiltered) => chooseColor === "" || chooseColor === cutFiltered.color
  ).slice(startIndex, startIndex + 2);

  function handleSelectHairCut(chooseCut) {
    setChooseCut(chooseCut);
    setOpenColor(false);
    setOpenCut(false);
    setOpenMenu(false);
  }

  function handleNavigate(){
    navigate("/styliste")
  }

  return (
    <div className="menuBurger">
      <div className="selectionsHair">
      <button className="buttonPhotomaton" onClick={handleColor}>
          Couleur
        </button>
        {openColor ? (
          <div className="chooseColor">
            {colorsHair.map((color) => {
              return (
                <img
                  onClick={() => handleSelectColor(color.color)}
                  className="colorHair"
                  key={color.id}
                  src={color.image}
                />
              );
            })}
          </div>
        ) : (
          ""
        )}
        <button className="buttonPhotomaton" onClick={handleCut}>
          Coupe
        </button>
        
       
        {/* {openCut && filteredHaircuts.length > 0 && ( */}
        {openCut && (
          <div className="chooseCut">
            {/* <p
              className="switch"
              onClick={startIndex > 0 ? handlePrev : null}
            >{`<`}</p> */}
            {/* {filteredHaircuts.map((cut) => ( */}
            {HairCutF
            .filter((cutFiltered)=>(chooseColor=== cutFiltered.color))
            .map((cut) => (
              <img
                className="cutHair"
                onClick={() => handleSelectHairCut(cut)}
                key={cut.id}
                src={cut.image}
              />
            ))}
            {/* <p
              className="switch"
              onClick={startIndex + 2 < HairCutF.length ? handleNext : null}
            >{`>`}</p> */}
          </div>
        )}
        
      </div>
        <button className="buttonPhotomaton" onClick={handleNavigate}>Valider</button>

      <button className="buttonClose" onClick={handleClose}>{`<`}</button>
    </div>
  );
};

export default MenuBurger;
