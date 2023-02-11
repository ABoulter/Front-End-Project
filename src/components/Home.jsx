import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <nav className="hero">
      <h1>
        <img
          src="/images/header.gif"
          className="headerTitle"
          alt="titulo da pagina"
        />
        <img
          src="/images/headermobile.gif"
          className="headerMobile"
          alt="header mobile"
        />
      </h1>

      <div className="novaColecao">
        <NavLink to="/novidades">
          <img src="/images/newcollection.gif" alt="nova colecção" />
        </NavLink>
      </div>
      <div className="aTuaObra">
        <NavLink to="/obra">
          <img src="/images/atuaobra.png" alt="faz a tua obra" />
        </NavLink>
      </div>
      <div className="todasAsObras">
        <NavLink to="/loja">
          <img src="/images/todasasobras.png" alt="todas as obras" />
        </NavLink>
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

      <div className="faq">
        <NavLink to="/faq">
          <img src="/images/FAQ.png" alt="faq" />
        </NavLink>
      </div>
      <div className="sobreNos">
        <NavLink to="/sobrenos">
          <img src="/images/sobrenos.png" alt="Sobre nos" />
        </NavLink>
      </div>

      <div className="footer">
        <img src="/images/footer.png" alt="assinatura" />
      </div>
    </nav>
  );
}
