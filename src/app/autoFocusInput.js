import { useEffect, useRef } from "react";

export default function AutoFocusInput() {
    const focus = useRef(null)
    useEffect(() => {
        focus.current.focus()
    },[])
    return(
        <label>Escribe algo: <input type="text" ref={focus}></input></label>
    )
}