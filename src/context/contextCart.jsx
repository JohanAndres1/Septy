import { createContext, useReducer } from "react";
import { cartReducer, cartInitialState } from "../reducers/cartReducer";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product
    });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const reduceFromCart = (product) =>
    dispatch({
      type: "REDUCE_FROM_CART",
      payload: product
    });

  return { state, addToCart, removeFromCart, clearCart, reduceFromCart };
}

export function CartProvidor({ children }) {
  const { state, addToCart, removeFromCart, clearCart, reduceFromCart } =
    useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        clearCart,
        reduceFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
