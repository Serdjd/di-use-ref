import { useEffect, useRef, useState } from "react"

export default function Timer() {
    const [time, setTime] = useState(new Date(0))
    const timerID = useRef(null)
    useEffect(() => {
        return(() => clearInterval(timerID.current))
    },[])

    function start() {
        if(timerID.current === null) {
            timerID.current = setInterval(() => {
                setTime((tiempo) => new Date(tiempo.getTime() + 1000))
            },1000)
        }
    }

    function stop() {
        clearInterval(timerID.current)
        timerID.current = null
    }
    
    return(
        <>
            <h1>{time.toISOString().substring(11, 19)}</h1>
            <button onClick={start}>Iniciar</button>
            <button onClick={stop}>Detener</button>
        </>
    )
}