import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget.jsx";

function NavBar() {
    const logoImage = "https://cdn-icons-png.flaticon.com/512/1451/1451303.png"
  return (
    <header>
      <nav>
        <Link to={"/"}>
          <div className="logoTipo">
            <img src={logoImage} alt="" />
            <p>GameStore</p>
          </div>
        </Link>
        {/* <a href="" className="logoTipo">
            <img src={logoImage} alt="" />
            <p>GameStore</p>
        </a> */}
        
        <ul>
          <li><NavLink to={"/"}>Inicio</NavLink></li>
          <li><NavLink to={"/categoria/1"}>categoria1</NavLink></li>
          <li><NavLink to={"/categoria/2"}>categoria2</NavLink></li>
          <li><NavLink to={"/categoria/3"}>categoria3</NavLink></li>
          <li><NavLink to={"/categoria/4"}>categoria4</NavLink></li>
          <li><NavLink to={"/categoria/5"}>categoria5</NavLink></li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
    
  );
}

export default NavBar;