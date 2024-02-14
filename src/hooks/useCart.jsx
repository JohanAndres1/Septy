import { useContext } from "react";
import { CartContext } from "../context/contextCart";

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error('useCatr must be within a CartProvider')
    }

    return context
}