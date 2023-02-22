import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Plans from "./components/Plans/Plans";
import Card from "./components/Card/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navegation from "./components/Navegation/Navegation";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navegation />} />
          <Route path="/home" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/card" element={<Card />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
