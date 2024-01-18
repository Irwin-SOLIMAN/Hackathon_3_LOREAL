import Modal from "react-modal";
import Camera from "../components/Camera";
import React, { useRef, useState } from "react";

Modal.setAppElement("#root");

const Home = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleButtonClick = () => {
    setIsCameraOpen(true);
  };

  return (
    <div className="container-accueil">
      <div className="photo-accueil">
        <h1>PARCE QUE VOUS LE VALEZ BIEN,</h1>
        <h2>SIMULEZ VOTRE STYLE ! </h2>
        <div className="imageContainer">
          <img src="/images/accueil-picture.jpg" alt="accueil" />
        </div>
        <button onClick={handleButtonClick}>
          <p>Commencer votre transformation</p>
          <img src="/logo/appareil-photo.png" alt="camera" />
        </button>
      </div>
      <div className="modal-content">
        <Modal
          isOpen={isCameraOpen}
          onRequestClose={() => setIsCameraOpen(false)}
          className={"modal"}
        >
          <div className="cercle"></div>
          <Camera />
        </Modal>
      </div>
    </div>
  );
};

export default Home;
