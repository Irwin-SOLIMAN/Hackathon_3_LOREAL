import MenuBurger from "../components/MenuBurger";
import { useOutletContext, useNavigate } from "react-router-dom";
import Camera from "../components/Camera";

import { useEffect, useState, useRef } from "react";

const Photomaton = () => {
  const { photo, setScreenshot, backToCamera, setBackToCamera } =
    useOutletContext();

  const [openMenu, setOpenMenu] = useState(true);
  const [chooseCut, setChooseCut] = useState("");
  const [photoSave, setPhotoSave] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setPhotoSave(photo);
    setOpenMenu(true);
    setChooseCut("");
  }, [backToCamera]);

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
      {!backToCamera ? (
        <Camera />
      ) : (
        <>
          <div
            className="backBTN"
            onClick={() => setBackToCamera(!backToCamera)}
          >
            {" "}
            {`< Caméra`}{" "}
          </div>

          <div className="photomaton">
            <div className="photoArea" ref={ref}>
              {photo && (
                <img
                  className="photoUser"
                  src={photoSave}
                  alt="photo-capturer"
                />
              )}
              {chooseCut && (
                <img className={chooseCut.className} src={chooseCut.image} />
              )}
            </div>
            {openMenu === false ? (
              <button className="buttonMenu" onClick={handleMenu}>
                <img src="/logo/next.png"/>
              </button>
            ) : (
              <MenuBurger
                setChooseCut={setChooseCut}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
              />
            )}
            <button
              className="buttonPhotomaton valider"
              onClick={handleNavigate}
            >
              {`Valider >`}
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Photomaton;
