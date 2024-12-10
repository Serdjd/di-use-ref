import { useEffect, useRef, useState } from "react";

export default function RenderCounter() {
    const count = useRef(0)
    const [state,setState] = useState(true)
    useEffect(() => {
        count.current++
    })

    return(
        <>
            <h2>{count.current}</h2>
            <button onClick={() => setState((state) => !state)}>Pulsame</button>
        </>
    )
}