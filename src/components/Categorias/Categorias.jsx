import React, { useState, useEffect } from "react";

const Categorias = () =>{

    const [categoria, setCateria] = useState("")
        const defCategoria = (categoria) =>{
            setCateria(categoria)
        }

    return(
        <>
            <h2>Categorias</h2>
            <button onClick={ () => defCategoria("1") }>Accion</button>
            <button onClick={ () => defCategoria("2") }>Aventura</button>
            <button onClick={ () => defCategoria("3") }>Terror</button>
            <button onClick={ () => defCategoria("4") }>Indie</button>
            <button onClick={ () => defCategoria("5") }>RPG</button>
        </>
    );
}

export default Categorias