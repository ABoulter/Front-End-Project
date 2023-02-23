import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar(props) {
  const { cartItems } = props;
  const navigate = useNavigate();
  return (
    <nav className="nav">
      <div>
        <NavLink to="/">
          <img src="/images/logo.png" alt="Logo" />
        </NavLink>
      </div>
      <ul>
        <li className="active">
          <button
            onClick={() => navigate("/galeria")}
            type="button"
            className="galeriaNav">
            Galeria
          </button>
        </li>

        <li className="active">
          <button
            onClick={() => navigate("/sobrenos")}
            type="button"
            className="sobrenosNav">
            Sobre nós
          </button>
        </li>
        <li className="active">
          <button
            onClick={() => navigate("/faq")}
            type="button"
            className="faqNav">
            FAQ
          </button>
        </li>
        <li className="active">
          <button
            onClick={() => navigate("/cart")}
            type="button"
            className="cartNav">
            CART (
            <span className="cartNumber">{cartItems ? cartItems : ""}</span>)
          </button>
        </li>
      </ul>
    </nav>
  );
}
