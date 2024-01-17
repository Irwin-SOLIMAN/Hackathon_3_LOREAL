import MenuBurger from "../components/MenuBurger";
import { useState } from "react";

const Photomaton = () => {

const [openMenu, setOpenMenu] = useState(false);

function handleMenu(){
    setOpenMenu(true);
}

  return (
  <div className="photomaton">
    {openMenu === false ? <button className="buttonMenu" onClick={handleMenu}>{`<`}</button>: <MenuBurger openMenu={openMenu} setOpenMenu={setOpenMenu}/> }
  </div>
)};

export default Photomaton;
