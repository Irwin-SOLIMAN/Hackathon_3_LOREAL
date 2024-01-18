import MenuBurger from "../components/MenuBurger";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

const Photomaton = () => {
  const [photo, setphoto] = useOutletContext();
  const [openMenu, setOpenMenu] = useState(false);
  const [chooseCut, setChooseCut] = useState("");
  const [photoSave, setPhotoSave] = useState("");

  useEffect(() => {
    setPhotoSave(photo);
  }, []);

  function handleMenu() {
    setOpenMenu(true);
  }

  console.log(photo);

  return (
    <div className="photomaton">
      {photo && (
        <img className="photoUser" src={photoSave} alt="photo-capturer" />
      )}
      {chooseCut && (
        <img className={chooseCut.className} src={chooseCut.image} />
      )}
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
