import { useEffect, useRef, useState } from "react";

export default function PreviousValue() {
    const [value,setValue] = useState(0)
    const previousValue = useRef(value)

    useEffect(() => {
        previousValue.current = value
    },[value])

    return(
        <>
            <p>Valor actual: {value}</p>
            <p>Valor anterior: {previousValue.current}</p>
            <button onClick={() => setValue((value) => value + 1)}>Cambiar valor</button>
        </>
    )
}