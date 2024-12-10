import { useRef, useState } from "react";

export default function FormValidator() {
    const emailRef = useRef()
    const regex = new RegExp(".+?@.+?\\..+")
    const [error, setError] = useState(false)
    function validar() {
        if(!emailRef.current.value.match(regex)) {
            alert("Email no valido: el email debe ser como example@examp.domain")
        }
    }

    function realTimeValidate() {
        if(!emailRef.current.value.match(regex)) {
            setError(true)
        }
        else setError(false)
    }
    return(
       
        <>
            <input type="email" ref={emailRef} onBlur={validar} onChange={realTimeValidate}></input>
            {
                error && <p>Email no valido</p>
            }
        </>
    )
}