import React, {useState, useEffect} from "react";
import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({juego}) =>{

    return(
        <div className="ItemList">
            {juego.map(game => <Item key={game.id} {...game} />)}
        </div>
    )
}

export default ItemList;