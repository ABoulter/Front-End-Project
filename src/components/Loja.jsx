import { useEffect, useState } from "react";

export default function Loja() {
  const [art, setArt] = useState([]);

  useEffect(() => {
    fetch("/api/galeria.json")
      .then((response) => response.json())
      .then((data) => setArt(data));
  }, []);

  return (
    <main id="art">
      {art.map((category) => (
        <section key={category.category_id}>
          <h2>
            <img src={category.category} />
          </h2>
          <div className={`artList${category.category_id}`}>
            {category.art.map((art) => (
              <div key={art.art_id}>
                <div>
                  <h3>{art.name}</h3>
                  <img src={art.image} alt="" />
                  <div className="hideArt">
                    <img src={art.image} alt="" />
                  </div>
                  <button type="button">Encomendar!</button>
                </div>
                <p>
                  Pelo baixíssimo preço de{" "}
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
