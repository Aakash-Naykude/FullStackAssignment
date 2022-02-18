import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Componants/Home/Home";
import Login from "./Componants/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
