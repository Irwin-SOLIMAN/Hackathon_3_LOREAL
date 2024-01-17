import { useState } from "react";
import Modal from "react-modal";
import Camera from "../components/Camera";

Modal.setAppElement("#root");

const Home = () => {
  const [isCameraOpen, setIsCameraOpen] = useState(false);

  const handleButtonClick = () => {
    setIsCameraOpen(true);
  };

  return (
    <div className="container-accueil">
      <div className="photo-accueil">
        <h1>PARCE QUE VOUS LE VALEZ BIEN !</h1>
        <h2>SIMULEZ VOTRE STYLE</h2>
        <img src="/images/accueil-picture.jpg" alt="accueil" />
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
          <Camera />
        </Modal>
      </div>
    </div>
  );
};

export default Home;
