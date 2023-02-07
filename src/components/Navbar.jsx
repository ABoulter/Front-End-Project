import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <NavLink to="/">
        <img
          src="https://www.simpleimageresizer.com/_uploads/photos/476783fc/Pixelated_Pepe_Sad_Frog_Meme_Rare_Dank_1_80x80.png"
          alt="Pepe triste"
        />
      </NavLink>
      <ul>
        <li className="active">
          <NavLink to="/loja">Loja</NavLink>
        </li>
        <li className="active">
          <NavLink to="/sobrenos">sobre nós</NavLink>
        </li>
        <li className="active">
          <NavLink to="/faq">faq</NavLink>
        </li>
        <li className="active">
          <NavLink to="/cart">cart</NavLink>
        </li>
      </ul>
    </nav>
  );
}
