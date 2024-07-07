import { useState } from "react";

const Contacto = () => {

    const [valores, setValores] = useState({
        nombre: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleValores = (e) => {
        setValores({
            ...valores, 
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="container">
            <h1 className="main-title">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Ingresá tu nombre" 
                value={valores.nombre}
                onChange={handleValores}
                name="nombre"
                />
                <input 
                type="email" 
                placeholder="Ingresá tu e-mail" 
                value={valores.email}
                onChange={handleValores}
                name="email"
                />
                <button className="enviar" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contacto;