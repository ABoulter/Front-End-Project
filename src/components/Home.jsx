import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <main className="herosection">
      <img src="https://imgur.com/p6i1XFn.png" alt="titulo da pagina" />
      <section>
        <div>
          <NavLink to="/novidades">
            <img src="https://imgur.com/rKXn5tR.gif" alt="nova colecção" />
          </NavLink>
        </div>
        <div>
          <NavLink to="/loja">
            <img src="https://imgur.com/UyIdFTh.png" alt="faz a tua obra" />
          </NavLink>
        </div>
        <div>
          <NavLink to="/fazatuaobra">
            <img src="https://imgur.com/z2jp7yo.png" alt="todas as obras" />
          </NavLink>
        </div>
      </section>
      <div className="memegenerator">
        <NavLink to="/memegenerator">
          <img src="https://imgur.com/pBioAPo.png" alt="meme generator" />
        </NavLink>
      </div>
      <section className="info">
        <div className="faq">
          <NavLink to="/faq">
            <img src="https://imgur.com/KXvSHkf.png" alt="faq" />
          </NavLink>
        </div>
        <div className="sobrenos">
          <NavLink to="/sobrenos">
            <img src="https://imgur.com/rYCSxmv.png" alt="Sobre nos" />
          </NavLink>
        </div>
      </section>
      <div className="footer">
        <img src="https://imgur.com/QwGLQZ7.png" alt="assinatura" />
      </div>
    </main>
  );
}
