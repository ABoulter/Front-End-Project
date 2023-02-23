import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Loja() {
  const [art, setArt] = useState([]);
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <button className="closeModalBtn">
          <img
            className="closeModal"
            src="/images/close.png"
            alt="butão de fechar"
            onClick={() => setModel(false)}
          />
        </button>
        <img src={tempImgSrc} alt="" />
      </div>
      {art.map((category) => (
        <section className="artSection" key={category.category_id}>
          <h2>
            <img src={category.category} alt={category.name} />
          </h2>

          <div id="allList" className={`artList${category.category_id}`}>
            {category.art.map((art) => (
              <div key={art.art_id}>
                <div className="artImgContainer">
                  <h3>{art.name}</h3>
                  <img
                    src={art.image}
                    alt={art.name}
                    onClick={() => getImg(art.image)}
                  />
                </div>
                <div className="priceContainer">
                  <NavLink
                    to={`/art-details/${category.category_id}/${art.art_id}`}>
                    Encomendar!
                  </NavLink>
                  <p>
                    Pelo baixíssimo preço de
                    <br />
                    <span>{art.price}€</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
