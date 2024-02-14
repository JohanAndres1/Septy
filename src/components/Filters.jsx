import { useId } from "react";
import { useFilters } from "../hooks/useFilters";

import "./CSS/Filters.css";

export function Filters() {
  const { setFilters } = useFilters();

  const categoryFilterId = useId();

  const toggleChangeCategory = (event) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value,
    }));
  };

  return (
    <section className="filters">

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={toggleChangeCategory}>
          <option value="all">Todas</option>
          <option value="clientes">Cliente</option>
          <option value="consultas">Consulta</option>
        </select>
      </div>

    </section>
  );
}
