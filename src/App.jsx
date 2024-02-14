import { products as initialProducts } from "./mocks/products.json";
import { useState } from "react";
import { Products } from "./components/Products";
import { CartProvidor } from "./context/contextCart";
import { Header } from "./components/Header";
import { useFilters } from "./hooks/useFilters";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [products] = useState(initialProducts);
  const { filterProducts } = useFilters();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvidor>
      <Header />
      <main className="main">
        <Products products={filteredProducts} />
      </main>
    </CartProvidor>
  );
}

export default App;
