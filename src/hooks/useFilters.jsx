import { useContext } from "react"
import { FiltersContext } from "../context/contextFilters"

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (filters.category === "all" || product.category === filters.category)
    })
  }

  return { filters, filterProducts, setFilters };
}
