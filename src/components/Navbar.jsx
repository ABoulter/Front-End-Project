import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/loja">
            <button type="button" className="loja">
              Loja
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/novidades">
            <button type="button" className="novidades">
              Novidades
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <img
              src="https://www.simpleimageresizer.com/_uploads/photos/476783fc/Poubelle_du_Garage-13_4_240x120.png"
              alt="Poubelle du Garage"
            />
          </NavLink>
        </li>

        <li>
          <NavLink to="/sobrenos">
            <button type="button" className="sobrenos">
              Sobre nós
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/faq">
            <button type="button" className="faq">
              FAQ
            </button>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <button type="button" className="cart">
              CART
            </button>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
