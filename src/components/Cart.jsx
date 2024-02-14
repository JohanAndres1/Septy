import { useId } from "react";
import { useCart } from "../hooks/useCart";
import { CartIcon, DeletedCartIcon, CartRemoveIcon } from "./Icons";
import { Button, CardImg, CardText } from "react-bootstrap";

import "./CSS/Cart.css";

function CartItem({ thumbnail, price, title, quantity, addToCart, removeFromCart, reduceFromCart }) {
  return (
    <li className="d-flex flex-column gap-2">
      <CardImg src={thumbnail} alt={title} className="cart-img" />
      <div className="d-flex justify-content-center align-items-center gap-2">
        <strong>{title}</strong>
        <CardText>${price}</CardText>
      </div>

      <footer className="d-flex align-items-center gap-2 justify-content-center w-100 mb-1">
        <small>Cantidad: {quantity}</small>
        <button className="li-button" onClick={addToCart}> + </button>
        <button className="li-button" onClick={reduceFromCart}> - </button>
        <Button variant="secondary" onClick={removeFromCart}>
          <CartRemoveIcon />
        </Button>
      </footer>
    </li>
  );
}

export function Cart() {
  const cartChechkboxId = useId();
  const { cart, clearCart, addToCart, reduceFromCart, removeFromCart } = useCart();

  return (
    <>
      <label htmlFor={cartChechkboxId} className="cart-button btn btn-primary">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartChechkboxId}  hidden/>

      <div className="cart-container">
        <header className="cart-header d-flex justify-content-evenly align-items-center p-2">
          <p className="m-0"> Total:
            <strong>{" "}$
              {cart.reduce((acc, product) => {
                return acc + product.price * product.quantity;
              }, 0)}
            </strong>
          </p>

          <Button variant="secondary" onClick={clearCart}>
            <DeletedCartIcon />
          </Button>
          <Button variant="secondary">
            <a className="cart-shop" href="#comprar">Comprar</a>
          </Button>
        </header>

        <main className="container cart-main m-0 p-0">
          <ul className="m-0 d-grid gap-3 ">
            {cart.map((product) => (
              <CartItem
                key={product.id}
                {...product}
                addToCart={() => addToCart(product)}
                reduceFromCart={() => reduceFromCart(product)}
                removeFromCart={() => removeFromCart(product)}
              />
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
