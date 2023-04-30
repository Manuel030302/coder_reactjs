import React from "react";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.jsx";

function NavBar() {
    const logoImage = "https://cdn-icons-png.flaticon.com/512/1451/1451303.png"
  return (
    <nav>
        
        <a href="" className="logoTipo">
            <img src={logoImage} alt="" />
            <p>GameStore</p>
        </a>
        
        <ul>
            <li><a href="#">Catalogo</a></li>
            <li><a href="#">Deseados</a></li>
            <li><a href="#">Biblioteca</a></li>
            <li><a href="#">Comunidad</a></li>
            <li><a href="#"><CartWidget/></a></li>
        </ul>
    </nav>
  );
}

export default NavBar;