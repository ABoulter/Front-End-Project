import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  const { cartItems } = props;
  return (
    <nav className="nav">
      <div>
        <NavLink to="/">
          <img src="/images/logo.png" alt="Logo" />
        </NavLink>
      </div>
      <ul>
        <li className="active">
          <NavLink to="/galeria">
            <button type="button" className="galeriaNav">
              Galeria
            </button>
          </NavLink>
        </li>

        <li className="active">
          <NavLink to="/sobrenos">
            <button type="button" className="sobrenosNav">
              Sobre nós
            </button>
          </NavLink>
        </li>
        <li className="active">
          <NavLink to="/faq">
            <button type="button" className="faqNav">
              FAQ
            </button>
          </NavLink>
        </li>
        <li className="active">
          <NavLink to="/cart">
            <button type="button" className="cartNav">
              CART (
              <span className="cartNumber">{cartItems ? cartItems : ""}</span>)
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
