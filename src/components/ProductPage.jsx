import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function ProductPage() {
  const params = useParams();

  const [productDetails, setProductDetails] = useState([]);
  const [sliderPos, setSliderPos] = useState(0);

  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

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

          <div className="productDescription">
            <h1>{productDetails.name}</h1>
            <h2>Descrição</h2>

            <p>{productDetails.description}.</p>
            <p>Autor: {productDetails.author}</p>
            <p>Ano: {productDetails.year}</p>

            <p className="price">{productDetails.price}€</p>
            <button>Encomendar</button>
            <NavLink to="/loja">
              <button className="voltar">Voltar</button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

/*    {
     product_image.src.map((image, index) => {
       return index < 3 ? (
         <div key={index} className="productRow">
           <img
             src={image.src}
             alt={`arte ${image.name} em diferentes salas`}
           />
         </div>
       ) : null;
     });
   } */
