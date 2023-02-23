import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="hero">
      <h1>
        <img
          src="/images/header.gif"
          className="headerTitle"
          alt="Poubelle du Garage"
        />
        <img
          src="/images/headermobile.gif"
          className="headerMobile"
          alt="Poubelle du Garage"
        />
      </h1>
      <div className="obrasContainer">
        <div className="novaColecao">
          <NavLink to="/galeria">
            <img src="/images/lojaa.gif" alt="A nossa Galeria" />
          </NavLink>
        </div>
        <div className="aTuaObra">
          <NavLink to="/obra">
            <img src="/images/atuaobra.png" alt="faz a tua obra" />
          </NavLink>
        </div>
      </div>

      <div className="memeGenerator">
        <NavLink to="/memegenerator">
          <img
            src="/images/memegenerator.gif"
            alt="meme generator"
            className="memeDesktop"
          />
        </NavLink>
        <NavLink to="/memegenerator">
          <img
            src="/images/mememobile.gif"
            alt="meme generator"
            className="memeMobile"
          />
        </NavLink>
      </div>

      <div className="infoContainer">
        <div className="faq">
          <NavLink to="/faq">
            <img src="/images/FAQ.png" alt="Tens alguma duvida? Clica aqui" />
          </NavLink>
        </div>
        <div className="sobreNos">
          <NavLink to="/sobrenos">
            <img src="/images/sobrenos.png" alt="Sobre nós" />
          </NavLink>
        </div>
      </div>
    </main>
  );
}
