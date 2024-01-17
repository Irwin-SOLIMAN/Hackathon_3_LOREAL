import MenuBurger from "../components/MenuBurger";
import { useOutletContext } from "react-router-dom";
import { useState } from "react";

const Photomaton = () => {
  const [photo, setphoto] = useOutletContext();
  const [openMenu, setOpenMenu] = useState(false);
  const [chooseCut, setChooseCut] = useState("");

  function handleMenu() {
    setOpenMenu(true);
  }

  return (
    <div className="photomaton">
      <img className="photoUser" src={photo} alt="photo-capturer" />
      {chooseCut && <img className={chooseCut.className} src={chooseCut.image} /> }
      {openMenu === false ? (
        <button className="buttonMenu" onClick={handleMenu}>{`<`}</button>
      ) : (
        <MenuBurger
          setChooseCut={setChooseCut}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
        />
      )}
    </div>
  );
};

export default Photomaton;
