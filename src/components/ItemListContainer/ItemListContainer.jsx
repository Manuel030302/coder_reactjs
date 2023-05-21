import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"
import { getJuego, getJuegoPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";

function ItemListContainer(props) {
  const [juego, setJuego] = useState([])
  const {idCategoria} = useParams();

  useEffect( () =>{
    const funcionCatalogo = idCategoria ? getJuegoPorCategoria : getJuego;
    funcionCatalogo(idCategoria)
      .then(res => setJuego(res))
      .catch(error => console.error(error))
  }, [idCategoria])

  /* useEffect( () =>{
    getJuego()
      .then(res => {
        setJuego(res)
        console.log(`arreglo de res: ${res}`)
        console.log(JSON.stringify(res))
        console.log(`arreglo de juego: ${juego}`)
        console.log(JSON.stringify(juego))
      })
      .then(console.log(juego))
      .catch(error => console.error(error))
  },[]) */

  return (
    <main>
      <h1 className="">{props.greeting}</h1>
      <ItemList juego={juego} />
    </main>
  );
}

export default ItemListContainer;