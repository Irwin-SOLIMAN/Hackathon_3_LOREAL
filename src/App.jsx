import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import { useScreenshot } from "use-react-screenshot";

function App() {
  const [photo, setPhoto] = useState("");
  const [screenshot, setScreenshot] = useScreenshot();
  const [backToCamera, setBackToCamera] = useState(true);

  const [chooseColor, setChooseColor] = useState("");

  return (
    <div className="app">
      <Header />
      <Outlet
        context={{
          photo,
          setPhoto,
          chooseColor,
          setChooseColor,
          screenshot,
          setScreenshot,
          backToCamera,
          setBackToCamera,
        }}
      />
    </div>
  );
}

export default App;
