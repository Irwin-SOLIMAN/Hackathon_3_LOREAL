import MenuBurger from "../components/MenuBurger";
import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

const Photomaton = () => {

const[photo, setphoto] = useOutletContext();
const [openMenu, setOpenMenu] = useState(false);

useEffect(() => {
    console.log(photo);
},[])

function handleMenu(){
    setOpenMenu(true);
}

  return (
  <div className="photomaton">
          <div>
        <img src={photo} alt="photo-capturer"/>
      </div>
    {openMenu === false ? <button className="buttonMenu" onClick={handleMenu}>{`<`}</button>: <MenuBurger openMenu={openMenu} setOpenMenu={setOpenMenu}/> }
  </div>
)};

export default Photomaton;
