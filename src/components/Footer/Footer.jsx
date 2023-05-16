import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import image from "../../assets/envelope-regular-24.png";
import logo from "../../assets/Recurso 1.png";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="redirect-links">
        <h4>Redirecciones</h4>
        <div>
          <ul>
            {location.pathname !== "/" ? (
              <li>
                <Link to="/">Hogar</Link>
              </li>
            ) : null}

            <li>
              <Link to="/about">Nosotros</Link>
            </li>
            <li>
              <Link to="/developers">Desarrolladores</Link>
            </li>
          </ul>
        </div>
      </div>
      <img className="footer-logo" src={logo} alt="TukiMarket"></img>
      <div className="contact-block">
        <h4>Contactos</h4>
        <div>
          <img src={image} alt="mail" />
          <span>TukiMarket@gmail.com</span>
        </div>
      </div>
    </footer>
  );
}
