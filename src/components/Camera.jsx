import { useOutletContext, useNavigate } from "react-router-dom";
import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 375,
  height: 628,
  facingMode: "user",
};

function Camera() {
  const navigate = useNavigate();

  const { setPhoto } = useOutletContext();

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);
    navigate("/photomaton");
  }, [navigate, setPhoto]);

  return (
    <div
      style={{
        position: "relative",
        width: 365,
        // height: ,
        // transform: "translate(40px, 40px)",
      }}
    >
      <Webcam
        audio={false}
        height={"100%"}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={"100%"}
        videoConstraints={videoConstraints}
        screenshotQuality={1}
      />
      <button
        onClick={capture}
        style={{
          position: "absolute",
          bottom: 15,
          left: "62%",
          transform: "translateX(-70%)",
          zIndex: 100,
          backgroundColor: "black",
          borderRadius: 10,
          width: 150,
          height: 40,
          fontWeight: "bold",
          fontFamily: "TradeGothicLTStdBold",
          fontSize: 17,
          color: "white",
        }}
      >
        Prend ta photo
      </button>
    </div>
  );
}

export default Camera;
