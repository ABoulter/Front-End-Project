import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function ProductPage(props) {
  const params = useParams();
  const { onAdd, onRemove, cart } = props;

  const [productDetails, setProductDetails] = useState([]);
  const [sliderPos, setSliderPos] = useState(0);

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/api/galeria.json")
      .then((response) => response.json())
      .then((data) => {
        const category = data.find(
          (item) => item.category_id == params.category_id
        );
        if (category) {
          const product = category.art.find(
            (item) => item.art_id == params.art_id
          );
          setProductDetails(product);
        }
      });
  }, []);

  const getImg = (image) => {
    setTempImgSrc(image);
    setModel(true);
  };

  const item = cart.find((x) => x.art_id === productDetails.art_id);

  return (
    <section className="productPage">
      {productDetails.product_image && (
        <div
          className={model ? "model open" : "model"}
          onClick={() => setModel(false)}>
          <img
            className="closeModal"
            src="/images/close.png"
            alt="butão de fechar"
            onClick={() => setModel(false)}
          />

          <img src={tempImgSrc} alt="" />
        </div>
      )}

      <div className="productViewer">
        <div className="viewerRow">
          <div className="viewerColOne">
            {productDetails.product_image &&
              productDetails.product_image.map((image, index) => {
                return index < 4 ? (
                  <button
                    key={index}
                    onClick={() => setSliderPos(index)}
                    className="productRow">
                    <img src={image} alt={`ver ${image.name}`} />
                  </button>
                ) : null;
              })}
          </div>
          <div className="viewerColTwo">
            <div className="displayProduct">
              <div>
                {productDetails.product_image && (
                  <img
                    src={productDetails.product_image[sliderPos]}
                    alt={`ver ${productDetails.product_image[sliderPos]} em tela principal`}
                    onClick={() =>
                      getImg(productDetails.product_image[sliderPos])
                    }
                  />
                )}
              </div>
            </div>
          </div>

          {productDetails.art_id && (
            <div className="productDescription">
              <h1>{productDetails.name}</h1>
              <h2>Descrição</h2>

              <p>{productDetails.description}.</p>
              <p>
                <strong>Autor:</strong> {productDetails.author}
              </p>
              <p>
                <strong>Ano:</strong> {productDetails.year}
              </p>

              <p className="price">{productDetails.price}€</p>

              {item ? (
                <div>
                  <button
                    className="productAdd"
                    onClick={() => onAdd(item)}
                    aria-label="Adicionar Produto">
                    +
                  </button>

                  <span>{item.qty}</span>
                  <button
                    className="productRemove"
                    onClick={() => onRemove(item)}
                    aria-label="Remover Produto">
                    -
                  </button>

                  <NavLink to="/cart" className="goToCart">
                    Ir para Cesto
                  </NavLink>
                </div>
              ) : (
                <button
                  onClick={() => onAdd(productDetails)}
                  aria-label="Encomendar">
                  Encomendar
                </button>
              )}
              <NavLink to="/galeria" className="voltar">
                Voltar
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
