import { Button, CardImg, CardBody, CardGroup } from "react-bootstrap";
import { useCart } from "../hooks/useCart";
import { AddCartIcon, CartCheckIcon } from "./Icons";
import NavLateral from "./NavLateral";

import "./CSS/Products.css";
import { Cart } from "./Cart";

export function Products( products ) {

  const { addToCart, cart } = useCart();
  
  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };
  
  const user = (product) => {
    return cart.some((item) => item.user === product.user);
  }


  return (
    <>
      <Cart />

      <NavLateral />
      
      <div className="container-products">

        <h1 className="title">Planes de Consulta</h1>

        <ul className="row">
          {products.products.map((product) => {
            const isProductInCart = checkProductInCart(product);
            const isUser = user(product);
            
            return (
              <li className="card" key={product.id}>
                <CardImg src={product.thumbnail} alt={product.title} variant="top"/>
                <CardBody>
                  <h6>{product.title}</h6>
                  <p className="card-text">{product.description}</p>
                  <ul>
                    <li className="card-li">
                      <p className="card-text">{product.characteristics[0]}</p>
                    </li>
                    <li className="card-li">
                      <p className="card-text">{product.characteristics[1]}</p>
                    </li>
                    <li className="card-li">
                      <p className="card-text">{product.characteristics[2]}</p>
                    </li>
                  </ul>
                </CardBody>
                <CardGroup>
                  <p className="card-discount">${product.discount} {!isUser ? product.user + product.category : product.user + product.category}</p>
                  <p className="card-price">${product.price} {!isUser ? product.user + product.category : product.user + product.category}</p>
                </CardGroup>
                <div className="card--div-button">
                  <Button variant="primary"
                    onClick={() => {
                      !isProductInCart && addToCart(product);
                    }}
                  >
                    {isProductInCart ? "Agregado " : "Agregar al carrito "}
                    {isProductInCart ? <CartCheckIcon /> : <AddCartIcon />}
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

    </>
  );
}
