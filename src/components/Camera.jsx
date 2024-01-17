import { useState } from "react";
import React from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};

function Camera() {
  const [photo, setphoto] = useState();

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setphoto(imageSrc);
  }, [webcamRef]);

  return (
    <div style={{ position: "relative", width: 500, height: 720 }}>
      <Webcam
        audio={false}
        height={"100%"}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={"100%"}
        videoConstraints={videoConstraints}
      />
      <button
        onClick={capture}
        style={{
          position: "absolute",
          bottom: 150,
          left: "50%",
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
      <div>
        <img src={photo} alt="photo-capturer"/>
      </div>
    </div>
  );
}

export default Camera;
