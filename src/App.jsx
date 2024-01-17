import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";

function App() {

  const [photo, setphoto] = useState("bonjour");

  return (
    <div className="app">
      <Header />
      <Outlet context={[photo, setphoto]}/>
    </div>
  );
}

export default App;
