import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Loja() {
  const [art, setArt] = useState([]);
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  useEffect(() => {
    fetch("/api/galeria.json")
      .then((response) => response.json())
      .then((data) => setArt(data));
  }, []);

  const getImg = (image) => {
    setTempImgSrc(image);
    setModel(true);
  };

  return (
    <main id="art">
      <div
        className={model ? "model open" : "model"}
        onClick={() => setModel(false)}>
        <img
          className="closeModal"
          src="/images/close.png"
          alt="butão de fechar"
          onClick={() => setModel(false)}
        />
        {/* colocar butão */}
        <img src={tempImgSrc} alt="" />
      </div>
      {art.map((category) => (
        <section key={category.category_id}>
          <h2>
            <img src={category.category} alt="" />
          </h2>

          <div id="allList" className={`artList${category.category_id}`}>
            {category.art.map((art) => (
              <div key={art.art_id}>
                <div>
                  <h3>{art.name}</h3>
                  <img
                    src={art.image}
                    alt=""
                    onClick={() => getImg(art.image)}
                  />
                  <NavLink
                    to={`/art-details/${category.category_id}/${art.art_id}`}>
                    <button> Encomendar!</button>
                    {/* tirar butão, estilizar anchor */}
                  </NavLink>
                </div>
                <p>
                  Pelo baixíssimo preço de
                  <br />
                  <span>{String(art.price).replace(".", ",")}€</span>
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
