import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import colorsHair from "./colorsHair";
import HairCutF from "./hairCutF";

const MenuBurger = ({ openMenu, setOpenMenu, setChooseCut }) => {
  const [openCut, setOpenCut] = useState(false);
  const [openColor, setOpenColor] = useState(true);
  const [startIndex, setStartIndex] = useState(0);
  const { chooseColor, setChooseColor, validation } = useOutletContext();

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

  function handleSelectHairCut(chooseCut) {
    setChooseCut(chooseCut);
    setOpenColor(false);
  }

  return (
    <>
      {openMenu && (
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

            {openCut && (
              <div className="chooseCut">
                {HairCutF.filter(
                  (cutFiltered) => chooseColor === cutFiltered.color
                ).map((cut) => (
                  <img
                    className="cutHair"
                    onClick={() => handleSelectHairCut(cut)}
                    key={cut.id}
                    src={cut.image}
                  />
                ))}
              </div>
            )}
          </div>

          <button className="buttonClose" onClick={handleClose}>{`<`}</button>
        </div>
      )}
    </>
  );
};

export default MenuBurger;
