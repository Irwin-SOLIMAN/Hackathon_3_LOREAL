import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [photo, setphoto] = useState("bonjour");
  const [chooseColor, setChooseColor] = useState("DarkBlond");

  return (
    <div className="app">
      <Header />
      <Outlet context={([photo, setphoto], [chooseColor, setChooseColor])} />
    </div>
  );
}

export default App;
