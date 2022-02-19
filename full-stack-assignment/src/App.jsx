import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Componants/Home/Home";
import More from "./Componants/Home/More";
import Login from "./Componants/Login/Login";
import Navbar from "./Componants/Navbar"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/home/:_id" element={<More />}></Route>
      </Routes>
    </div>
  );
}

export default App;
