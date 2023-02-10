import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/">
          <img src="https://imgur.com/Gov1gbs.png" alt="Logo" />
        </NavLink>
      </div>
      <ul>
        <li className="active">
          <NavLink to="/loja">
            <button type="button" className="lojaNav">
              Loja
            </button>
          </NavLink>
        </li>
        <li className="active">
          <NavLink to="/novidades">
            <button type="button" className="novidadesNav">
              Novidades
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
              CART
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
