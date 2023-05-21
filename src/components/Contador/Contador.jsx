import React, { useState } from "react";
import "./Contador.css"

function Contador(props) {
    const inicio = 0
    const [contador, setContador] = useState(inicio)
    const aumentarContador = () => {
        setContador(contador + 1)
    }
    const disminuirContador = () => {
        if(contador > 0){
            setContador(contador - 1)
        }
    }

    return (
        <>
            <button onClick={aumentarContador} >+</button>
            <strong>{contador}</strong>
            <button onClick={disminuirContador} >-</button>
        </>
    );
}

export default Contador;