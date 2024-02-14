import Nav from "react-bootstrap/Nav";
import { Configuracion, Cuenta, Grafico, Historial, Usurarios } from "./Icons";

import "./CSS/NavLateral.css";

export default function NavLateral() {
  return (
    <Nav className="nav-check nav-aside">
      <Nav.Item>
        <Nav.Link href="#home">Conoce tus Clientes</Nav.Link>
      </Nav.Item>
      <span></span>
      <Nav.Item>
        <Nav.Link href="#link">
          <Cuenta /> Consulta Personal
        </Nav.Link>
        <Nav.Link href="#link">
          <Usurarios /> Consulta Masiva
        </Nav.Link>
        <Nav.Link href="#link">
          <Configuracion /> Consulta Automática
        </Nav.Link>
      </Nav.Item>
      <span></span>
      <Nav.Item>
        <Nav.Link href="#link">
          <Historial /> Historial de Consulta
        </Nav.Link>
        <Nav.Link href="#link">
          <Grafico/> Estatus Consultas</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
