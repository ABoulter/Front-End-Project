import "./App.css";
import "./components/Navbar.css";
import "./components/Home.css";
import "./components/Obra.css";
import "./components/Sobre.css";
import "./components/Loja.css";
import "./components/ProductPage.css";
import "./components/Faq.css";
import "./components/Footer.css";
import "./components/Cart.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loja from "./components/Loja";
import Faq from "./components/Faq";
import Novidades from "./components/Novidades";
import Sobre from "./components/Sobre";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Obra from "./components/Obra";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
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
          <Route path="/loja" element={<Loja />} />
          <Route
            path="/art-details/:category_id/:art_id"
            element={
              <ProductPage cart={cart} onAdd={onAdd} onRemove={onRemove} />
            }
          />
          <Route path="/novidades" element={<Novidades />} />
          <Route path="/sobrenos" element={<Sobre />} />
          <Route path="/faq" element={<Faq />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} onAdd={onAdd} onRemove={onRemove} />}
          />
          <Route path="/obra" element={<Obra />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
