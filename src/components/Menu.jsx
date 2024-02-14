import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { IconCloseMenu, IconCloseMenuLateral, IconMenu, IconMenuLateral } from "./Icons";
import NavLateral from "./NavLateral";

import "./CSS/Menu.css";


const useCounter = (initialState) => {
  const [count, setCount] = useState(initialState)

  const isIconToggle = () => setCount(!count)

  return { count, isIconToggle };
}

export default function Menu() {
  const isIconNav = useCounter(true);
  const isIconMenu = useCounter(true);

  return (
    <Navbar className="w-100 navbar-mobile">
      <label htmlFor="nav-lateral" className="button-toggle-nav" onClick={isIconNav.isIconToggle}>
        {isIconNav.count ? <IconMenuLateral /> : <IconCloseMenuLateral />}
      </label>
      <input type="checkbox" id="nav-lateral" hidden />
      <NavLateral />
      <Navbar.Brand href="#home">SEPTY7</Navbar.Brand>
      <label htmlFor="basic-navbar-nav" className="button-toggle-navbar" onClick={isIconMenu.isIconToggle}>
        {isIconMenu.count ? <IconMenu /> : <IconCloseMenu />}
      </label>
      <input type="checkbox" id="basic-navbar-nav" hidden />
      <Nav className="me-5 toggle-navbar">
        <Nav.Link href="#home" className="mx-2 navbar-items">Mi Cuenta</Nav.Link>
        <Nav.Link href="#link" className="mx-2 navbar-items">Pricing</Nav.Link>
        <Nav.Link href="#link" className="mx-2 navbar-items">Actualizaciones</Nav.Link>
        <Nav.Link href="#link" className="mx-2 navbar-items">Notificaciones</Nav.Link>
        <Nav.Link href="#link" className="mx-2 navbar-items">Cerrar Sesión</Nav.Link>
      </Nav>
    </Navbar>
  );
}
