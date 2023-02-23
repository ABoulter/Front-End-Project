import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const { cartItems } = props;

  return (
    <nav className="nav">
      <div>
        <NavLink to="/" className="logoNav">
          <img src="/images/logo.png" alt="Poubelle du Garage" />
        </NavLink>
      </div>
      <ul>
        <li className="active">
          <NavLink to="/galeria" className="galeriaNav">
            Galeria
          </NavLink>
        </li>
        <li className="active">
          <NavLink to="/sobrenos" className="sobrenosNav">
            Sobre nós
          </NavLink>
        </li>
        <li className="active">
          <NavLink to="/faq" className="faqNav">
            FAQ
          </NavLink>
        </li>
        <li className="active">
          <NavLink to="/cart" className="cartNav">
            CART (
            <span className="cartNumber">{cartItems ? cartItems : ""}</span>)
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
