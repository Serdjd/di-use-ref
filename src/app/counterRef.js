import { useRef } from "react";

export default function CounterRef() {
    const value = useRef(0)
    function handleClick() {
        value.current++ 
        console.log(value.current)
    }

    function actualValue() {
        alert(value.current)
    }

    return(
        <>
            <button onClick={handleClick}>Incrementar</button>
            <button onClick={actualValue}>Ver valor</button>
        </>
    )
}