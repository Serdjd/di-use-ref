import { useRef, useState } from "react";

export default function TextEditor() {
    const [text, setText] = useState("")
    const history = useRef([])

    function handleChange(e) {
        setText(e.target.value)
        history.current.push(text)
    }

    function retroceder() {
        const value = history.current.pop()
        if(value !== undefined) {
            setText(value)
        }
        else alert("No hay más valores")
    }

    return(
        <>
            <input type="text" value={text} onChange={handleChange}></input>
            <br/>
            <button onClick={retroceder}>retroceder</button>
        </>
    )
 }