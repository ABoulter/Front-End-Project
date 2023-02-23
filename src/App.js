import "./App.css";
import "./components/Navbar.css";
import "./components/Home.css";
import "./components/Obra.css";
import "./components/Sobre.css";
import "./components/Galeria.css";
import "./components/ProductPage.css";
import "./components/Faq.css";
import "./components/Footer.css";
import "./components/Cart.css";
import "./components/Meme.css";
import "./components/MemeGenerator.css";
import Navbar from "./components/Pages/Navbar";
import Galeria from "./components/Pages/Galeria";
import Faq from "./components/Pages/Faq";
import Sobre from "./components/Pages/Sobre";
import Home from "./components/Pages/Home";
import Cart from "./components/Pages/Cart";
import Obra from "./components/Pages/PixelPaint/Obra";
import ProductPage from "./components/Pages/ProductPage";
import Footer from "./components/Pages/Footer";
import MemeGenerator from "./components/Pages/MemeGenerator/MemeGenerator";
import Meme from "./components/Pages/MemeGenerator/Meme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const onAdd = (product) => {
    const exist = cart.find((x) => x.art_id === product.art_id);
    if (exist) {
      const newCart = cart.map((x) =>
        x.art_id === product.art_id ? { ...exist, qty: exist.qty + 1 } : x
      );
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = [...cart, { ...product, qty: 1 }];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };
  const onRemove = (product) => {
    const exist = cart.find((x) => x.art_id === product.art_id);
    if (exist.qty === 1) {
      const newCart = cart.filter((x) => x.art_id !== product.art_id);
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      const newCart = cart.map((x) =>
        x.art_id === product.art_id ? { ...exist, qty: exist.qty - 1 } : x
      );
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartItems={cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route
            path="/art-details/:category_id/:art_id"
            element={
              <ProductPage cart={cart} onAdd={onAdd} onRemove={onRemove} />
            }
          />
          <Route path="/sobrenos" element={<Sobre />} />
          <Route path="/faq" element={<Faq />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} onAdd={onAdd} onRemove={onRemove} />}
          />
          <Route path="/obra" element={<Obra />} />
          <Route path="/memegenerator" element={<MemeGenerator />} />
          <Route path="/generated" element={<Meme />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
