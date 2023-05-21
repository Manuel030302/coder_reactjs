import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({id, name, price, discount, rate, image}) =>{

    return(
        <div className="Item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
            <p>{id}</p>
            {/* <button>Ver detalles</button> */}
            <Link to={ `/item/${id}` } >Ver detalles</Link>
        </div>
    )
}

export default Item;