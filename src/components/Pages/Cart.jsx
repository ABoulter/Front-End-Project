import { useEffect } from "react";

export default function Cart(props) {
  const { cart, onAdd, onRemove } = props;
  const itemsPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.23;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cartSection">
      <h1>
        <img src="/images/cart.png" alt="Cart" />
      </h1>
      <div>
        {cart.length === 0 && (
          <div className="emptyCart">
            <strong>O carrinho está vazio!</strong>
            <img src="/images/emptyCart.png" alt="Saco vazio" />
          </div>
        )}
        {cart.map((item) => (
          <div key={item.art_id} className="cartRow">
            <div className="cartColOne">
              <p>{item.name}</p>
              <img src={item.image} alt={`Quadro ${item.name}`} />
              <p className="textRight">
                {item.qty} x {item.price.toFixed(2)}€
              </p>
            </div>
            <div className="cartColTwo">
              <button
                onClick={() => onAdd(item)}
                className="cartAdd"
                aria-label="Adicionar Produto">
                +
              </button>
              <button
                onClick={() => onRemove(item)}
                className="cartRemove"
                aria-label="Remover produto">
                -
              </button>
            </div>
          </div>
        ))}
        {cart.length !== 0 && (
          <>
            <hr />
            <div className="cartRow">
              <div className="cartColTwo">Preço do Artigo</div>
              <div className="cartColThree">{itemsPrice.toFixed(2)}€</div>
            </div>
            <div className="cartRow">
              <div className="cartColTwo">IVA 23%</div>
              <div className="cartColThree">{taxPrice.toFixed(2)}€</div>
            </div>
            <div className="cartRow">
              <div className="cartColTwo">Portes de Envio</div>
              <div className="cartColThree">{shippingPrice.toFixed(2)}€</div>
            </div>
            <div className="cartRow">
              <div className="cartColTwo">
                <strong>Preço Total</strong>
              </div>
              <div className="cartColThree">
                <strong>{totalPrice.toFixed(2)}€</strong>
              </div>
            </div>
            <hr />
            <div>
              <button className="checkout" onClick={() => alert("Comprado!")}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
