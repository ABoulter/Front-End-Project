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
              src="https://www.simpleimageresizer.com/_uploads/photos/476783fc/Pixelated_Pepe_Sad_Frog_Meme_Rare_Dank_1_80x80.png"
              alt="Pepe triste"
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
