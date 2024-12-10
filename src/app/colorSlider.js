import { useRef } from "react";

export default function ColorSlider() {
    const color = useRef(null)
    function handleChange(e) {
        color.current.style.backgroundColor = `rgb(${e.target.value}, 100, 100)`;
    }

    return(
        <div ref={color}>
            <input type="range" min={0} max={255} onChange={handleChange}></input>
        </div>
    )
}