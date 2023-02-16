import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function ProductPage() {
  const params = useParams();

  const [productDetails, setProductDetails] = useState([]);

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
  }, []); /*  */

  console.log(productDetails);

  return (
    <main>
      <p>oi</p>
    </main>
  );
}
