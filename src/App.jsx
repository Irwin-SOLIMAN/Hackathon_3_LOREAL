import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
