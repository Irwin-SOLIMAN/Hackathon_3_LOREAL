import MenuBurger from "../components/MenuBurger";
import { useOutletContext, useNavigate } from "react-router-dom";

import { useEffect, useState, useRef } from "react";

const Photomaton = () => {
  const { photo, setScreenshot } = useOutletContext();

  const [openMenu, setOpenMenu] = useState(true);
  const [chooseCut, setChooseCut] = useState("");
  const [photoSave, setPhotoSave] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setPhotoSave(photo);
  }, []);

  function handleMenu() {
    setOpenMenu(true);
  }

  const ref = useRef(null);
  // const [image, takeScreenshot] = useScreenshot();
  const getImage = () => {
    setScreenshot(ref.current);
    // setScreenshot(ref.current);
    // console.log(screenshot);
  };

  function handleNavigate() {
    setOpenMenu(false);
    getImage();
    navigate("/styliste");
    // setTimeout(() => {
    //   navigate("/styliste");
    // }, 1000);
  }

  return (
    <>
      <div className="photomaton">
        <div className="photoArea" ref={ref}>
          {photo && (
            <img className="photoUser" src={photoSave} alt="photo-capturer" />
          )}
          {chooseCut && (
            <img className={chooseCut.className} src={chooseCut.image} />
          )}
        </div>
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
      <button className="buttonPhotomaton" onClick={handleNavigate}>
        Valider
      </button>
      <div>
        {/* <div>
          <button style={{ marginBottom: "10px" }}>Take screenshot</button>
        </div> */}
        {/* <img width={300} src={image} alt={"Screenshot"} /> */}
        {/* <div ref={ref}>
          <h1>use-react-screenshot</h1>
          <p>
            <strong>hook by @vre2h which allows to create screenshots</strong>
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Photomaton;
