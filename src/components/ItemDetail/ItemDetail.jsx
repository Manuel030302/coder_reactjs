import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Contador from "../Contador/Contador";
import "./ItemDetail.css"

const ItemDetail = ({id, name, price, discount, rate, image}) =>{

    return (
        <div className="ItemDetail">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>${price}</p>
            <strong>{discount*100}% de descuento</strong>
            <p>{rate}</p>
            <p>{id}</p>
            <Contador/>
        </div>
    )
}
export default ItemDetail