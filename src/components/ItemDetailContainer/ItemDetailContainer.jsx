import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getUnJuego } from "../../asyncmock";

const ItemDetailContainer = () =>{
    const [juego, setJuego] = useState([])
    const {idItem} = useParams();

    useEffect(() =>{
        getUnJuego(idItem)
            .then(res => setJuego(res))
            .catch(error => console.error(error))
    }, [idItem])
    return (
        <div>
            <ItemDetail {...juego} />
        </div>
    )
}
export default ItemDetailContainer