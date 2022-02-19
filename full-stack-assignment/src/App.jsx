import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Componants/Home/Home";
import More from "./Componants/Home/More";
import Login from "./Componants/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
