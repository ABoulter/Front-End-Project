import "./App.css";
import "./components/Navbar.css";
import "./components/Home.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loja from "./components/Loja";
import Faq from "./components/Faq";
import Novidades from "./components/Novidades";
import Sobre from "./components/Sobre";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loja" element={<Loja />} />
          <Route path="/novidades" element={<Novidades />} />
          <Route path="/sobrenos" element={<Sobre />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
